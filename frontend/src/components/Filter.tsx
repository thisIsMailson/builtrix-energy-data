import React from 'react';
import Select from 'react-select';

const Filter = ({ options, onSelect }: any) => {
    return (
        <div>
            <h3>Filter</h3>
            <Select options={options} onChange={onSelect} />
        </div>
    );
};

export default Filter;
