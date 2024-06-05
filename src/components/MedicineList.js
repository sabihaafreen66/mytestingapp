import React, { useContext } from 'react';
import MedicineContext from '../contexts/MedicineContext';
import MedicineItem from './MedicineItem';
import './MedicineList.module.css'

const MedicineList = () => {
  const { medicines } = useContext(MedicineContext);

  return (
    <div>
      <h2>Medicine List</h2>
      <ul>
        {medicines.map(medicine => (
          <MedicineItem key={medicine._id} medicine={medicine} />
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
