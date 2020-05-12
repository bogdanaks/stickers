import React from 'react'
import { useDispatch } from 'react-redux'
import { delSticker } from '../../../../redux/actions'

interface Props {
    id: string
    pinColor: string
}
const Pin: React.FC<Props> = ({id, pinColor}) => {
    const dispatch = useDispatch()
    const handlerPinClick = () => {
        const isDelete = window.confirm("Delete note?")
        if(isDelete) {
            dispatch(delSticker(id))
        }
    }
    return (
        <div 
            className="stickPin"
            onClick={handlerPinClick}
        >
            <img src={pinColor} alt=""/>
        </div>
    )
}

export default Pin
