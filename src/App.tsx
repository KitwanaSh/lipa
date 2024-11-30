import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import Routes from './routes/Routes';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen">
          <Navigation />
          <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
