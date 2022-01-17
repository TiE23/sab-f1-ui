import { useState } from "react";

import {
  ToggleContainer,
  ToggleBody,
  ToggleInput,
  ToggleLabel,
  ToggleBackground,
  ToggleCircle,
} from "./styles";

export type ToggleProps = {
  label: string,
  toggled: boolean,
  onToggle: (value: boolean) => void,
  showIndicators?: boolean,
};
/**
 * This is my attempt at making a iOS-style toggle switch.
 */
export const Toggle = ({
  label,
  toggled,
  onToggle,
  showIndicators = false,
}: ToggleProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <ToggleContainer>
      {label}{" "}
      <ToggleBody>
        <ToggleInput
          type="checkbox"
          name={label}
          id={label}
          checked={toggled}
          onChange={e => onToggle(e.target.checked)}
        />
        <ToggleLabel
          htmlFor={label}
          onMouseDown={() => setHovered(true)}
          onMouseUp={() => setHovered(false)}
        >
          <ToggleBackground toggled={toggled} showIndicators={showIndicators}>
            <ToggleCircle toggled={toggled} stretched={hovered} />
          </ToggleBackground>
        </ToggleLabel>
      </ToggleBody>
    </ToggleContainer>
  );
};
