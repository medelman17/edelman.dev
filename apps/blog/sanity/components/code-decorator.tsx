import { ReactNode } from "react";

export interface CodeDecoratorProps {
  children: ReactNode;
}

export function CodeDecorator({ children }: CodeDecoratorProps) {
  return (
    <span
      style={{
        // backgroundColor: themeProps["--neutrals-900"],
        fontFamily: "monospace",
        // border: `0.5px solid ${themeProps["--neutrals-600"]}`,
        padding: "0.125rem",
        borderRadius: "0.125rem",
      }}
    >
      {children}
    </span>
  );
}

export default CodeDecorator;
