import useMeasure from "react-use-measure";

import { calculateFitSize, calculateScale } from "../../../utils/styling";
import { theme } from "../../../shared/theme";

import { VideoFeedFrame, BackgroundImageDiv, DimensionsSpan, BroadcastLayout, Logo } from "./styles";
import { TimingBoard } from "../../BroadcastGraphics/TimingBoard";
import { ChyronContainer } from "../../BroadcastGraphics/Chyrons/Container";

import bg from "../../../public/images/misc/bg-standin.jpg";
import f1Logo from "../../../public/images/logos/f1-logo-white.svg";

export default function VideoFeed() {
  const [frameRef, {
    height: frameHeight,
    width: frameWidth,
  }] = useMeasure();

  const {
    dimensionsWidthPx: broadcastWidth,
    dimensionsHeightPx: broadcastHeight,
    logoHeightPx,
    placement,
  } = theme.broadcast;

  const [layoutWidth, layoutHeight] = calculateFitSize(frameWidth, frameHeight,
    [broadcastWidth, broadcastHeight]);
  const layoutScale = calculateScale(layoutWidth, layoutHeight,
    [broadcastWidth, broadcastHeight]);

  return (
    <VideoFeedFrame centered ref={frameRef}>
      <DimensionsSpan>
        Frame: {Math.floor(frameWidth)} x {Math.floor(frameHeight)}px
        <br />
        Scaled: {Math.floor(layoutWidth)} x {Math.floor(layoutHeight)}px ({(layoutScale * 100).toFixed(1)}%)
      </DimensionsSpan>
      <BackgroundImageDiv src={bg} />
      <BroadcastLayout width={broadcastWidth} height={broadcastHeight} scale={layoutScale} >
        <TimingBoard placement={placement.timingBoard} />
        <ChyronContainer placement={placement.chyrons} />
        <Logo height={logoHeightPx} placement={placement.logo} src={f1Logo} />
      </BroadcastLayout>
    </VideoFeedFrame>
  );
}
