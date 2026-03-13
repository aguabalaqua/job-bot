import dotenv from "dotenv";

dotenv.config();

export const config = {
  agentName: process.env.JOBBOT_NAME || "JOB BOT",
  shiftStart: process.env.JOBBOT_SHIFT_START || "09:00",
  shiftEnd: process.env.JOBBOT_SHIFT_END || "17:00",
  pollInterval: Number(process.env.JOBBOT_POLL_INTERVAL_MS || 30000),
  logLevel: process.env.JOBBOT_LOG_LEVEL || "info",
};
