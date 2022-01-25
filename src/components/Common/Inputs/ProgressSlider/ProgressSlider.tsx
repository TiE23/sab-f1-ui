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

/**
 * This component isn't 100% amazing. Consider that the number indicator
 * component may be bugged when loading with a value that isn't 1.
 */

const MARGIN_WIDTH = 15;
const percentage = (value: number) => `${Math.floor(value * 100)}%`;

type ProgressSliderProps = {
  value: number,  // Fraction of 1 (0.0 to 1.0)
  onChange: (value: number) => void,
  disabled?: boolean,
  formatter?: (value: number) => string,
  barColor?: string,
  labelColor?: string,
  handleColor?: string,
};
export function ProgressSlider({
  value,
  onChange,
  disabled = false,
  formatter = percentage,
  barColor,
  labelColor,
  handleColor,
}: ProgressSliderProps) {
  const [bodyRef, {
    width: bodyWidth,
  }] = useMeasure();
  const [labelRef, {
    width: labelWidth,
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
        disabled={disabled}
        color={barColor}
      >
        <ProgressSliderBarHandle color={disabled ? "black" : handleColor} />
        <ProgressSliderBarIndicator
          ref={labelRef}
          left={
            (
              barPos.x.get() > labelWidth * 1.5
              || barPos.x.get() < 0
              || value === 1
            ) ? -1 : value > 0.1 ? 4 : 3  // Tuned fitting considerations.
          }
          disabled={disabled}
          color={labelColor}
        >
          {formatter(value)}
        </ProgressSliderBarIndicator>
      </AnimatedProgressSliderBar>
    </ProgressSliderBody>
  );
}
