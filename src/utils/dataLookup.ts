import { cloneDeep } from "lodash";
import { drivers, teams, teamNumberStyles, teamFlagStyles } from "../domain/data/teams";
import { DriverId, TeamId } from "../types/state";

/**
 * Prefer getting data from teams.ts through these simple getter functions.
 * Why? Because we cannot use type literals (such as TeamId) as keys in an
 * object in TypeScript. This allows me to enforce some type checking in a
 * situation I wouldn't be able to normally
 */

export function getDriver(driverId: DriverId) {
  return drivers[driverId];
}
export function cloneDriver(driverId: DriverId) {
  return cloneDeep(drivers[driverId]);
}

export function getTeam(teamId: TeamId) {
  return teams[teamId];
}
export function cloneTeam(teamId: TeamId) {
  return cloneDeep(teams[teamId]);
}

export function getTeamNumberStyle(teamId: TeamId) {
  return teamNumberStyles[teamId];
}
export function getTeamFlagStyle(teamId: TeamId) {
  return teamFlagStyles[teamId];
}
