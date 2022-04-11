import React from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width

function BorderlessTable(props) {
  const data = props.data;

  return (
    <View style={{ marginTop: 20, flex: 1, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.tableHeading}>
          <Text style={styles.tableHeadingText}>Column1</Text>
        </View>
        <View style={styles.tableHeading}>
          <Text style={styles.tableHeadingText}>Column1</Text>
        </View>
        <View style={styles.tableHeading}>
          <Text style={styles.tableHeadingText}>Column1</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={(itemData) => {
          return (
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.tableContent}>
                <Text style={styles.tableContentText}>
                  {itemData.item.column1}
                </Text>
              </View>
              <View style={styles.tableContent}>
                <Text style={styles.tableContentText}>
                  {itemData.item.column2}
                </Text>
              </View>
              <View style={styles.tableContent}>
                <Text style={styles.tableContentText}>
                  {itemData.item.column3}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tableHeading: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    width: deviceWidth*0.25,
    borderWidth: 1,
    borderColor: '#fff',
  },
  tableHeadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color:"#fff"
  },
  tableContentText: {
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tableContent: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e4e2',
    width: deviceWidth*0.25,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default BorderlessTable;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = React.useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <View>
      <FlatList
        data={props.data}
        // horizontal
        renderItem={(itemData) => {
          return (
            <View
              style={{
                height: deviceHeight * 0.3,
                width: deviceWidth * 0.8,
                backgroundColor: 'orange',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: deviceWidth * 0.1,
                marginTop: 80,
              }}>
              <Text>{itemData.item.text1}</Text>
              <Text>{itemData.item.text2}</Text>
            </View>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
      />
    </View>
  );
}

// function Carousel(props) {
//   return (
//     <FlatList
//       data={props.data}
//       renderItem={(itemData) => {
//         <Slide text1={itemData.item.text1} text2={itemData.item.text2} />
//       }}
//     />
//   )
// }

export default Carousel;

