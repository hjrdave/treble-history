import {useEffect} from 'react';
import {useTreble, updateStore} from 'treble-gsm';
import useTrebleHistory from './history-hook';

export default function HistorySync(){
    const currentState = useTreble()[0];
    const {subscribeID} = useTreble()[0];
    const dispatch = useTreble()[1];
    const [{fruit}, dispatchHistory] = useTrebleHistory();
    

    // const updateHistory = () => {
    //     // Object.keys(currentState).forEach((key: any) => {
    //     //     if(key in history && currentState[key] !== history[key][(history.length === 0) ? 0 : history.length - 1 ] && subscribeID !== 0){
    //     //         updateStore('updateFruit', 'fooBerry', dispatch);
    //     //         //console.log(dispatch);
    //     //     }
    //     // });
    // }

    // useEffect(() => {
    //     //updateStore('updateFruit', 'fooBerry', dispatchHistory);
    // },[]);

    // // useEffect(() => {
    // //     console.log(currentState);
    // //     console.log(history);
    // // },[history]);

    return null;
}