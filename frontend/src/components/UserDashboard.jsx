import React from 'react';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
    const user = useSelector((state) => state.user);

    return (
        <div>User Dashboard</div>
    );
};

export default UserDashboard;
