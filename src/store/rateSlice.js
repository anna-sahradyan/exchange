import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_KEY} from "../data";

export const fetchRate = createAsyncThunk('rate/fetchRate', async function (_, {rejectWithValue}) {

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/UAH`);
        if (!response.ok) {
            throw new Error('Server Error!');
        }

        const data = await response.json();
        console.log(data)
        return data.conversion_rates;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
const setError  = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}
const rateSlice = createSlice({
    name: 'rate',
    initialState: {
        rate: {},
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchRate.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchRate.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.rate = action.payload;

        },
        [fetchRate.rejected]: setError,
    }
    });
export const selectRate = state => state.rate.rate;
export default rateSlice.reducer;