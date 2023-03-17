import { styled } from '@mui/material/styles';
import BaseTableCell, { tableCellClasses } from '@mui/material/TableCell';

type TableBodyCellType = {
  isLastRow?: boolean;
  isLink?: boolean;
};

export const TableBodyCell = styled(BaseTableCell)<TableBodyCellType>(
  ({ isLastRow = false, isLink = false }) => ({
    [`&.${tableCellClasses.body}`]: {
      color: isLink ? '#3A80BA' : '#1A1A1A',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
      textDecorationLine: isLink ? 'underline' : 'none',
      borderBottom: 'none',
    },
    [`&.${tableCellClasses.body}:first-child`]: {
      borderRadius: isLastRow ? '0px 0px 0px 10px' : '',
    },
    [`&.${tableCellClasses.body}:last-child`]: {
      borderRadius: isLastRow  ? '0px 0px 10px 0px' : '',
    },
  }),
);
