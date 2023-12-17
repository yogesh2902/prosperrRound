import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const TransactList = ({item, index}) => {
  console.log(index, 'inddinddindd');
  return (
    <View style={styles.rowView}>
      <View style={styles.equalFlex}>
        {index === 0 ? <Text style={styles.headText}>Txn No.</Text> : null}
        <Text style={styles.resultText}>{item?.txnNo}</Text>
      </View>
      <View style={styles.equalFlex}>
        {index === 0 ? <Text style={styles.headText}>Amounnt</Text> : null}
        <Text style={styles.resultText}>{`Rs.${item?.amount}`}</Text>
      </View>
      <View style={styles.equalFlex}>
        {index === 0 ? <Text style={styles.headText}>Txn Id</Text> : null}
        <Text style={styles.resultText}>{item?.id}</Text>
      </View>
      <View style={styles.equalFlex}>
        {index === 0 ? <Text style={styles.headText}>Txn Date</Text> : null}
        <Text style={styles.resultText}>{item?.dates}</Text>
      </View>
    </View>
  );
};

export default TransactList;

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
  },

  resultText: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 8,
    textAlign: 'center',
    color: '#949494',
  },
  headText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#000033',
  },
  equalFlex: {
    flex: 1,
    alignItems: 'center',
  },
});
