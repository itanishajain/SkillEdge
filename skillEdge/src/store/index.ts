import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import chatReducer from './chatSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['chats']
};

const persistedReducer = persistReducer(persistConfig, chatReducer);

export const store = configureStore({
  reducer: {
    chat: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;