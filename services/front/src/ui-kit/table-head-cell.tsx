import { styled } from '@mui/material/styles';
import BaseTableCell, { tableCellClasses } from '@mui/material/TableCell';

export const TableHeadCell = styled(BaseTableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#3A80BA',
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '20px',
    borderLeft: '1px solid #FFFFFF',
  },
  [`&.${tableCellClasses.head}:first-child`]: {
    borderRadius: '10px 0px 0px 0px',
    borderLeft: 'none',
  },
  [`&.${tableCellClasses.head}:last-child`]: {
    borderRadius: '0px 10px 0px 0px',
  }
}));
