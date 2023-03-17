import { useState, useEffect, useCallback } from 'react';

import { Api, Transaction, SearchParamsType } from '../api';

export const useTransactions = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [count, setCount] = useState<number>(0);
  const [searchKey, setSearchKey] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchParams, setSearchParams] = useState<
    Omit<SearchParamsType, 'limit' | 'skip'>
  >({});
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setLoading(true);
    Api.getTransaction({ limit: 5, skip: 0 }).then((response) => {
      setTransactions(response.transactions);
      setCount(response.count);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (searchKey && searchValue) {
      setSearchParams({ [searchKey]: searchValue });
    } else {
      setSearchParams({});
    }
  }, [searchKey, searchValue]);

  const updatePage = async (page: number) => {
    setPage(page);
    setLoading(true);
    const response = await Api.getTransaction({
      limit: 5,
      skip: (page - 1) * 5,
      ...searchParams,
    });

    setTransactions(response.transactions);
    setCount(response.count);
    setLoading(false);
  };

  const search = () => {
    updatePage(1);
  };

  return {
    loading,
    updatePage,
    transactions,
    count,
    setSearchValue,
    setSearchKey,
    searchKey,
    searchValue,
    page,
    search,
  };
};
