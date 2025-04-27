import { client } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const services = await client.fetch(`*[_type == "service"]{
      title,
      slug,
      description,
      "imageUrl": image.asset->url
    }`)
    
    return NextResponse.json(services)
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json({ error: 'Error fetching services' }, { status: 500 })
  }
} 