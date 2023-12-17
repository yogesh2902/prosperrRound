import {Dimensions} from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const userData = [
  {
    name: 'Rohan',
    id: 1,
    walletBalance: 100,
    lastTransactions: [
      {txnNo: 1, amount: 43, id: 'kjhsdhgif', dates: '10/12/2022'},
      {txnNo: 2, amount: 38, id: 'sdfdsfd23', dates: '07/12/2022'},
    ],
    date: '17-12-2023',
    lastAmountAdd: 50,
  },
  {
    name: 'Suresh',
    id: 2,
    walletBalance: 90,
    lastTransactions: [
      {txnNo: 1, amount: 45, id: '34534sdfs', dates: '10/11/2022'},
      {txnNo: 2, amount: 23, id: 'fsdfdfs543', dates: '04/08/2022'},
    ],
    date: '17-12-2023',
    lastAmountAdd: 34,
  },
  {
    name: 'Ramesh',
    id: 3,
    walletBalance: 39,
    lastTransactions: [
      {txnNo: 1, amount: 65, id: '34534sdfsdf', dates: '27/09/2023'},
      {txnNo: 2, amount: 88, id: 'sfsdf345346', dates: '04/03/2022'},
    ],
    date: '17-12-2023',
    lastAmountAdd: 23,
  },
  {
    name: 'Harsh',
    id: 4,
    walletBalance: 68,
    lastTransactions: [
      {txnNo: 1, amount: 34, id: 'ssdf34563', dates: '09/05/2022'},
      {txnNo: 2, amount: 99, id: 'sfsdfsd[s', dates: '11/03/2022'},
    ],
    date: '17-12-2023',
    lastAmountAdd: 56,
  },
];
