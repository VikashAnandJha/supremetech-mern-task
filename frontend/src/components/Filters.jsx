import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyFilters } from '../actions/userActions';

const Filters = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [sorting, setSorting] = useState('');
    const [department, setDepartment] = useState('');

    const handleApplyFilters = () => {
        const filters = { date, sorting, department };
        dispatch(applyFilters(filters));
    };

    return (
        <div>Filter</div>
    );
};

export default Filters;
