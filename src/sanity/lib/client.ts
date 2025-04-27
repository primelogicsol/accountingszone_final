import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '501u7ijk',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-04-07',
  useCdn: process.env.NODE_ENV === 'production',
})