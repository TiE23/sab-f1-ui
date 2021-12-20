import React from "react";
import { Container } from "./styles";

type RouteHeaderProps = {
  title: string,
};

export const RouteHeader = React.forwardRef<HTMLHeadElement, RouteHeaderProps>(
  (props, ref) => (
    <Container ref={ref}>
      {props.title}
    </Container>
  ),
);
RouteHeader.displayName = "RouteHeader";  // Required due to forwardRef().

