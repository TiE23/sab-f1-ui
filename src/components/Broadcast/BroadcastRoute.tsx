import { useSelector } from "react-redux";

import { FullScreenContainer } from "../Common/FullScreenContainer.styled";
import { Layout } from "./Layout";
import { menuSelector } from "../../features/pageDimensions/pageDimensionsSelector";

export default function Broadcast() {
  const { height } = useSelector(menuSelector);

  return (
    <FullScreenContainer minHeight={700} minWidth={900} heightCutoff={height}>
      <Layout />
    </FullScreenContainer>
  );
}
