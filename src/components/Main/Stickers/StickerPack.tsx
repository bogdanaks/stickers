import React from 'react'

import stickersPack from '../../../assets/stickersPack.png'

interface Props {
    setMoveSticker: (flag: boolean) => void
}
const StickerPack: React.FC<Props> = ({setMoveSticker}) => {
    const handlerStickersClick = () => {
        setMoveSticker(true)
    }
    return (
        <div 
            className="stickersBlock"
            onClick={handlerStickersClick}
        >
            <img src={stickersPack} alt=""/>
        </div>
    )
}

export default StickerPack
