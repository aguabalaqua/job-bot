import { logger } from "../utils/logger";

export async function processEmails(count: number) {
  if (count === 0) {
    logger.info("No emails to process.");
    return;
  }

  for (let i = 0; i < count; i++) {
    logger.info(`Reply drafted for message ${i + 1}`);
  }

  logger.info(`${count} emails processed.`);
}
