import { configureStore } from '@reduxjs/toolkit';
import monsterReducer from './features/monsters/monsterSlice';

export default configureStore({
  reducer: {
    monsters: monsterReducer
  },
});