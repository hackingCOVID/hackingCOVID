import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import store from './store'

const reducer = combineReducers({store}) // hits reducer twice 
const middleware = composeWithDevTools(// doesnt hit reducer 
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const newStore = createStore(reducer, middleware) // hits reducer 

export default newStore
export * from './store'
