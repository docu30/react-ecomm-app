import Axios from 'axios';
 import {
   PRODUCT_LIST_FAIL,
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS,
 } from '../constants/productConstants';

  export const listProducts = () => async (dispatch) => {
   dispatch({
     type: PRODUCT_LIST_REQUEST,
   });
   try {
     const { data } = await Axios.get('/api/products'); // ajax request
     dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data }); // payload va contine datele
   } catch (error) {
     dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
   }
 };