import {configureStore} from '@reduxjs/toolkit'
import todo from './reducer'

 const store=configureStore({reducer:todo});
console.log(store);
export default store
