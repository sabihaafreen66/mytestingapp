import React, { useState, useContext } from 'react';
import MedicineContext from '../contexts/MedicineContext';
import styles from './MedicineForm.module.css'; // Import module CSS file

const MedicineForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const { addMedicine } = useContext(MedicineContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicine({ name, description, price, quantity });
    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles['form-container']}>
      <div className={styles['form-group']}>
        <label className={styles['form-label']}>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={styles['form-input']} />
      </div>
      <div className={styles['form-group']}>
        <label className={styles['form-label']}>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className={styles['form-input']} />
      </div>
      <div className={styles['form-group']}>
        <label className={styles['form-label']}>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className={styles['form-input']} />
      </div>
      <div className={styles['form-group']}>
        <label className={styles['form-label']}>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className={styles['form-input']} />
      </div>
      <button type="submit" className={styles['form-submit']}>Add Medicine</button>
    </form>
  );
};

export default MedicineForm;
