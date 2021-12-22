import { VideoFeedFrame, BackgroundImageDiv } from "./styles";

import bg from "../../../public/images/misc/bg-standin.jpg";

export default function VideoFeed() {
  return <VideoFeedFrame centered>
    <BackgroundImageDiv src={bg} />
  </VideoFeedFrame>;
}
