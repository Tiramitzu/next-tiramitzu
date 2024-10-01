import { GetPublicRepositoriesQuery, GetRepositoriesContributedToQuery } from "generated/graphql";
import { GET_REPOSITORIES, GET_REPOSITORIES_CONTRIBUTED_TO } from "lib/queries";

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Projects from "pages/projects";
import Profile from "pages/profile";
import FAB from "components/FAB";
import client from "lib/apolloClient";

export async function getServerSideProps() {
	const { data } = await client.query<GetPublicRepositoriesQuery>({
		query: GET_REPOSITORIES
	});

	const { data: data1 } = await client.query<GetRepositoriesContributedToQuery>({
		query: GET_REPOSITORIES_CONTRIBUTED_TO
	});

	return {
		props: {
			data,
			data1
		}
	};
}

const Index = ({ data, data1 }) => {
	return (
		<>
			<Header />
			<FAB />
			<Profile />
			<Projects data={data} data1={data1} />
			<Footer />
		</>
	);
};

export default Index;
