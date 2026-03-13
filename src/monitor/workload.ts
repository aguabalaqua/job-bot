export function getWorkloadSnapshot() {
  return {
    emailsPending: Math.floor(Math.random() * 30),
    reportsDue: Math.floor(Math.random() * 5),
    spreadsheetUpdates: Math.floor(Math.random() * 20),
    meetingsQueued: Math.floor(Math.random() * 3),
  };
}
