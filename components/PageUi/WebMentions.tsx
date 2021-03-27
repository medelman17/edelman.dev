import * as React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Flex, Box, VStack } from "@chakra-ui/react";
import { useWebmentionsBySlug } from "../../hooks/webmentions";
import {
  WebMentionType,
  WebMentionEvent,
  ModelWebMentionEventConnection,
} from "../../src/API";

export type UseWebMentionState = {
  InReplyTo: WebMentionEvent[];
  LikeOf: WebMentionEvent[];
  RepostOf: WebMentionEvent[];
  MentionOf: WebMentionEvent[];
  BookmarkOf: WebMentionEvent[];
  RSVP: WebMentionEvent[];
};

export function useWebMentions() {
  const [state, setState] = React.useState<UseWebMentionState>({
    InReplyTo: [],
    LikeOf: [],
    RepostOf: [],
    MentionOf: [],
    BookmarkOf: [],
    RSVP: [],
  });
  const result = useWebmentionsBySlug();

  React.useEffect(() => {
    let newState: UseWebMentionState = {
      InReplyTo: [],
      LikeOf: [],
      RepostOf: [],
      MentionOf: [],
      BookmarkOf: [],
      RSVP: [],
    };

    result.items.forEach((item) => {
      switch (item.type) {
        case WebMentionType.InReplyTo:
          newState.InReplyTo.push(item);
          break;
        case WebMentionType.BookmarkOf:
          newState.BookmarkOf.push(item);
          break;
        case WebMentionType.LikeOf:
          newState.LikeOf.push(item);
          break;
        case WebMentionType.MentionOf:
          newState.MentionOf.push(item);
          break;
        case WebMentionType.RepostOf:
          newState.RepostOf.push(item);
          break;
        case WebMentionType.RSVP:
          newState.RSVP.push(item);
          break;
      }
    });

    setState(newState);
  }, [result]);

  return state;
}

export interface WebMentionsListProps {
  mentions: WebMentionEvent[];
}

function isTwitter(url: URL) {
  return url.origin === "https://twitter.com";
}

function handleTwitterWebMention(wm: WebMentionEvent) {
  const postUrl = new URL(wm.postUrl);
  const postUrlBits = postUrl.pathname.split("/");
  const tweetId = postUrlBits[postUrlBits.length - 1];
  return <TwitterTweetEmbed tweetId={tweetId} />;
}

export function WebMentionList(props: WebMentionsListProps) {
  const renderWebmention = React.useCallback(
    (wm: WebMentionEvent, index: number, mentions: WebMentionEvent[]) => {
      const postUrl = new URL(wm.postUrl);
      if (isTwitter(postUrl)) {
        return handleTwitterWebMention(wm);
      }

      return null;
    },
    []
  );

  return (
    <VStack align={"stretch"}>{props.mentions.map(renderWebmention)}</VStack>
  );
}
