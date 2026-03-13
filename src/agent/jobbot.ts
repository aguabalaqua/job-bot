import { clockIn, clockOut } from "../scheduler/clock";
import { withinShift } from "../scheduler/shift";
import { logger } from "../utils/logger";
import { getWorkloadSnapshot } from "../monitor/workload";
import { scanInbox } from "../monitor/inbox-monitor";
import { processEmails } from "../tasks/emails";
import { generateReport } from "../tasks/reports";
import { updateSpreadsheet } from "../tasks/spreadsheets";
import { summarizeMeeting } from "../tasks/meetings";

export class JobBotAgent {
  async startShift() {
    clockIn();
    logger.info("JOB BOT online.");
  }

  async runCycle() {
    if (!withinShift()) {
      logger.info("Outside work hours. Waiting.");
      return;
    }

    const workload = getWorkloadSnapshot();

    logger.info(
      `Workload snapshot: emails=${workload.emailsPending}, reports=${workload.reportsDue}, sheets=${workload.spreadsheetUpdates}`,
    );

    const inboxCount = await scanInbox();

    await processEmails(inboxCount);

    if (workload.reportsDue > 0) {
      await generateReport();
    }

    if (workload.spreadsheetUpdates > 0) {
      await updateSpreadsheet(workload.spreadsheetUpdates);
    }

    if (workload.meetingsQueued > 0) {
      await summarizeMeeting();
    }
  }

  async endShift() {
    clockOut();
  }
}
