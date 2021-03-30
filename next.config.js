const SentryWebpackPlugin = require("@sentry/webpack-plugin");
// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
} = process.env;

const COMMIT_SHA = process.env.AWS_COMMIT_ID;

process.env.SENTRY_DSN = SENTRY_DSN;
const basePath = "";

const nextConfig = {
  // trailingSlash: true,
  future: {
    webpack5: true,
  },

  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["cdn.sanity.io"],
    loader: "imgix",
  },
  webpack: (config, options) => {
    if (!options.isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/react";
    }

    config.plugins.push(
      new options.webpack.DefinePlugin({
        "process.env.NEXT_IS_SERVER": JSON.stringify(
          options.isServer.toString()
        ),
      })
    );

    if (
      SENTRY_DSN &&
      SENTRY_ORG &&
      SENTRY_PROJECT &&
      SENTRY_AUTH_TOKEN &&
      COMMIT_SHA &&
      NODE_ENV === "production"
    ) {
      config.plugins.push(
        new SentryWebpackPlugin({
          include: ".next",
          ignore: ["node_modules"],
          stripPrefix: ["webpack://_N_E/"],
          urlPrefix: `~${basePath}/_next`,
          release: COMMIT_SHA,
        })
      );
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
