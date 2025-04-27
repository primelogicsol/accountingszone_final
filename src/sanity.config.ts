import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { structure } from './sanity/desk/structure'

export default defineConfig({
  name: 'accounting-zone',
  title: 'Accounting Zone CMS',
  projectId: '501u7ijk',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    deskTool({
      structure
    }), 
    visionTool()
  ],
  schema: {
    types: schemaTypes,
  },
}) 