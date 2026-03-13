import { logger } from "../utils/logger";

export function clockIn() {
  logger.info("SHIFT STARTED");
}

export function clockOut() {
  logger.info("SHIFT ENDED");
}
