/**
 * SHOW_ALL, SHOW_COMPLETE, SHOW_UNCOMPLETE
 */
import {SET_FILTER} from '../action_types';

export default (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case SET_FILTER:
      return action.filter;
    default: 
      return state;
  }
}