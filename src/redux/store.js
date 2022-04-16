import { configureStore } from '@reduxjs/toolkit'
import cart from './cartSlice';
import courses from "./coursesSlice";

export const store = configureStore({
  reducer: {
    courses: courses,
    cart: cart
  }
})