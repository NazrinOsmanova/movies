import { configureStore } from "@reduxjs/toolkit"
import BasketReducer from './basket'
import ListReducer from './list'

export default configureStore({
    reducer: {
        basket: BasketReducer,
        list: ListReducer
    }
})