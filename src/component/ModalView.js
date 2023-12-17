import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native';

const ModalView = ({onAddPressFunction, isVisible, onBackdropPress}) => {
  const [keyText, setKeyText] = useState('');

  const onPressAdd = () => {
    if (keyText.length) {
      onAddPressFunction(keyText);
    }
  };

  return (
    <Modal onBackdropPress={onBackdropPress} isVisible={isVisible}>
      <View style={{...styles.mainView, backgroundColor: 'white'}}>
        <TextInput
          placeholder="Enter Amount to add"
          style={styles.inputStyle}
          keyboardType="numeric"
          onChangeText={e => setKeyText(e)}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPressAdd}
          style={styles.btnView}>
          <Text style={styles.btnText}>Add Money</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  mainView: {
    height: 200,
    borderRadius: 10,
    borderColor: '#D9D9D9D9',
    justifyContent: 'space-between',

    padding: 20,
  },
  inputStyle: {
    height: 48,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  btnView: {
    backgroundColor: '#00A36C',
    height: 48,
    borderRadius: 6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
});
