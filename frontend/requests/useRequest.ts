import { GraphQLClient} from "graphql-request";

const API_URL = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`;

export const graphQLClient = new GraphQLClient(API_URL, {
  credentials: 'include'
});