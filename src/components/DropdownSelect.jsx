import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

export const DropdownSelect = ({ data, datakey, label }) => {
  const [currentValue, setCurrentValue] = useState('');
  const handleChange = (event) => {
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
              <MenuItem key={item[datakey]} value={item[datakey]}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
};
