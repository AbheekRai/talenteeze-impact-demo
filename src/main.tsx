
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { setupMockApiHandlers } from './lib/mockHandlers'

// Initialize mock API handlers
setupMockApiHandlers();

createRoot(document.getElementById("root")!).render(<App />);
