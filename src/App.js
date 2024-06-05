import React from 'react';
import { MedicineProvider } from './contexts/MedicineContext';
import MedicineList from './components/MedicineList';
import MedicineForm from './components/MedicineForm';
import Cart from './components/Cart';

const App = () => {
  return (
    <MedicineProvider>
      <div>
        <h1>Medicine Inventory Management</h1>
        <MedicineForm />
        <MedicineList />
        <Cart />
      </div>
    </MedicineProvider>
  );
};


export default App;