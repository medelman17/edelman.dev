import * as React from "react";
import { PageUiComponent } from "../../types";
import dynamic from "next/dynamic";

const BreadcrumbList = dynamic(() => import("./Breadcrumbs"));

export interface RenderUIComponentProps {
  ui: PageUiComponent;
}

export function RenderUiComponent(props: RenderUIComponentProps) {
  const ui = React.useMemo(() => {
    switch (props.ui) {
      case "Breadcrumbs":
        return <BreadcrumbList />;
      case "RecentContent":
      case "RelatedContent":
      case "ResourceList":
      case "TopicList":
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
