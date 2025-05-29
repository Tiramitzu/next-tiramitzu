import { GetPublicRepositoriesQuery, GetRepositoriesContributedToQuery } from "generated/graphql";
import { GET_REPOSITORIES, GET_REPOSITORIES_CONTRIBUTED_TO } from "lib/queries";

import Discord from "discord-api-types/v10";
import Footer from "components/layout/Footer";
import Experience from "pages/experience";
import client from "lib/apolloClient";
import Projects from "pages/project";
import Profile from "pages/profile";
import FAB from "components/FAB";

export async function getServerSideProps() {
    const { data } = await client.query<GetPublicRepositoriesQuery>({
        query: GET_REPOSITORIES
    });

    const { data: data1 } = await client.query<GetRepositoriesContributedToQuery>({
        query: GET_REPOSITORIES_CONTRIBUTED_TO
    });

    const token = process.env.DISCORD_TOKEN;
    if (!token) {
        return { props: { error: "No Discord token provided." } };
    }

    const res = await fetch("https://discord.com/api/v10/users/@me", {
        headers: {
            Authorization: `${token}`
        }
    });

    if (!res.ok) {
        return { props: { error: `Discord API error: ${res.status}` } };
    }
    const user: Discord.APIUser = await res.json();

    return {
        props: {
            data,
            data1,
            user
        }
    };
}

const Index = ({ data, data1, user, error }: { data: GetPublicRepositoriesQuery; data1: GetRepositoriesContributedToQuery; user: Discord.APIUser; error: string | null }) => {
    return (
        <>
            {/* <Header /> */}
            <FAB />
            <Profile user={user} error={error} />
            <Projects data={data} data1={data1} />
            <Experience />
            <Footer />
        </>
    );
};

export default Index;
