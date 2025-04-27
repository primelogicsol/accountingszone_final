import { createRoot } from 'react-dom/client'
import { StudioProvider, StudioLayout } from 'sanity'
import config from '../sanity.config'

const root = createRoot(document.getElementById('root')!)
root.render(
  <StudioProvider config={config}>
    <StudioLayout />
  </StudioProvider>
) 