import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const res = await fetch('https://rgehybvqqsqgkhlmksta.functions.supabase.co/db-setup', {
      method: 'POST',
    });

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json({ message: data.message });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}