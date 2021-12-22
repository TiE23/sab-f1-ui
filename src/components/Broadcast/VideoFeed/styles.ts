import styled, { css } from "styled-components";

type VideoFeedFrameProps = {
  centered?: boolean,
};
export const VideoFeedFrame = styled.div<VideoFeedFrameProps>`
  height: 100%;
  width: 100%;
  background-color: ${p => p.theme.colors.videoFrameBG};
  overflow: hidden;

  ${({ centered = false }) => centered && css`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    /* > * {
      left: 10px;
    } */
  `}
`;
VideoFeedFrame.displayName = "VideoFeedFrame";

export const BackgroundImage = styled.img`
  height: 100%;
  object-fit: contain;
`;
BackgroundImage.displayName = "BackgroundImage";

/**
 * A slight improvement to using a simple img in that we can resize the image
 * (the video) to shrink slightly in the video feed frame if the browser window
 * is too narrow.
 */
type BackgroundImageDivProps = {
  src: string,
}
export const BackgroundImageDiv = styled.div<BackgroundImageDivProps>`
  height: 100%;
  width: 100%;
  background-image: ${({ src }) => `url("${src}")`};
  background-size: contain;
  background-repeat: no-repeat;
`;
BackgroundImageDiv.displayName = "BackgroundImageDiv";
