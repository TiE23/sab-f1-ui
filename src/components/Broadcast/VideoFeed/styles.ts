import styled, { css } from "styled-components/macro";

import { Fraction, Px } from "../../../types/style";

type VideoFeedFrameProps = {
  centered?: boolean,
};
export const VideoFeedFrame = styled.div<VideoFeedFrameProps>`
  position: relative;
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

type BroadcastLayoutProps = {
  height: Px,
  width: Px,
  scale: Fraction,
};
export const BroadcastLayout = styled.div.attrs<BroadcastLayoutProps>(({
  height,
  width,
  scale,
}) => ({ style: { height, width, transform: `scale(${scale})` } }))<BroadcastLayoutProps>`
  position: absolute;
`;

export const BackgroundImage = styled.img`
  height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

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

export const DimensionsSpan = styled.span`
  position: absolute;
  top: 5px;
  right: 10px;
  color: ${p => p.theme.colors.textWhite};
  font-family: ${p => p.theme.fonts.f1Regular};
`;
