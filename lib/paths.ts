const paths = {
  home() {
    return `/`;
  },
  bin() {
    return `/bin`;
  },
  blog() {
    return `/blog`;
  },
  blog_post(slug: string) {
    return `/blog/${slug}`;
  },
  studio() {
    return `/studio`;
  },
};

export default paths;
