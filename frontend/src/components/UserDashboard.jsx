import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../services/api';
import { setUsers } from '../features/user/userSlice';

const UserDashboard = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);
    const filters = useSelector((state) => state.user.filters);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers(filters);
                dispatch(setUsers(response.data));
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchUsers();
    }, [dispatch, filters]);

    return (
        <div>Dashboard</div>
    );
};

export default UserDashboard;
