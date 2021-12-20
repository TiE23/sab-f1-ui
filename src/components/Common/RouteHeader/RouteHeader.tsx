import React from "react";
import { HeaderBar } from "./styles";

type RouteHeaderProps = {
  title: string,
};

export const RouteHeader = React.forwardRef<HTMLHeadElement, RouteHeaderProps>(
  (props, ref) => (
    <HeaderBar ref={ref}>
      {props.title}
    </HeaderBar>
  ),
);
RouteHeader.displayName = "RouteHeader";  // Required due to forwardRef().

