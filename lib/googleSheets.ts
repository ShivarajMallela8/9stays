import { google, sheets_v4 } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const SHEET_ID = process.env.SHEET_ID;

if (!GOOGLE_PRIVATE_KEY || !GOOGLE_CLIENT_EMAIL || !SHEET_ID) {
  throw new Error('Missing required environment variables.');
}

const auth = new google.auth.JWT({
  email: GOOGLE_CLIENT_EMAIL,
  key: GOOGLE_PRIVATE_KEY,
  scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

export const appendDataToSheet = async (values: (string | number)[]): Promise<sheets_v4.Schema$AppendValuesResponse | null> => {
  try {
    console.log('Attempting to append data to sheet:', SHEET_ID);
    console.log('Using service account email:', GOOGLE_CLIENT_EMAIL);

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [values],
      },
    });

    console.log('Data appended successfully:', response.data);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error appending data to Google Sheets:', error.message);
      if ('response' in error && error.response && typeof error.response === 'object' && 'data' in error.response) {
        console.error('Error response:', (error.response as { data: unknown }).data);
      }
    } else {
      console.error('Unknown error occurred');
    }
    return null;
  }
};