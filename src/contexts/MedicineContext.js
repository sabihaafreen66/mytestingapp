import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const MedicineContext = createContext();

const initialState = {
  medicines: [],
  cart: []
};

const medicineReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MEDICINES':
      return { ...state, medicines: action.payload };
    case 'ADD_MEDICINE':
      return { ...state, medicines: [...state.medicines, action.payload] };
    case 'REMOVE_MEDICINE':
      return { ...state, medicines: state.medicines.filter(medicine => medicine._id !== action.payload) };
    case 'UPDATE_MEDICINE':
      return {
        ...state,
        medicines: state.medicines.map(medicine =>
          medicine._id === action.payload._id ? action.payload : medicine
        )
      };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(medicine => medicine._id !== action.payload) };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'CLEAR_MEDICINE_LIST':
      return { ...state, medicines: [] }; // Clear the medicine list
    default:
      return state;
  }
};

export const MedicineProvider = ({ children }) => {
  const [state, dispatch] = useReducer(medicineReducer, initialState);

  useEffect(() => {
    axios.get('https://crudcrud.com/api/817359e6ba9447f2b5778182f87adc0c/medicines')
      .then(response => {
        dispatch({ type: 'SET_MEDICINES', payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching medicines', error);
      });
  }, []);

  const addMedicine = (medicine) => {
    axios.post('https://crudcrud.com/api/817359e6ba9447f2b5778182f87adc0c/medicines', medicine)
      .then(response => {
        dispatch({ type: 'ADD_MEDICINE', payload: response.data });
      })
      .catch(error => {
        console.error('Error adding medicine', error);
      });
  };

  const removeMedicine = (id) => {
    axios.delete(`https://crudcrud.com/api/817359e6ba9447f2b5778182f87adc0c/medicines/${id}`)
      .then(() => {
        dispatch({ type: 'REMOVE_MEDICINE', payload: id });
      })
      .catch(error => {
        console.error('Error removing medicine', error);
      });
  };

  const updateMedicine = (medicine) => {
    axios.put(`https://crudcrud.com/api/817359e6ba9447f2b5778182f87adc0c/medicines/${medicine._id}`, medicine)
      .then(response => {
        dispatch({ type: 'UPDATE_MEDICINE', payload: response.data });
      })
      .catch(error => {
        console.error('Error updating medicine', error);
      });
  };

  const addToCart = (medicine) => {
    dispatch({ type: 'ADD_TO_CART', payload: medicine });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const clearMedicineList = () => {
    dispatch({ type: 'CLEAR_MEDICINE_LIST' });
  };

  return (
    <MedicineContext.Provider value={{ 
      medicines: state.medicines, 
      cart: state.cart, 
      addMedicine, 
      removeMedicine, 
      updateMedicine, 
      addToCart, 
      removeFromCart, 
      clearCart,
      clearMedicineList // Expose clearMedicineList
    }}>
      {children}
    </MedicineContext.Provider>
  );
};

export default MedicineContext;
