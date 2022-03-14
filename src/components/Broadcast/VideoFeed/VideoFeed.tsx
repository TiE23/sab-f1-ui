import useMeasure from "react-use-measure";

import { calculateFitSize, calculateScale } from "../../../utils/styling";
import { theme } from "../../../shared/theme";

import { VideoFeedFrame, BackgroundImageDiv, DimensionsSpan, BroadcastLayout } from "./styles";
import { MockupBlock } from "../../Common/MockupBlock.styled";

import bg from "../../../public/images/misc/bg-standin.jpg";

export default function VideoFeed() {
  const [frameRef, {
    height: frameHeight,
    width: frameWidth,
  }] = useMeasure();

  const {
    dimensionsWidthPx: broadcastWidth,
    dimensionsHeightPx: broadcastHeight,
  } = theme.broadcast;

  const [layoutWidth, layoutHeight] = calculateFitSize(frameWidth, frameHeight,
    [broadcastWidth, broadcastHeight]);
  const layoutScale = calculateScale(layoutWidth, layoutHeight,
    [broadcastWidth, broadcastHeight]);

  return (
    <VideoFeedFrame centered ref={frameRef}>
      <DimensionsSpan>
        {Math.floor(frameWidth)} x {Math.floor(frameHeight)}px
      </DimensionsSpan>
      <BackgroundImageDiv src={bg} />
      <BroadcastLayout width={broadcastWidth} height={broadcastHeight} scale={layoutScale} >
        <MockupBlock
          width="300px"
          height="900px"
          color="grey"
        />
      </BroadcastLayout>
    </VideoFeedFrame>
  );
}
