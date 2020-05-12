import React from 'react'

interface Props {
    stickerOne: string
}
const Image: React.FC<Props> = ({stickerOne}) => {
    return (
        <div className="stickImg">
            <img src={stickerOne} alt=""/>
        </div>
    )
}

export default Image
