import { FC } from 'react';
import Stack from '@mui/material/Stack';

import { Pagination } from '../../ui-kit';

type Props = {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  disabled: boolean;
};

export const PaginationRounded: FC<Props> = (props) => {
  return (
    <Stack spacing={2}>
      <Pagination
        onChange={props.onChange}
        count={props.count}
        page={props.page}
        size="large"
        shape="rounded"
        disabled={props.disabled}
      />
    </Stack>
  );
};
