/*
    Treble History Hook
    Gives child components that call it access to store.
*/

import React,{useContext} from 'react';
import historyContext from './context';

interface IUseTreble {
    (
        context?: React.Context<[]>
    ): any
}

const useTrebleHistory: IUseTreble = (context) => {

    try{
        if(context){
            if(typeof context !== 'object'){
                throw new TypeError('useTreble hook must only accept React.Context.')
            }
        }
    }catch(error){
        throw error
    }
    return useContext(historyContext);
};

export default useTrebleHistory;

