import React from 'react';
//import PropTypes from 'prop-types';
import { Label, Input, FilterBlock } from './Filter.styled'

const Filter = ({ value, onChange}) => {
    return (
    <FilterBlock>
    <Label>
        Find contacts by name
        <Input type="text" name="filter" value={value} onChange={onChange} />
    </Label>
    </FilterBlock>)
}

export default Filter;

//Filter.propTypes = {
//    value: PropTypes.string.isRequired,
//    onChange: PropTypes.func.isRequired
//}