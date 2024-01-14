import { Image, StyleSheet, TextInput, View } from 'react-native';
import {
  search_bar_color, white,
} from '../../utils/colorHexCodes';
import { filter_icon, search_icon } from '../../utils/ImageExporter';
import React, { FC, useRef } from 'react';

type props = {
  searchStr?: any
}

const SearchInput: FC<props> = ({ searchStr = () => { } }) => {

  console.log('Search Input Render');
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
          onSubmitEditing={() => searchStr(strTobeSearcher.current)}
        />
        <Image
          style={styles.searchIcon}
          resizeMode={'contain'}
          source={search_icon} />
      </View>
      <View style={styles.filterContainer}>
        <Image
          style={styles.filterIcon}
          source={filter_icon}
          resizeMode={'contain'}
        />
      </View>

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
    height: '90%',
  },
  filterContainer: { width: '15%', height: '80%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
});
