import { FullScreenContainer } from "./styles";
import { Layout } from "../components/Broadcast/Layout";
import { MainMenu } from "../components/Menu";
import { useDimensions } from "../utils/hooks";

export default function Broadcast() {
  const [ref, { height }] = useDimensions<HTMLDivElement>();

  return (
    <FullScreenContainer minHeight={700} minWidth={900}>
      <MainMenu ref={ref}/>
      <Layout headerHeight={height} />
    </FullScreenContainer>
  );
}
