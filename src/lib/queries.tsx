import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`query GetPublicRepositories {
    viewer {
        id
        repositories(visibility: PUBLIC, first: 50) {
            nodes {
                id
                openGraphImageUrl
                name
                url
                languages(first: 50, orderBy: { direction: DESC, field: SIZE}) {
                    nodes {
                        id
                        color
                        name
                    }
                }
            }
        }
    }
}`;

export const GET_REPOSITORIES_CONTRIBUTED_TO = gql`query GetRepositoriesContributedTo {
    viewer {
        id
        repositoriesContributedTo(first: 50, privacy: PUBLIC) {
            nodes {
                id
                openGraphImageUrl
                name
                url
                languages(first: 50, orderBy: { direction: DESC, field: SIZE}) {
                    nodes {
                        id
                        color
                        name
                    }
                }
            }
        }
    }
}`;