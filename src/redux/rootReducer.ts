import { combineReducers } from 'redux'
import { stickersReducer } from './stickersReducer'

export const rootReducer = combineReducers({
    stickers: stickersReducer
})