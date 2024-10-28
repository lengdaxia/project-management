import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface initialStateProps {
  isSidebarOpen: boolean;
  isDarkMode: boolean;
}

const initialState: initialStateProps = {
  isSidebarOpen: false,
  isDarkMode: false
}

export const globalSlice = createSlice({
  name:"global",
  initialState,
  reducers: {
    setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    }
  }
})

export const {setIsSidebarOpen, setIsDarkMode} = globalSlice.actions;
export default globalSlice.reducer;