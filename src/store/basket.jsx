import { createSlice } from '@reduxjs/toolkit'

export const basket = createSlice({
    name: 'basket',
    initialState: {
        basketList: null
    },
    reducers: {
        addBasket: (state, action) => {
            state.basketList = action.payload
        },
        removeBasket: (state, action) => {
            state.basketList = state.filter(data => data.imdbID != action.payload)
        }
    }
})

export const { addBasket, removeBasket } = basket.actions

export default basket.reducer