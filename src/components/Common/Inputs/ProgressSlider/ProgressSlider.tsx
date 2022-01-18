import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import useMeasure from "react-use-measure";
import { clamp } from "lodash";

import { ProgressSliderBar, ProgressSliderBarHandle, ProgressSliderBarHandleContainer, ProgressSliderBody } from "./styles";

const MARGIN_WIDTH = 15;

type ProgressSliderProps = {
  value: number,  // Fraction of 1 (0.0 to 1.0)
  onChange: (value: number) => void,
  formatter?: (value: number) => string,
};
export function ProgressSlider({
  value,
  onChange,
  formatter = (x) => x.toString(),
}: ProgressSliderProps) {
  const [bodyRef, {
    width: bodyWidth,
  }] = useMeasure();
  const barPos = useSpring({ x: (bodyWidth -  MARGIN_WIDTH) * value });
  const bindBarPos = useDrag((params) => {
    const newPos = clamp(barPos.x.get() + params.delta[0], MARGIN_WIDTH, bodyWidth - MARGIN_WIDTH);
    const newValue = newPos / (bodyWidth - MARGIN_WIDTH);

    barPos.x.set(newPos);
    onChange(newValue);

    console.log("drag", newPos, newValue);
  });

  // const
  // console.log("main", bodyWidth, barPos.x.get());
  // console.log("main",barPos.x.get());
  // console.log(bodyWidth);

  return (
    <ProgressSliderBody ref={bodyRef}>


      <ProgressSliderBar style={{ x: barPos.x }} bodyWidth={bodyWidth - MARGIN_WIDTH} />
      <ProgressSliderBarHandleContainer {...bindBarPos()} style={{ x: barPos.x }}>
        <ProgressSliderBarHandle />
      </ProgressSliderBarHandleContainer>

    </ProgressSliderBody>
  );
}
