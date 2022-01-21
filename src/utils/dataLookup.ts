import { drivers, teams, teamNumberStyles, NumberStyle } from "../domain/data/teams";
import { Driver, DriverId, Team, TeamId } from "../types/state";

/**
 * Prefer getting data from teams.ts through these simple getter functions.
 * Why? Because we cannot use type literals (such as TeamId) as keys in an
 * object in TypeScript. This allows me to enforce some type checking in a
 * situation I wouldn't be able to normally
 */

export function getDriver(driverId: DriverId): Driver {
  return drivers[driverId];
}

export function getTeam(teamId: TeamId): Team {
  return teams[teamId];
}

export function getTeamNumberStyle(teamId: TeamId): NumberStyle {
  return teamNumberStyles[teamId];
}
