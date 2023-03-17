import { styled } from '@mui/material/styles';
import BaseTableRow, { tableRowClasses } from '@mui/material/TableRow';

export const TableHeadRow = styled(BaseTableRow)(() => ({
  [`&.${tableRowClasses.root}`]: {
    backgroundColor: '#3A80BA',
    height: '48px',
  },
}));
