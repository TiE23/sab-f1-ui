import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { broadcastGraphicsSelector } from "../../../../features/broadcast/graphics/broadcastGraphicsSelector";
import { eventSelector } from "../../../../features/event/eventSelector";
import { BGTimingTowerDisplayMode, CarStatus } from "../../../../types/state";
import { DebugDurationProps } from "../../../../types/style";

import { RowsContainer } from "./styles";
import { TimingTowerRow } from "./TimingTowerRow";

type TimingTowerProps = DebugDurationProps;

export function TimingTower({ debugDurationMultiplier: DDM }: TimingTowerProps) {
  const { lastUpdate, grid, trackLength } = useSelector(eventSelector);
  const { timingBoard: { timingTower: { splitsMode, displayMode } } } = useSelector(
    broadcastGraphicsSelector,
  );

  const [startingCarsCount, setStartingCarsCount] = useState(0);
  const [retiredCarsCount, setRetiredCarsCount] = useState(0);
  const [rows, setRows] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Filter away cars that are marked as not starting so they don't appear.
    const startingGrid = grid.filter(car => car.status !== CarStatus.DidNotStart);
    setStartingCarsCount(startingGrid.length);

    let retiredCount = 0;
    startingGrid.forEach(car => {
      if (car.status === CarStatus.Retired) {
        ++retiredCount;
      }
    });
    setRetiredCarsCount(retiredCount);

    setRows(startingGrid.map(car =>
      <TimingTowerRow
        key={car.driver.id}
        car={car}
        grid={grid}
        startingCarsCount={startingGrid.length}
        retiredCarsCount={retiredCount}
        splitsMode={splitsMode}
        displayMode={displayMode}
        trackLength={trackLength}
        debugDurationMultiplier={DDM}
      />));
  }, [lastUpdate, splitsMode, displayMode]);

  return (
    <RowsContainer
      carsToDisplay={startingCarsCount}
      retiredCarsPresent={retiredCarsCount > 0}
      open={displayMode !== BGTimingTowerDisplayMode.Hidden}
      transitionProps={[{
        property: "opacity",
        duration: 1000,
      }]}
    >
      {rows}
    </RowsContainer>
  );
}
