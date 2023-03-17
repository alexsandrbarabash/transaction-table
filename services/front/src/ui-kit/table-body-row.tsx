import { styled } from '@mui/material/styles';
import BaseTableRow, { tableRowClasses } from '@mui/material/TableRow';

type TableBodyRowProps = {
  isSecond?: boolean;
};

export const TableBodyRow = styled(BaseTableRow)<TableBodyRowProps>(
  ({ isSecond = false }) => ({
    [`&.${tableRowClasses.root}`]: {
      backgroundColor: isSecond ? '#F1F1F1' : '#FBFBFB',
      height: '32px',
    },
  }),
);
