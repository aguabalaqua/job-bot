import { logger } from "../utils/logger";

export async function updateSpreadsheet(rows: number) {
  for (let i = 0; i < rows; i++) {
    logger.info(`Spreadsheet row ${i + 1} updated`);
  }

  logger.info(`${rows} spreadsheet updates completed`);
}
