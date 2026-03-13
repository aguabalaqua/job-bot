import { config } from "../utils/config";

export function withinShift(): boolean {
  const now = new Date();

  const [startH, startM] = config.shiftStart.split(":").map(Number);
  const [endH, endM] = config.shiftEnd.split(":").map(Number);

  const start = new Date();
  start.setHours(startH, startM, 0);

  const end = new Date();
  end.setHours(endH, endM, 0);

  return now >= start && now <= end;
}
