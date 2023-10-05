import React, { useEffect, useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../services/api';
import { setUsers } from '../features/user/userSlice';

import { Link, useNavigate } from "react-router-dom";

const UserDashboard = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);
    const filters = useSelector((state) => state.user.filters);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let token = localStorage.getItem("token")
                if (token == null || token == undefined) {
                    navigate("/")
                    return;
                }
                console.log("tokenfound", token)
                const response = await getUsers(filters, token);
                console.log(response.data.users)
                dispatch(setUsers(response.data.users));
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchUsers();
    }, [dispatch, filters]);
    const handleLogout = () => {
        // Clear the token from localStorage
        localStorage.removeItem('token');

        // Redirect the user to the home page
        window.location.href = '/';
    };
    const handleFilterChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setFilter(searchTerm);

        // Filter users based on the search term
        const filtered = users.filter((user) => user.name.toLowerCase().includes(searchTerm));
        setFilteredUsers(filtered);
    };

    const handleSortChange = (event) => {
        const selectedSort = event.target.value;
        setSortBy(selectedSort);

        // Sort the filtered users based on the selected criteria
        const sorted = [...filteredUsers].sort((a, b) => {
            if (selectedSort === 'name') {
                return a.name.localeCompare(b.name);
            } else if (selectedSort === 'join_date') {
                return new Date(a.join_date) - new Date(b.join_date);
            }
            return 0;
        });

        setFilteredUsers(sorted);
    };


    return (
        <div>
            <h2>User Dashboard</h2>
            <button onClick={handleLogout}>Logout</button>
            <div>
                <label htmlFor="filter">Filter by Name:</label>
                <input type="text" id="filter" value={filter} onChange={handleFilterChange} />
            </div>
            <div>
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sortBy} onChange={handleSortChange}>
                    <option value="">Select</option>
                    <option value="name">Name</option>
                    <option value="join_date">Join Date</option>
                </select>
            </div>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.join_date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDashboard;
