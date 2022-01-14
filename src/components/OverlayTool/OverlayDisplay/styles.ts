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
`;
OverlayImage.displayName = "OverlayImage";

export const OverlayImageContainer = styled.div`
  display: flex;
`;
OverlayImageContainer.displayName = "OverlayImageContainer";

export const OverlayImageSubContainer = styled.div`
  flex-shrink: 0;
`;
OverlayImageSubContainer.displayName = "OverlayImageSubContainer";
