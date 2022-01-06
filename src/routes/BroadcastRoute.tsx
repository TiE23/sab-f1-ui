import { useSelector } from "react-redux";

import { FullScreenContainer } from "./styles";
import { Layout } from "../components/Broadcast/Layout";
import { menuSelector } from "../features/pageDimensions/pageDimensionsSelector";

export default function Broadcast() {
  const { height } = useSelector(menuSelector);

  return (
    <FullScreenContainer minHeight={700} minWidth={900} heightCutoff={height}>
      <Layout />
    </FullScreenContainer>
  );
}
