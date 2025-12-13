import { GetPublicRepositoriesQuery, GetRepositoriesContributedToQuery } from "generated/graphql";
import { GET_REPOSITORIES, GET_REPOSITORIES_CONTRIBUTED_TO } from "lib/queries";
import type { GetServerSidePropsContext } from "next";

import Discord, { PresenceUpdateStatus, GatewayActivity } from "discord-api-types/v10";
import Footer from "components/layout/Footer";
import Experience from "pages/experience";
import client from "lib/apolloClient";
import Projects from "pages/project";
import Profile from "pages/profile";
import FAB from "components/FAB";

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
    const { data } = await client.query<GetPublicRepositoriesQuery>({
        query: GET_REPOSITORIES
    });

    const { data: data1 } = await client.query<GetRepositoriesContributedToQuery>({
        query: GET_REPOSITORIES_CONTRIBUTED_TO
    });

    const token = process.env.DISCORD_TOKEN;
    const userId = process.env.USER_ID;
    if (!token || !userId) {
        return { props: { user: null, status: PresenceUpdateStatus.Offline, activities: [] } };
    }

    const res = await fetch(`https://discord.com/api/v10/users/${userId}`, {
        headers: {
            Authorization: `Bot ${token}`
        }
    });

    if (!res.ok) {
        return { props: { error: `Discord API error: ${res.status}` } };
    }
    const user: Discord.APIUser = await res.json();

    // Fetch Discord status server-side
    let status: PresenceUpdateStatus = PresenceUpdateStatus.Offline;
    let activities: GatewayActivity[] = [];
    try {
        const protocol = req.headers["x-forwarded-proto"] || "http";
        const host = req.headers.host;
        const statusRes = await fetch(`${protocol}://${host}/api/discord-status`);
        if (statusRes.ok) {
            const statusData = await statusRes.json();
            status = statusData.status || PresenceUpdateStatus.Offline;
            activities = statusData.activities || [];
        }
    } catch (error) {
        console.error("Failed to fetch Discord status:", error);
        // Default to offline if fetch fails
    }

    return {
        props: {
            data,
            data1,
            user,
            status,
            activities
        }
    };
}

const Index = ({ data, data1, user, status, activities }: { data: GetPublicRepositoriesQuery; data1: GetRepositoriesContributedToQuery; user: Discord.APIUser; status: PresenceUpdateStatus; activities: GatewayActivity[] }) => {
    return (
        <>
            {/* <Header /> */}
            <FAB />
            <Profile user={user} status={status} activities={activities} />
            <Projects data={data} data1={data1} />
            <Experience />
            <Footer />
        </>
    );
};

export default Index;
