import { groq } from "next-sanity";

export const POST_QUERY = groq`
*[_type == "post" && slug.current == $slug] {
    title,
    body,
    "slug": slug.current,
    "image": mainImage
  }[0]
`;
