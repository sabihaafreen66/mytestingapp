// // import React, { useContext } from 'react';
// // import MedicineContext from '../contexts/MedicineContext';
// // import styles from './Cart.module.css'; // Import module CSS file

// // const Cart = () => {
// //   const { cart, removeFromCart, clearCart, removeMedicine } = useContext(MedicineContext);

// //   const handleGenerateBill = () => {
// //     alert(`Total Bill: $${cart.reduce((total, medicine) => total + medicine.price * medicine.quantity, 0)}`);
// //     clearCart(); // Clear the cart
// //     cart.forEach(medicine => {
// //       removeMedicine(medicine._id); // Remove each medicine from the medicine list
// //     });
// //   };

// //   return (
// //     <div className={styles['cart-container']}>
// //       <h2 className={styles['cart-title']}>Cart</h2>
// //       <ul className={styles['cart-list']}>
// //         {cart.map(medicine => (
// //           <li key={medicine._id} className={styles['cart-item']}>
// //             {medicine.name} - {medicine.quantity} - ${medicine.price * medicine.quantity}
// //             <button onClick={() => removeFromCart(medicine._id)} className={styles['cart-button']}>Remove</button>
// //           </li>
// //         ))}
// //       </ul>
// //       {cart.length > 0 && (
// //         <button onClick={handleGenerateBill} className={styles['generate-bill']}>Generate Bill</button>
// //       )}
// //     </div>
// //   );
// // };

// // export default Cart;
// import React, { useContext } from 'react';
// import MedicineContext from '../contexts/MedicineContext';
// import axios from 'axios';
// import styles from './Cart.module.css';

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useContext(MedicineContext);

//   const handleGenerateBill = async () => {
//     // Calculate total bill
//     const totalBill = cart.reduce((total, medicine) => total + medicine.price * medicine.quantity, 0);
//     alert(`Total Bill: $${totalBill}`);

//     try {
//       // Add the generated bill to another CRUD API endpoint
//       await axios.post('https://crudcrud.com/api/817359e6ba9447f2b5778182f87adc0c/bill', { total: totalBill, items: cart });

//       // Clear the cart
//       clearCart();
//     } catch (error) {
//       console.error('Error generating bill:', error);
//     }
//   };

//   return (
//     <div className={styles['cart-container']}>
//       <h2 className={styles['cart-title']}>Cart</h2>
//       <ul className={styles['cart-list']}>
//         {cart.map(medicine => (
//           <li key={medicine._id} className={styles['cart-item']}>
//             {medicine.name} - {medicine.quantity} - ${medicine.price * medicine.quantity}
//             <button onClick={() => removeFromCart(medicine._id)} className={styles['cart-button']}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       {cart.length > 0 && (
//         <button onClick={handleGenerateBill} className={styles['generate-bill']}>Generate Bill</button>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useContext } from 'react';
import MedicineContext from '../contexts/MedicineContext';
import axios from 'axios';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart, clearMedicineList } = useContext(MedicineContext);

  const handleGenerateBill = async () => {
    // Calculate total bill
    const totalBill = cart.reduce((total, medicine) => total + medicine.price * medicine.quantity, 0);
    alert(`Total Bill: $${totalBill}`);

    try {
      // Add the generated bill to another CRUD API endpoint
      await axios.post('https://crudcrud.com/api/817359e6ba9447f2b5778182f87adc0c/bill', { total: totalBill, items: cart });

      // Clear the cart
      clearCart();

      // Clear the list of medicines
      clearMedicineList();
    } catch (error) {
      console.error('Error generating bill:', error);
    }
  };

  return (
    <div className={styles['cart-container']}>
      <h2 className={styles['cart-title']}>Cart</h2>
      <ul className={styles['cart-list']}>
        {cart.map(medicine => (
          <li key={medicine._id} className={styles['cart-item']}>
            {medicine.name} - {medicine.quantity} - ${medicine.price * medicine.quantity}
            <button onClick={() => removeFromCart(medicine._id)} className={styles['cart-button']}>Remove</button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <button onClick={handleGenerateBill} className={styles['generate-bill']}>Generate Bill</button>
      )}
    </div>
  );
};

export default Cart;
