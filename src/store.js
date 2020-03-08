import { configureStore } from '@reduxjs/toolkit';
import monsterReducer from './features/monsters/monsterSlice';
import screenVisibilityReducer from './features/screenVisibility/screenVisibilitySlice'

export default configureStore({
  reducer: {
    monsters: monsterReducer,
    screenVisibility: screenVisibilityReducer
  },
});