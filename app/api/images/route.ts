// app/api/images/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public/images/projects');
    const files = fs.readdirSync(imagesDirectory);

    // Filter out image files (png, jpg, svg)
    const images = files
      .filter(file => /\.(png|jpe?g|svg)$/.test(file))
      .map(file => `/images/projects/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error reading images directory:", error);
    return NextResponse.error();
  }
}