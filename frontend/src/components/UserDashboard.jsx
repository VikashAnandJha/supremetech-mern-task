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
    const [filter, setFilter] = useState({ name: '', join_date: '', department: '', sortBy: '' });
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
        dispatch(setFilters({ ...filters, department: searchTerm }))

        //console.log(filter);
        // Filter users based on the search term
        const filtered = users.filter((user) => user.department.toLowerCase().includes(searchTerm));
        setFilteredUsers(filtered);
        if (searchTerm == "")
            setFilteredUsers(users);
    };
    const handleJoinDateFilterChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        dispatch(setFilters({ ...filters, join_date: searchTerm }))

        //console.log(filter);
        // Filter users based on the search term
        const filtered = users.filter((user) => user.join_date.toLowerCase().includes(searchTerm));
        setFilteredUsers(filtered);
        if (searchTerm == "")
            setFilteredUsers(users);
    };

    const handleSortChange = (event) => {


        const searchTerm = event.target.value.toLowerCase();
        dispatch(setFilters({ ...filters, sortBy: searchTerm }))



        if (searchTerm == "")
            setFilteredUsers(users);
    };


    return (
        <div>
            <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
                <h2 className="text-lg font-semibold">User Dashboard</h2>
                <div className="flex space-x-4">
                    <button className="hover:underline">Home</button>
                    <button onClick={handleLogout} className="hover:underline">
                        Logout
                    </button>
                </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-md">
                <p className="text-lg font-bold mb-2">Apply Filters:</p>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <label htmlFor="filter" className="mr-2">Department:</label>
                        <input
                            type="text"
                            id="filter"
                            className="border rounded-md p-2 focus:outline-none focus:border-blue-500"
                            value={filters.department}
                            onChange={handleDeptNameFilterChange}
                        />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="filterjd" className="mr-2">Join Date:</label>
                        <input
                            type="date"
                            id="filterjd"
                            className="border rounded-md p-2 focus:outline-none focus:border-blue-500"
                            value={filters.join_date}
                            onChange={handleJoinDateFilterChange}
                        />
                    </div>
                </div>
            </div>



            <div>
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={filters.sortBy} onChange={handleSortChange}>
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
