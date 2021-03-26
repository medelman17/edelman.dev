import * as React from "react";
import { PageUiComponent } from "../../types";

export interface RenderUIComponentProps {
  ui: PageUiComponent;
}

export function RenderUiComponent(props: RenderUIComponentProps) {
  const ui = React.useMemo(() => {
    switch (props.ui) {
      case "RecentContent":
      case "RelatedContent":
      case "ResourceList":
      case "TopicList":
      case "WebMentionList":
      case "HowToList":
      default:
        return <div>Ui component</div>;
    }
  }, [props.ui]);

  return <>{ui}</>;
}

export default RenderUiComponent;
