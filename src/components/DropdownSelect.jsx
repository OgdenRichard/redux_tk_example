import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const DropdownSelect = ({ data, datakey, label, reducer, keyAsVal }) => {
  const [currentValue, setCurrentValue] = useState('');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(reducer(event.target.value));
    setCurrentValue(event.target.value);
  };
  const labelDisplay = label.charAt(0).toUpperCase() + label.slice(1);
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id={`${label}-select-label`}>{labelDisplay}</InputLabel>
        <Select
          labelId={`${label}-select-label`}
          id="demo-simple-select"
          value={currentValue}
          label={labelDisplay}
          onChange={handleChange}
        >
          {data &&
            data.map((item) => (
              <MenuItem
                key={item[datakey]}
                value={keyAsVal ? item[datakey] : item.name}
              >
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
};
