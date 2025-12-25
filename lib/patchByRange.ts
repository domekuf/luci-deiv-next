import { getSheets } from "./getSheets";
const spreadsheetId = process.env.SHEET_ID!;
const sheetRange = process.env.RANGE!;

export async function patchByRange(range: string, value: boolean) {
  const sheets = await getSheets();
  return sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${sheetRange}!${range}`,
    requestBody: { values: [[value ? 1 : 0]] },
    valueInputOption: "USER_ENTERED",
  });
}
