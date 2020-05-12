import React, { useEffect, useRef } from 'react'

import StickerText from './OnBord/StickerText'

interface Props {
    moveSticker: boolean
    stickerOne: string
}
const StickerOnMove: React.FC<Props> = ({moveSticker, stickerOne}) => {
    const stickRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if(moveSticker) {
            document.addEventListener('mousemove', (event: MouseEvent) => {
                if(stickRef.current) {
                    stickRef.current.style.transform = `translate(${String(event.pageX-85)}px, ${String(event.pageY-480)}px)`
                }
                
            })
        }
    }, [moveSticker])
    if(!moveSticker) {
        return null
    }
    return (
        <div 
            className={"stickerOneMove"}
            ref={stickRef}
        >
            <StickerText text={''}/>
            <img src={stickerOne} alt=""/>
        </div>
    )
}

export default StickerOnMove
