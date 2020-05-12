import { FETCH_STICKERS, ADD_STICKER, DELETE_STICKER, CHANGE_TEXT, StickersActionTypes, addPayloadType } from './actionTypes'

export interface StickersState {
    readonly stickers: addPayloadType[]
}
const initialState: StickersState = {
    stickers: []
}

export const stickersReducer = (state = initialState, action: StickersActionTypes) => {
    switch(action.type) {
        case FETCH_STICKERS:
            return { ...state, stickers: action.payload}
        case ADD_STICKER:
            return { ...state, stickers: state.stickers.concat({    
                                                                    id: action.payload.id,
                                                                    x: action.payload.x, 
                                                                    y: action.payload.y, 
                                                                    direction: action.payload.direction,
                                                                    pinColor: action.payload.pinColor,
                                                                    text: action.payload.text
                                                                })}
        case DELETE_STICKER:
            return { ...state, stickers: state.stickers.filter((stick)=>stick.id !== action.payload) }
        case CHANGE_TEXT:
            state.stickers.map((stick: { id: string, text: string }) => stick.id === action.payload.id ? stick.text = action.payload.text : null)
            return state
        default: return state
    }
}