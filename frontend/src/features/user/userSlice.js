import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { users: [], filters: {} },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
    },
});

export const { setUsers, setFilters } = userSlice.actions;
export default userSlice.reducer;
