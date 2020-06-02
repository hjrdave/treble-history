
/*
    History Context
    Context for History Module.
*/

import { createContext } from 'react';

const defaultValue: [] = [];
const HistoryContext = createContext(defaultValue);

export default HistoryContext;