import { styled } from '@mui/material/styles';

import BasePagination, { paginationClasses } from '@mui/material/Pagination';

export const Pagination = styled(BasePagination)(() => ({
  [`&.${paginationClasses.root} button`]: {
    border: '2px solid #F1F1F1',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
    width: '48px',
    height: '48px',
  },
  [`&.${paginationClasses.root} .MuiPaginationItem-previousNext`]: {
    border: 'none',
  },
  ['& .Mui-selected']: {
    background: '#3A80BA!important',
    color: '#FFFFFF',
  },
}));
