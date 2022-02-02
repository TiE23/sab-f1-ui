import styled from "styled-components";

/**
 * scale is a percentage (0-100%)
 * */
type OverlayImageProps = {
  src: string,
  scale?: number,
};
export const OverlayImage = styled.img.attrs<OverlayImageProps>(({
  src,
}) => ({
  draggable: false,
  src,
}))<OverlayImageProps>`
  width: ${({ scale = 100 }) => `${scale}%`};

  &:active {
    outline: 2px solid red;
    outline-offset: -2px;
  }
`;
OverlayImage.displayName = "OverlayImage";

type OverlayImageContainerProps = {
  opacity: number,
};
export const OverlayImageContainer = styled.div.attrs<OverlayImageContainerProps>(({
  opacity,
}) => ({
  style: {
    opacity,
  },
}))<OverlayImageContainerProps>`
  display: flex;

  &:hover {
    > span {
      display: inline;
    }
  }

`;
OverlayImageContainer.displayName = "OverlayImageContainer";

export const OverlayImageSubContainer = styled.div`
  flex-shrink: 0;
`;
OverlayImageSubContainer.displayName = "OverlayImageSubContainer";

export const OverlayImageSize = styled.span`
  position: absolute;
  display: none;

  left: 0;
  bottom: -1.5em;
  width: 15ch;

  color: red;
  font-family: ${p => p.theme.fonts.f1Regular};
  font-size: 1em;
  text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
`;
OverlayImageSize.displayName = "OverlayImageSize";
