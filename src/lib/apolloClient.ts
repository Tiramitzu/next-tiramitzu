import "@apollo/client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { Defer20220824Handler } from "@apollo/client/incremental";
import { SetContextLink } from "@apollo/client/link/context";

const httpLink = new HttpLink({
    uri: "https://api.github.com/graphql"
});

const authLink = new SetContextLink((operation) => {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    return {
        headers: {
            ...operation.headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    };
});

const client = new ApolloClient({
    ssrMode: true,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    incrementalHandler: new Defer20220824Handler()
});

export default client;

declare module "@apollo/client" {
    export interface TypeOverrides extends Defer20220824Handler.TypeOverrides {}
}
