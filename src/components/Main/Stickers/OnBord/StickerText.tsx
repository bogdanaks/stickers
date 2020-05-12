import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { changeStickerText } from '../../../../redux/actions'

interface Props {
    id?: string
    text: string
}
const Textarea: React.FC<Props> = ({id, text}) => {
    const [localtext, setLocalText] = useState<string>('')
    const textStore = useRef<HTMLDivElement>(null)
    const disptach = useDispatch()
    const handlerLocalOnFocus = () => {
        textStore.current!.style.visibility = 'hidden'
        setLocalText(text)
    }
    const handlerLocalOnBlur = () => {
        handlerTextSave(localtext)
        textStore.current!.style.visibility = 'visibility'
    }
    const handlerNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setLocalText(event.target.value)
    }
    const handlerTextSave = (text: string) => {
        disptach(changeStickerText(id!, text))
    }
    return (
        <>
        <div className="sticktextLocal">
            <textarea 
                name="sticktextLocal" 
                onChange={handlerNoteChange}
                onFocus={handlerLocalOnFocus}
                onBlur={handlerLocalOnBlur}
                defaultValue={localtext}
            ></textarea>
        </div>
        <div className="sticktextStore" ref={textStore}>
            <textarea 
                name="sticktextStore" 
                placeholder="HI &#10;I AM &#10;YOUR NOTE =)"
                defaultValue={text}
                style={{}}
            ></textarea>
        </div>
        </>
    )
}

export default Textarea
