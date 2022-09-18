import { configureStore } from '@reduxjs/toolkit';
import todoItems from './todoItems';
import todoName from './todoName';
import todoColor from './todoColor'

export default configureStore({
  reducer: {
		todoItems,
		todoName,
    todoColor
  },
});