import { google } from 'googleapis'
const spreadsheetId = process.env.SHEET_ID
const range = process.env.RANGE
const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly']

const auth = new google.auth.GoogleAuth({
  credentials: {
    type: 'service_account',
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    universe_domain: 'googleapis.com',
  },
  scopes,
})

export async function getSheet() {
  const sheets = google.sheets({ version: 'v4', auth })
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  })
  const rows = res.data.values
  if (!rows || rows.length === 0) {
    return
  }
  return rows
}
