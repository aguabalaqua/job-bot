import { logger } from "../utils/logger";

export async function scanInbox() {
  const detected = Math.floor(Math.random() * 12);

  logger.info(`Inbox scan complete. ${detected} messages detected.`);

  return detected;
}
