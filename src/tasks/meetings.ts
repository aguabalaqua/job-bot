import { logger } from "../utils/logger";

export async function summarizeMeeting() {
  const topics = [
    "quarterly roadmap",
    "customer acquisition",
    "product launch planning",
    "team velocity metrics",
  ];

  const topic = topics[Math.floor(Math.random() * topics.length)];

  logger.info(`Meeting summarized: ${topic}`);
}
