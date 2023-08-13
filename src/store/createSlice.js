import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:''
}

export const valueSlice = createSlice({
    name: 'ChangeValue',
    initialState,
    reducers: {
       valueChanger : (state, actions) => {
        console.log(state)

       }
}
})

export const {valueChanger} = valueSlice.actions


export default valueSlice.reducer