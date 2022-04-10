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
