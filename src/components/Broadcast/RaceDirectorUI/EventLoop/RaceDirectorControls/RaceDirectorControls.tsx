import { useDispatch, useSelector } from "react-redux";
import { PadBox } from "@bedrock-layout/padbox";

import { eventSelector } from "../../../../../features/event/eventSelector";
import { ClickSpan } from "../../../../Common/Inputs/ClickSpan.styled";
import { EventStatus } from "../../../../../types/state";
import { setEventStatus } from "../../../../../features/event/eventSlice";

export function RaceDirectorControls() {
  const dispatch = useDispatch();
  const { eventStatus } = useSelector(eventSelector);

  return (
    <PadBox padding="md">
      <ClickSpan onClick={() => {
        if (eventStatus !== EventStatus.Running) {
          dispatch(setEventStatus(EventStatus.Running));
        } else {
          dispatch(setEventStatus(EventStatus.Stopped));
        }
      }}>
        EventStatus = {EventStatus[eventStatus]}
      </ClickSpan>
    </PadBox>
  );
}
