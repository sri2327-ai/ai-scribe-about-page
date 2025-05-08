
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InteractiveDemo from './pages/InteractiveDemo';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Routes>
        {/* Only enable the InteractiveDemo page */}
        <Route path="/interactive-demo" element={<InteractiveDemo />} />
        
        {/* Redirect all other routes to the demo page */}
        <Route path="*" element={<Navigate replace to="/interactive-demo" />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
