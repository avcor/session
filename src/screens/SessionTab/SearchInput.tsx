import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import {
  search_bar_color, white,
} from '../../utils/colorHexCodes';
import { filter_icon, filter_selected, search_icon } from '../../utils/ImageExporter';
import React, { FC, useContext, useRef, useState } from 'react';
import Modal from 'react-native-modal/dist/modal';
import ChipLayout from '../../components/ChipLoyout';
import { FilterContext } from '../../context/filterConetxt';

type props = {
}

const SearchInput: FC<props> = ({ }) => {

  console.log('Search Input Render');

  const [modalVisible, setModalVisible] = useState(false);
  const { filterCategpry, setFilterStr } = useContext(FilterContext);
  const strTobeSearcher = useRef('');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'#FFFFFF66'}
          onChangeText={(t) => { strTobeSearcher.current = t; }}
          underlineColorAndroid="transparent"
          onSubmitEditing={() => setFilterStr(strTobeSearcher.current)}
        />
        <Image
          style={styles.searchIcon}
          resizeMode={'contain'}
          source={search_icon} />
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filter_touch}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Image
            style={styles.filterIcon}
            source={filterCategpry === '' ? filter_icon : filter_selected}
            resizeMode={'cover'}
          />
        </TouchableOpacity>
      </View>
      <Modal isVisible={modalVisible} onBackdropPress={() => { setModalVisible(false); }}>
        <ChipLayout closeFunc={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
};


export default React.memo(SearchInput);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    height: '90%',
    width: '80%',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: search_bar_color,
  },
  searchIcon: {
    flex: 0.2,
    height: '50%',
  },
  input: {
    borderRadius: 10,
    flex: 1,
    paddingLeft: 10,
    color: white,
    fontSize: 15,
  },
  filterIcon: {
    height: '100%',
    width: '100%',

  },
  filterContainer: {
    width: '15%', height: '80%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
  },
  filter_touch: {
    height: '100%',
    aspectRatio: 1,
    alignItems: 'center',
  },
});
