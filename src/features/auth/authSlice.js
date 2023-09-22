import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
            state.token = null
        },
    },
})

// Action creators are generated for each case reducer function
export const { setToken, setUser, logout } = authSlice.actions

export default authSlice.reducer

export const selectUser = state => state.auth.user
export const selectToken = state => state.auth.token
