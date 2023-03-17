import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userList from 'constants/users.json';

const initialState = {
  userList,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    followToggler(state, { payload }) {
      for (const item of state.userList) {
        if (item.user === payload.user) {
          item.following = payload.following;
          item.followers = payload.followers;
        }
      }
    },
  },
});

const persistConfig = {
  key: 'users',
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  usersSlice.reducer
);

export const { followToggler } = usersSlice.actions;
