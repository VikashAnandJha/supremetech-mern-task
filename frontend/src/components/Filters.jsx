// Filters.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../features/user/userSlice';

const Filters = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [sorting, setSorting] = useState('');
    const [department, setDepartment] = useState('');

    const applyFilters = () => {
        const filters = { date, sorting, department };
        dispatch(setFilters(filters));
    };

    return (
        <div>filters</div>
    );
};

export default Filters;