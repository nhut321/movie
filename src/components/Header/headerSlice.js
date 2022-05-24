import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchItem: []
}

const headerSlice = createSlice({
	name: 'headerSlice',
	initialState,
	reducers: {
		addSearch: (state,action) => {
			state.searchItem = action.payload
		}
	},
	extraReducers: {}
})

export const { addSearch } = headerSlice.actions

export default headerSlice.reducer