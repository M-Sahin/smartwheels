import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { projectType } from './sanity/schemaTypes/project'

export default defineConfig({
  name: 'default',
  title: 'SmartWheels',
  projectId: 'ckmy7d6l',
  dataset: 'production',
  apiVersion: '2024-11-01',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [projectType],
  },
})