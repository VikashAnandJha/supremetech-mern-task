import React, { useEffect, useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../services/api';
import { setFilters, setUsers } from '../features/user/userSlice';

import { Link, useNavigate } from "react-router-dom";

const UserDashboard = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);
    const filters = useSelector((state) => state.user.filters);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [filter, setFilter] = useState({ name: '', join_date: '', department: '' });
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let token = localStorage.getItem("token")
                if (token == null || token == undefined) {
                    navigate("/")
                    return;
                }
                console.log("filter", filters)
                const response = await getUsers(filters, token);
                console.log(response.data.users)
                dispatch(setUsers(response.data.users));
                //  setFilteredUsers(response.data.users)

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
    const handleDeptNameFilterChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        // setFilter({ ...filter, department: searchTerm });
        dispatch(setFilters({ ...filter, department: searchTerm }))

        //console.log(filter);
        // Filter users based on the search term
        const filtered = users.filter((user) => user.department.toLowerCase().includes(searchTerm));
        setFilteredUsers(filtered);
        if (searchTerm == "")
            setFilteredUsers(users);
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
                <label htmlFor="filter"> DepartMent:</label>
                <input type="text" id="filter" value={filters.department} onChange={handleDeptNameFilterChange} />
            </div>

            <div>
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sortBy} onChange={handleSortChange}>
                    <option value="">Select</option>
                    <option value="name">Name</option>
                    <option value="join_date">Join Date</option>
                </select>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Department
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Join Date
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users?.map((user) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{user.department}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{user.join_date}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default UserDashboard;
