import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`query GetPublicRepositories {
    viewer {
        repositories(visibility: PUBLIC, first: 50) {
            nodes {
                openGraphImageUrl
                name
                url
                languages(first: 50, orderBy: { direction: DESC, field: SIZE}) {
                    nodes {
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
        repositoriesContributedTo(first: 50, privacy: PUBLIC) {
            nodes {
                openGraphImageUrl
                name
                url
                languages(first: 50, orderBy: { direction: DESC, field: SIZE}) {
                    nodes {
                        color
                        name
                    }
                }
            }
        }
    }
}`;