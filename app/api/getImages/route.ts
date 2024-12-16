/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    const bucketName = 'photos';

    const { data: files, error } = await supabase.storage.from(bucketName).list('public');

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!files) {
      return NextResponse.json({ imageUrls: [] });
    }

    const imageUrls = files.map((file) => {
      return `${supabaseUrl}/storage/v1/object/public/${bucketName}/public/${file.name}`;
    });

    return NextResponse.json({ imageUrls });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
