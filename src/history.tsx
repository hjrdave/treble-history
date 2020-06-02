import React from 'react';
import Provider from './provider';
import buildHistoryReducer from './reducer';
import HistoryContext from './context';
import buildHistory from './state';
import HistorySync from './history-sync';

interface Props{
    data: any
}
export default function TrebleHistory({data}:Props){
    const state = buildHistory(data);
    const reducer = buildHistoryReducer(data);
   return(
       <Provider data={state} reducer={reducer} scope={HistoryContext}>
           <HistorySync/>
       </Provider>
   )
}