import { logger } from "../utils/logger";

export async function generateReport() {
  const metrics = {
    revenue: Math.floor(Math.random() * 100000),
    growth: `${Math.floor(Math.random() * 15)}%`,
    tasksCompleted: Math.floor(Math.random() * 50),
  };

  logger.info(
    `Report generated. Revenue ${metrics.revenue}, growth ${metrics.growth}`,
  );
}
