import { createSlice } from "@reduxjs/toolkit";

interface AppStateProps {
  isInit: boolean;
}

const initialState: AppStateProps = {
  isInit: false
}

export const AppSlice = createSlice({
    name:'AppSlice',
    initialState,
    reducers: {
      
    }
})

export const {} = AppSlice.actions;
export default AppSlice.reducer