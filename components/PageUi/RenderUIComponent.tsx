import * as React from "react";
import { PageUiComponent } from "../../types";
import dynamic from "next/dynamic";

const BreadcrumbList = dynamic(() => import("./Breadcrumbs"));
const HotTopicList = dynamic(() => import("./HotTopicList"));
const HotResourceList = dynamic(() => import("./HotResourceList"));
const RecentContentList = dynamic(() => import("./RecentContent"));

export interface RenderUIComponentProps {
  ui: PageUiComponent;
}

export function RenderUiComponent(props: RenderUIComponentProps) {
  const ui = React.useMemo(() => {
    switch (props.ui) {
      case "Breadcrumbs":
        return <BreadcrumbList />;
      case "RecentContent":
        return <RecentContentList />;
      case "RelatedContent":
        return null;
      case "ResourceList":
        return <HotResourceList />;

      case "TopicList":
        return <HotTopicList />;

      case "WebMentionList":
      case "HowToList":
        return null;

      default:
        return <div>Ui component</div>;
    }
  }, [props.ui]);

  return <>{ui}</>;
}

export default RenderUiComponent;
