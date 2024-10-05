import { NextResponse } from 'next/server';
import { appendDataToSheet } from '@/lib/googleSheets'; // Adjust the import based on your folder structure

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Ensure data contains the necessary fields
    const { name, email, phone, days, guests } = data;

    // Basic validation
    if (!name || !email || !phone || !days || !guests) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare values to append
    const values = [name, email, phone, days, guests];

    // Append data to Google Sheets
    const result = await appendDataToSheet(values);

    // Check if the data was appended successfully
    if (result) {
      return NextResponse.json({ message: 'Booking submitted successfully!' });
    } else {
      console.error('Failed to append data to Google Sheets'); // Log error
      return NextResponse.json(
        { message: 'Failed to submit booking' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in API route:', error); // Log error details
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
