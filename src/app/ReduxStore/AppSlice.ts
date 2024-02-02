import { createSlice } from "@reduxjs/toolkit";

interface AppStateProps {
  isInit: boolean;
  startRouteChange: boolean
}

const initialState: AppStateProps = {
  isInit: false,
  startRouteChange: false
}

export const AppSlice = createSlice({
    name:'AppSlice',
    initialState,
    reducers: {
      updateStartRouteChange:(state, action) => {
        state.startRouteChange = action.payload;
      }
    }
})

export const {updateStartRouteChange} = AppSlice.actions;
export default AppSlice.reducer