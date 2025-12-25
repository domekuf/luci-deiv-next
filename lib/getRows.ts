import { getSheets } from "./getSheets";
const spreadsheetId = process.env.SHEET_ID;
const range = process.env.RANGE;

export async function getRows() {
  const res = await (
    await getSheets()
  ).spreadsheets.values.get({
    spreadsheetId,
    range,
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) {
    return;
  }
  return rows;
}
