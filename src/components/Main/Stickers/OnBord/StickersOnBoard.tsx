import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import StickerPin from './StickerPin'
import StickerText from './StickerText'
import StickerImage from './StickerImage'
import { fetchStickers } from '../../../../redux/actions'

type StickerObjType = {
    id: string
    x: number
    y: number
    direction: "rightStick" | "leftStick"
    pinColor: string
    text: string
}

type StickersState = {
    stickers: {
        stickers: StickerObjType[]
    }
}

interface Props {
    stickerOne: string
}
const StickersOnBoard: React.FC<Props> = ({stickerOne}) => {
    const stickers = useSelector<StickersState, StickerObjType[]>(state => state.stickers.stickers)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchStickers())
    }, [dispatch])
    return (
        <>
        {stickers && stickers.map((stick, index) => {
            return (
            <div 
                key={stick.id}
                className={"stickerOne " + stick.direction}
                style={{
                    left: stick.x-75,
                    top: stick.y-75
                }}
            >
                <StickerPin id={stick.id}  pinColor={stick.pinColor} />
                
                <StickerText text={stick.text} id={stick.id}/>
                <StickerImage stickerOne={stickerOne} />
            </div>
            )
        })}
        </>
    )
}

export default StickersOnBoard
