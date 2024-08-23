export async function waitRealTime(milli = 50) {
  await new Promise((r) => setTimeout(r, milli));
}
