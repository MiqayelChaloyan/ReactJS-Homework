import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	color: ""
}


export const todoColorSlice = createSlice({
	name: 'todoColor',
	initialState,
	reducers: {
		  setTodoColor(state, action){
			  state.color = action.payload
		  }
	  },
  })



export const { setTodoColor } = todoColorSlice.actions



export const selectTodoColor = (state) => state.todoColor.color

export default todoColorSlice.reducer

