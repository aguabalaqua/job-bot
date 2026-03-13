import fs from "fs";
import path from "path";

const logFile = path.join(process.cwd(), "src/logs/workday.log");

function write(line: string) {
  fs.appendFileSync(logFile, line + "\n");
}

function timestamp() {
  return new Date().toISOString();
}

export const logger = {
  info(message: string) {
    const line = `[${timestamp()}] INFO  ${message}`;
    console.log(line);
    write(line);
  },

  warn(message: string) {
    const line = `[${timestamp()}] WARN  ${message}`;
    console.warn(line);
    write(line);
  },

  error(message: string) {
    const line = `[${timestamp()}] ERROR ${message}`;
    console.error(line);
    write(line);
  },
};
