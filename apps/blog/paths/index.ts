const home = () => `/`;

const blog = {
  index: () => `/blog`,
  post: (slug: string) => `/blog/${slug}`,
  studio: () => `/studio`,
};

export { home, blog };
