import { FETCH_STICKERS, ADD_STICKER, DELETE_STICKER, CHANGE_TEXT, StickersActionTypes, addPayloadType } from "./actionTypes"
import { Dispatch } from "redux"


export const fetchStickers = (): StickersActionTypes => {
    const stickers = JSON.parse(localStorage.getItem('stickers')!)
    const emptyArr: object[] = []
    return {
        type: FETCH_STICKERS,
        payload: stickers === null ? emptyArr : stickers
    }
}
export const addSticker = (stick: addPayloadType): StickersActionTypes => {
    const sticker = {
        id: stick.id,
        x: stick.x,
        y: stick.y,
        direction: stick.direction,
        pinColor: stick.pinColor,
        text: stick.text
    }

    const stickersArray = JSON.parse(localStorage.getItem('stickers')!)
    const res = stickersArray !== null ? true : false
    if(res) {
        localStorage.setItem('stickers', JSON.stringify([...stickersArray, sticker])) 
    } else {
        localStorage.setItem('stickers', JSON.stringify([sticker]))
    }
    return {
        type: ADD_STICKER,
        payload: sticker
    }
}
export const delSticker = (id: string) => {
    return async (dispatch: Dispatch) => {
        const stickersArray = JSON.parse(localStorage.getItem('stickers')!)
        const res = stickersArray.filter((stick: {id: string})=>stick.id !== id)
        localStorage.clear()
        localStorage.setItem('stickers', JSON.stringify(res))
        await dispatch({ type: DELETE_STICKER, payload: id })
    }
}
export const changeStickerText = (id: string, text: string) => {
    return async (dispatch: Dispatch) => {
        let stickersArray = JSON.parse(localStorage.getItem('stickers')!)
        stickersArray.map((stick: { id: string, text: string }) => stick.id === id ? stick.text = text : null)
        localStorage.clear()
        localStorage.setItem('stickers', JSON.stringify(stickersArray))
        dispatch({ type: CHANGE_TEXT, payload: { id: id, text: text } })
    }
}