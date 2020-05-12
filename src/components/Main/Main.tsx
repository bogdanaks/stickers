import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import randomstring from 'randomstring'

import './main.scss'
import stickerOne from '../../assets/stickerOne.png'
import cancBtn1 from '../../assets/cancBtn1.png'
import cancBtn2 from '../../assets/cancBtn2.png'
import cancBtn3 from '../../assets/cancBtn3.png'

import StickerOnMove from './Stickers/StickerOnMove'
import StickersOnBoard from './Stickers/OnBord/StickersOnBoard'
import { addSticker } from '../../redux/actions'
import StickerPack from './Stickers/StickerPack'


const Main: React.FC = () => {
    const [moveSticker, setMoveSticker] = useState<boolean>(false)
    const pinsArray = [cancBtn1, cancBtn2, cancBtn3]
    const dispatch = useDispatch()
    const handlerBordClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(moveSticker) {
            const id: string = randomstring.generate(5)
            dispatch(addSticker({   id: id,
                                    x: event.pageX, 
                                    y: event.pageY, 
                                    direction: Math.round(Math.random()) ? "rightStick" : "leftStick",
                                    pinColor: pinsArray[randomInteger(0,2)],
                                    text: ''
                                }))
            setMoveSticker(false)
        }
    }
    const randomInteger = (min: number, max: number) => {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        return Math.round(rand)
    }
    return (
        <div 
            className="container-fluid mainWrapper"
            onClick={handlerBordClick}
        >
            <StickerPack 
                setMoveSticker={setMoveSticker}
            />
            <StickerOnMove 
                moveSticker={moveSticker}
                stickerOne={stickerOne}
            />
            <StickersOnBoard
                stickerOne={stickerOne}
            />
        </div>
    )
}

export default Main
