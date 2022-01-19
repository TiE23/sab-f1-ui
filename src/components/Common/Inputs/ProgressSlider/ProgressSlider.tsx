import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import useMeasure from "react-use-measure";
import { clamp } from "lodash";

import {
  ProgressSliderBar,
  ProgressSliderBarHandle,
  ProgressSliderBarIndicator,
  ProgressSliderBody,
} from "./styles";

const MARGIN_WIDTH = 15;
const percentage = (value: number) => `${Math.floor(value * 100)}%`;

type ProgressSliderProps = {
  value: number,  // Fraction of 1 (0.0 to 1.0)
  onChange: (value: number) => void,
  disabled?: boolean,
  formatter?: (value: number) => string,
};
export function ProgressSlider({
  value,
  onChange,
  disabled = false,
  formatter = percentage,
}: ProgressSliderProps) {
  const [bodyRef, {
    width: bodyWidth,
  }] = useMeasure();
  const barPos = useSpring({ x: ((bodyWidth - 2 * MARGIN_WIDTH) * value) + MARGIN_WIDTH });
  const bindBarPos = useDrag((params) => {
    const newPos = clamp(
      barPos.x.get() + params.delta[0],
      MARGIN_WIDTH,
      bodyWidth - MARGIN_WIDTH,
    );
    const newValue = (newPos - MARGIN_WIDTH) / (bodyWidth - 2 * MARGIN_WIDTH);

    barPos.x.set(newPos);
    onChange(newValue);
  }, { enabled: !disabled });

  const AnimatedProgressSliderBar = animated(ProgressSliderBar);

  return (
    <ProgressSliderBody ref={bodyRef}>
      <AnimatedProgressSliderBar
        {...bindBarPos()}
        style={{ x: barPos.x }}
        bodyWidth={bodyWidth - MARGIN_WIDTH}
      >
        <ProgressSliderBarHandle />
        <ProgressSliderBarIndicator left={barPos.x.get() > 45 || barPos.x.get() < 0}>
          {formatter(value)}
        </ProgressSliderBarIndicator>
      </AnimatedProgressSliderBar>
    </ProgressSliderBody>
  );
}
