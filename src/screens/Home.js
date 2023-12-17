import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {userData} from '../constants/constants';
import moment from 'moment';
import TransactList from '../component/TransactList';
import ModalView from '../component/ModalView';

const Home = () => {
  const [opened, setOpened] = useState(false);
  const [currInd, setCurrInd] = useState(null);
  const [dataArr, setDataArr] = useState(userData);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalClickInd, setModalClickInd] = useState(null);

  const DetailView = ({heading = '', result = ''}) => {
    return (
      <View style={{marginTop: 20}}>
        <Text style={styles.headText}>{heading}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
    );
  };

  const onAddMoney = index => {
    setModalClickInd(index);
    setModalVisible(true);
  };

  const onAddPressFunction = number => {
    Keyboard.dismiss();
    let chngeNumber = Number(number);
    let arr = [...dataArr];

    arr[modalClickInd].walletBalance =
      arr[modalClickInd].walletBalance + chngeNumber;

    setDataArr(arr);
    setModalVisible(false);
  };

  const onPayNow = () => {};

  const _renderItemTransaction = ({item, index}) => {
    return <TransactList item={item} index={index} />;
  };

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          ...styles.cardView,
          paddingBottom: opened && currInd === index ? 20 : 0,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: 50,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
          onPress={() => {
            setCurrInd(index);
            if (currInd !== index) {
              setOpened(true);
            } else {
              setOpened(!opened);
            }
          }}>
          <Text style={styles.nameTxt}>{item?.name}</Text>
          <Image
            source={
              opened && currInd === index
                ? require('../assets/up.png')
                : require('../assets/down.png')
            }
            style={{height: 18, width: 18}}
          />
        </TouchableOpacity>
        <View>
          {opened && index === currInd ? (
            <View style={{marginHorizontal: 20}}>
              <DetailView
                heading="Wallet Available Balance : "
                result={`Rs.${item?.walletBalance}`}
              />

              <View style={{marginTop: 20}}>
                <Text style={styles.headText}>{'Last Transactions : '}</Text>
                <View style={{marginTop: 10}}>
                  <FlatList
                    data={item?.lastTransactions}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={_renderItemTransaction}
                  />
                </View>
              </View>

              <DetailView
                heading="Date : "
                result={moment(new Date()).format('YYYY-MM-DD')}
              />

              <DetailView
                heading="Last Amount Added : "
                result={`Rs.${item.lastAmountAdd}`}
              />

              <View style={styles.rowView}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={onPayNow}
                  style={styles.buttonView}>
                  <Text style={{...styles.btnText, color: 'white'}}>
                    Pay Now
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onAddMoney(index)}
                  style={{...styles.buttonView, backgroundColor: '#FFCCCB'}}>
                  <Text style={styles.btnText}>Add Money</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar />
      <View style={styles.headView} />

      <View style={{flex: 1, marginTop: 40}}>
        <FlatList
          data={dataArr}
          keyExtractor={(_, index) => index.toString()}
          renderItem={_renderItem}
        />
      </View>

      <ModalView
        isVisible={modalVisible}
        onAddPressFunction={onAddPressFunction}
        onBackdropPress={() => setModalVisible(false)}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headView: {
    height: 50,
    backgroundColor: '#000000',
  },
  cardView: {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 6,
    justifyContent: 'center',
  },
  nameTxt: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  headText: {
    fontSize: 16,
    fontWeight: '700',
  },
  resultText: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 5,
    color: '#818589',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonView: {
    height: 40,
    borderRadius: 5,
    backgroundColor: '#00A36C',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '700',
  },
});
