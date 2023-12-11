import { createSlice } from '@reduxjs/toolkit'

export const list = createSlice({
    name: 'list',
    initialState: {
        List: [],
        SavedList: []
    },
    reducers: {
        addList: (state, action) => {
            if (!state.List.some(data => data.imdbID == action.payload[0].imdbID)) {
                state.List = [...state.List, ...action.payload];
            }
            else {
                alert('Bu film siyahiya elave edilib')
            }
        },
        removeList: (state, action) => {
            state.List = state.List.filter(data => data.imdbID != action.payload)
        },
        createList: (state, action) => {
            if (state.List.length && action.payload) {
                state.SavedList = [...state.SavedList, { listName: action.payload, data: state.List }]
                state.List = []
            } else {
                alert('Siyahi adi duzgun daxil edilmeyib')
            }
        }
    }
})

export const { addList, removeList, createList } = list.actions

export default list.reducer

// import { createSlice } from '@reduxjs/toolkit';

// export const listSlice = createSlice({
//   name: 'list',
//   initialState: {
//     List: [],
//   },
//   reducers: {
//     addList: (state, action) => {
//         state.List = [...state.List, ...action.payload];
//       // Check if the item is already in the list
//     //   if (!state.List.some(item => item.imdbID === action.payload.imdbID)) {
//     //     state.List = [...state.List, action.payload];
//     //     console.log(state.List);
//     //   } else {
//     //     console.log("This item is already in the list.");
//     //   }
//     },
//     removeList: (state, action) => {
//       state.List = state.List.filter(item => item.imdbID !== action.payload);
//     },
//   },
// });

// export const { addList, removeList } = listSlice.actions;

// export default listSlice.reducer;
