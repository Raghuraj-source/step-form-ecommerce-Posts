import  { useState } from 'react';
import StepForm from './components/stepForm/StepForm';
import Ecommerce from './components/ecommerce/Ecommerce';
import JsonPlaceholderData from './components/jsonPlaceholder/JsonPlaceholderData';

const App = () => {
  const [currentPage, setCurrentPage] = useState('form');

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <nav className="flex justify-center space-x-4 mb-8">
        <button
          className={`p-2 ${currentPage === 'form' ? 'bg-blue-500 text-white' : 'bg-white'}`}
          onClick={() => setCurrentPage('form')}
        >
          Step Form
        </button>
        <button
          className={`p-2 ${currentPage === 'ecommerce' ? 'bg-blue-500 text-white' : 'bg-white'}`}
          onClick={() => setCurrentPage('ecommerce')}
        >
          eCommerce
        </button>
        <button
          className={`p-2 ${currentPage === 'api' ? 'bg-blue-500 text-white' : 'bg-white'}`}
          onClick={() => setCurrentPage('api')}
        >
          JSON Placeholder
        </button>
      </nav>

      <div>
        {currentPage === 'form' && <StepForm />}
        {currentPage === 'ecommerce' && <Ecommerce />}
        {currentPage === 'api' && <JsonPlaceholderData />}
      </div>
    </div>
  );
};

export default App;
