import { createSlice } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "Side1",
  initialState,
  reducers: {
    setOpenSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setOpenSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;