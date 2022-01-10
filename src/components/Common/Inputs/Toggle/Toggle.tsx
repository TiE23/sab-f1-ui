import { useState } from "react";
import { AnimatedBG } from "../../../../types/state";
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
  onToggle: (value: AnimatedBG) => void,
};
/**
 * This is my attempt at making a iOS-style toggle switch.
 * @param param0
 * @returns
 */
export const Toggle = ({ label, toggled, onToggle }: ToggleProps) => {
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
          <ToggleBackground toggled={toggled} />
          <ToggleCircle toggled={toggled} stretched={hovered} />
        </ToggleLabel>
      </ToggleBody>
    </ToggleContainer>
  );
};
