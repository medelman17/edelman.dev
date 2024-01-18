import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
    *[_type == "post" && defined(slug)] | order(_createdAt desc) {
        title,
        "image": mainImage,
        "slug": slug.current,
        "desc": description
    }
`;
