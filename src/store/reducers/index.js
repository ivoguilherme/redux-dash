import { combineReducers } from 'redux';

import sidebar from './sidebar';
import course from './course';

export default combineReducers({
  sidebar,
  course
});
