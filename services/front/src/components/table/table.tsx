import { FC } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import moment from 'moment';

import {
  TableHeadRow,
  TableHeadCell,
  TableBodyRow,
  TableBodyCell,
} from '../../ui-kit';
import { Transaction } from '../../api';

type TableProps = {
  rows: Transaction[];
};
const trimString = (str: string, maxLength: number) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + '...';
  } else {
    return str;
  }
};

const toDateFormat = (inputDate: string) => {
  const momentDate = moment(inputDate);

  const outputDate = momentDate.format('MMM-DD-YYYY');
  return outputDate;
};

export const TableComponent: FC<TableProps> = ({ rows }) => {
  return (
    <Table>
      <TableHead>
        <TableHeadRow>
          <TableHeadCell width="93px">Block number</TableHeadCell>
          <TableHeadCell width="140px">Transaction ID</TableHeadCell>
          <TableHeadCell width="140px">Sender address</TableHeadCell>
          <TableHeadCell>Recipient's address</TableHeadCell>
          <TableHeadCell>Block confirmations</TableHeadCell>
          <TableHeadCell>Date</TableHeadCell>
          <TableHeadCell width="242px">Value</TableHeadCell>
          <TableHeadCell>Transaction Fee</TableHeadCell>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index, arr) => (
          <TableBodyRow isSecond={Boolean(index % 2)}>
            <TableBodyCell isLastRow={index === arr.length - 1}>
              {row.blockNumber}
            </TableBodyCell>
            <TableBodyCell>{trimString(row.transactionId, 12)}</TableBodyCell>
            <TableBodyCell isLink={true}>
              {trimString(row.senderAddress, 12)}
            </TableBodyCell>
            <TableBodyCell>
              {trimString(row.recipientAddress, 12)}
            </TableBodyCell>
            <TableBodyCell>{row.blockConfirmations}</TableBodyCell>
            <TableBodyCell>{toDateFormat(row.date)}</TableBodyCell>
            <TableBodyCell>{row.value}</TableBodyCell>
            <TableBodyCell isLastRow={index === arr.length - 1}>
              {row.transactionFee}
            </TableBodyCell>
          </TableBodyRow>
        ))}
      </TableBody>
    </Table>
  );
};
