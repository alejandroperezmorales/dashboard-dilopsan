
import React from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { useSalesData } from './hooks/useSalesData';
import { Spinner } from './components/Spinner';

const App: React.FC = () => {
  const { data, isLoading, error } = useSalesData();

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <Spinner />
          <p className="mt-4 text-lg text-gray-400">Generating Sales Data with Gemini...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center h-screen text-center">
          <div className="bg-red-900/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg">
            <h2 className="font-bold text-xl">Error</h2>
            <p className="mt-2">{error}</p>
            <p className="mt-1 text-sm">Please check your Gemini API key and try again.</p>
          </div>
        </div>
      );
    }

    if (data) {
      return <Dashboard data={data} />;
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
