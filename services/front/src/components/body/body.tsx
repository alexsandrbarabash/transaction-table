import { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import './body.scss';
import { TableComponent } from '../table';
import { PaginationRounded } from '../pagination';
import { Search } from '../../ui-kit';
import { useTransactions } from '../../hook';

export const Body: FC = () => {
  const {
    count,
    updatePage,
    loading,
    transactions,
    searchKey,
    setSearchValue,
    searchValue,
    setSearchKey,
    page,
    search,
  } = useTransactions();
  const onPaginations = (_: React.ChangeEvent<unknown>, page: number) => {
    updatePage(page);
  };

  return (
    <div className="body-wrapper">
      <div className="search-wrapper">
        <Search
          placeholder="Search..."
          fields={[
            { value: 'blockNumber', name: 'Block number' },
            { value: 'transactionId', name: 'Transaction ID' },
            { value: 'senderAddress', name: 'Sender address' },
            { value: 'recipientAddress', name: "Recipient's address" },
            { value: 'blockConfirmations', name: 'Block confirmations' },
            { value: 'value', name: 'Value' },
            { value: 'transactionFee', name: 'Transaction Fee' },
          ]}
          selectValue={searchKey}
          onChangeSelectValue={setSearchKey}
          inputValue={searchValue}
          onChangeInputValue={setSearchValue}
        />
        <div className="search-button-wrapper">
          <IconButton
            onClick={search}
            aria-label="search"
            color="primary"
            size="large"
          >
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <TableComponent rows={transactions} />
      <div className="pagination-wrapper">
        <PaginationRounded
          count={Math.ceil(count / 5)}
          onChange={onPaginations}
          disabled={loading}
          page={page}
        />
      </div>
    </div>
  );
};
