import { JobBotAgent } from "../src/agent/jobbot";
import { bootRuntime } from "../src/agent/runtime";
import { config } from "../src/utils/config";

async function main() {
  await bootRuntime();

  const agent = new JobBotAgent();

  await agent.startShift();

  setInterval(async () => {
    await agent.runCycle();
  }, config.pollInterval);
}

main();
