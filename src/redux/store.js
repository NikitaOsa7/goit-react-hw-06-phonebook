import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { onContactsSlice } from './contacts/slice';

const persistConfig = {
    key: 'contacts',
    storage,
};


export const onContactsReducer = persistReducer(
    persistConfig,
    onContactsSlice.reducer
)

export const store = configureStore({
    reducer: {
        contacts: onContactsReducer,
    },

    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },
});


export const persistor = persistStore(store);