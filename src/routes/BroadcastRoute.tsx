import { useEffect, useRef, useState } from "react";

import { FullScreenContainer } from "./styles";
import { Layout } from "../components/Broadcast/Layout";
import { RouteHeader } from "../components/Common/RouteHeader";

export default function Broadcast() {
  const [height, setHeight] = useState(0);
  const ref = useRef < HTMLHeadElement>(null);

  useEffect(() => {
    if (ref?.current != null)
      setHeight(ref.current.clientHeight);
  });

  return (
    <FullScreenContainer minHeight={728} minWidth={1200}>
      <RouteHeader ref={ref} title="Broadcast Page" />
      <Layout headerHeight={height} />
    </FullScreenContainer>
  );
}
