import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '501u7ijk',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
}) 