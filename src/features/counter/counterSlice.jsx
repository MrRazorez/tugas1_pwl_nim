import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    oWin: Number(localStorage.getItem('oWin')),
    xWin: Number(localStorage.getItem('xWin'))
  },
  reducers: {
    setOwin: (state) => {
        state.oWin += 0.5;
    },
    saveOwin: (state) => {
        try {
            localStorage.setItem('xWin', state.xWin);
        } catch (e) {
            // IGNORED
        }
    },
    setXwin: (state) => {
        state.xWin += 0.5;
    },
    saveXwin: (state) => {
        try {
            localStorage.setItem('xWin', state.xWin);
        } catch (e) {
            // IGNORED
        }
    },
  },
})

export const { setOwin, saveOwin, setXwin, saveXwin } = counterSlice.actions

export default counterSlice.reducer