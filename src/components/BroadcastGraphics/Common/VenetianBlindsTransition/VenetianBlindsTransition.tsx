import { VenetianBlindsFilter } from "./styles";

type VenetianBlindsTransitionProps = {
  color: string,
};
export const VenetianBlindsTransition = (
  { color, children }: React.PropsWithChildren<VenetianBlindsTransitionProps>,
) => (
  <VenetianBlindsFilter
    deg={-45}
    transparentWidth={3}
    opaqueWidth={5}
    opaqueColor={color}
  >
    {children}
  </VenetianBlindsFilter>
);
