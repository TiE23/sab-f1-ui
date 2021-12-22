import { VideoFeedFrame, BackgroundImage, BackgroundImageDiv } from "./styles";

import bg from "../../../public/images/misc/bg-standin.jpg";

export default function VideoFeed() {
  return <VideoFeedFrame centered={true}>
    {/* <BackgroundImage src={bg} alt="formula one cars on track" /> */}
    <BackgroundImageDiv src={bg} />
  </VideoFeedFrame>;
}
