import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/user.reducer'

// redux persist settings
const persistConfig = {
  key: 'root',
  storage
  // array containing the reducers we want to persist
  //   whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer
})

export default persistReducer(persistConfig, rootReducer)
