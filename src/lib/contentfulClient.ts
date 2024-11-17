import { createClient } from "contentful";

const contentfulClient = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN || "",
});

export default contentfulClient;
