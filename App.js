import * as React from 'react';
import BorderlessTable from './components/BorderlessTable'
import {View} from 'react-native'


const data = [{
  column1:"row1",column2:"row2", column3:"row3"},
  {column1:"row1",column2:"row2ahdgjgasbygeydgjas as,dbuwhndandan", column3:"row3"},
  {column1:"row1",column2:"row2", column3:"row3"}]

export default function App() {
  return (
    <BorderlessTable data={data}/>
      );
}

