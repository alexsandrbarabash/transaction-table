import { FC, useId } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import BaseFormControl, { formControlClasses } from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

type Fields = { value: string; name: string };

type SearchProps = {
  placeholder?: string;
  fields?: Fields[];
  selectValue: string;
  onChangeSelectValue: (value: string) => void;
  inputValue: string;
  onChangeInputValue: (value: string) => void;
};

export const FormControl = styled(BaseFormControl)(() => ({
  [`&.${formControlClasses.root}`]: { border: 'none' },
}));

export const Search: FC<SearchProps> = ({
  placeholder,
  fields = [],
  selectValue,
  onChangeSelectValue,
  inputValue,
  onChangeInputValue,
}) => {
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeInputValue(event.target.value);
  };

  const handleChangeSelect = (event: SelectChangeEvent) => {
    onChangeSelectValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        borderRadius: '10px',
        border: '1px solid #F1F1F1',
        padding: '15px',
        maxWidth: '380px',
      }}
    >
      <Input
        disableUnderline={true}
        placeholder={placeholder}
        sx={{ borderRight: '1px solid #F1F1F1', marginRight: '7px' }}
        value={inputValue}
        onChange={handleChangeInput}
      />
      <FormControl variant="standard">
        <Select
          disableUnderline={true}
          onChange={handleChangeSelect}
          value={selectValue}
          sx={{ minWidth: 160, border: 'none', background: 'none!important' }}
        >
          {fields.map((item) => (
            <MenuItem value={item.value} key={useId()}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
