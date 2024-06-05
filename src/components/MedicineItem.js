import React, { useContext } from 'react';
import MedicineContext from '../contexts/MedicineContext';
import styles from './MedicineItem.module.css'; // Import module CSS file

const MedicineItem = ({ medicine }) => {
  const { removeMedicine, addToCart } = useContext(MedicineContext);

  const handleRemove = () => {
    removeMedicine(medicine._id);
  };


  const handleAddToCart = () => {
    addToCart(medicine);
  };

  return (
    <div className={styles['item-container']}>
      <h3 className={styles['item-name']}>{medicine.name}</h3>
      <p className={styles['item-description']}>{medicine.description}</p>
      <p className={styles['item-price']}>Price: ${medicine.price}</p>
      <p>Quantity: {medicine.quantity}</p>
     
      <button onClick={handleRemove} className={styles['item-button']}>Remove</button>
      <button onClick={handleAddToCart} className={styles['item-button']}>Add to Cart</button>
    </div>
  );
};

export default MedicineItem;
