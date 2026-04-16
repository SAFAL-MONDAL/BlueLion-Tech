import { useState } from 'react';
import LandingPage from './components/LandingPage';
import AdminPanel from './components/AdminPanel';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div>
      {showAdmin ? (
        <AdminPanel onBack={() => setShowAdmin(false)} />
      ) : (
        <LandingPage onLogoClick={() => setShowAdmin(true)} />
      )}
    </div>
  );
}

export default App;