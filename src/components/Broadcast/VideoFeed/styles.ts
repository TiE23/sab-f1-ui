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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
      background-position: center;
    }
  `}
`;
VideoFeedFrame.displayName = "VideoFeedFrame";

export const BackgroundImage = styled.img`
  height: 100%;
  max-width: 100%;
  object-fit: contain;
`;
BackgroundImage.displayName = "BackgroundImage";

type BackgroundImageDivProps = {
  src: string,
}
export const BackgroundImageDiv = styled.div<BackgroundImageDivProps>`
  height: 100%;
  width: 100%;
  background-image: ${({ src }) => `url("${src}")`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0% 50%;
`;
BackgroundImageDiv.displayName = "BackgroundImageDiv";
