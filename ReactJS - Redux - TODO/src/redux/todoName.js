import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: ""
}

export const todoNameSlice = createSlice({
  name: 'todoName',
  initialState,
  reducers: {
		setTodoName(state, action) {
			state.name = action.payload;
		}
	},
})



export const { setTodoName } = todoNameSlice.actions


export const selectTodoName = (state) => state.todoName.name



export default todoNameSlice.reducer

