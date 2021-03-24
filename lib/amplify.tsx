import Amplify, { Analytics } from "aws-amplify";
import awsExports from "../src/aws-exports";

export function initAmplify() {
  Amplify.configure({
    ...awsExports,
    ssr: true,
    Auth: {
      cookieStorage: {
        domain: ".edel.monster",
        path: "/",
        expires: 365,
        sameSite: "strict",
        secure: true,
      },
    },
  });

  if (process.env.NODE_ENV === "production") {
    Analytics.autoTrack("session", {
      enable: process.env.NODE_ENV === "production",
      provider: "AWSPinpoint",
    });

    Analytics.autoTrack("pageView", {
      enable: process.env.NODE_ENV === "production",
      event: "pageView",
      type: "multiPageApp",
      provider: "AWSPinpoint",
    });

    Analytics.autoTrack("event", {
      enable: process.env.NODE_ENV === "production",
      events: ["click"],
      selectorPrefix: "data-amplify-analytics-",
      provider: "AWSPinpoint",
    });
  }
}
