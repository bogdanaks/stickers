export const FETCH_STICKERS = 'STICKER/FETCH_STICKERS'
export const ADD_STICKER    = 'STICKER/ADD_STICKER'
export const DELETE_STICKER = 'STICKER/DELETE_STICKER'
export const CHANGE_TEXT    = 'STICKER/CHANGE_TEXT'

export type addPayloadType = {
    id: string
    x: number
    y: number
    direction: "rightStick" | "leftStick"
    pinColor: string
    text: string
}
interface ChangeTextStickerAction {
    type: typeof CHANGE_TEXT
    payload: { id: string, text: string }
}
interface FetchStickerAction {
    type: typeof FETCH_STICKERS
    payload: object[]
}
interface AddStickerAction {
    type: typeof ADD_STICKER
    payload: addPayloadType
}
interface DeleteStickerAction {
    type: typeof DELETE_STICKER
    payload: string
}

export type StickersActionTypes = ChangeTextStickerAction | FetchStickerAction | AddStickerAction | DeleteStickerAction