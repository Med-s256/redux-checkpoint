import { createStore } from 'redux'
import TaskReducer from './reducer/TaskReducer'

const store= createStore(TaskReducer);
export default store;