import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {electronEnhancer} from 'redux-electron-store'
import thunk from 'redux-thunk'

import * as reducers from './reducers'

const store = createStore(
  combineReducers(reducers),
  undefined,
  compose(
    electronEnhancer(),
    applyMiddleware(thunk)
  )
)

export {store}
