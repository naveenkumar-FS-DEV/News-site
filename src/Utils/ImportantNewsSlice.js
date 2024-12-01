import { createSlice } from "@reduxjs/toolkit";

let ImportantNewsSlice = createSlice({
    name: "important",
    initialState:{
        card:[]
    },
    reducers:{
        addImportant:(state, action)=>{
           state.card.push(action.payload)
        },
        removeImportant:(state)=>{
            state.card.pop()
        },
    },
})

export const {addImportant, removeImportant} = ImportantNewsSlice.actions
export default ImportantNewsSlice.reducer
