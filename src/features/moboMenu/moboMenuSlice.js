import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};
const moboMenuSlice = createSlice({
  name: 'moboMenu',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = moboMenuSlice.actions;

export default moboMenuSlice.reducer;
