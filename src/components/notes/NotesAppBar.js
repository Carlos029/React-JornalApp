import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const {active: note} = useSelector(state => state.notes)
    const fileSelector = useRef()

    const handleSave = () => {
        
        console.log(note)
         dispatch( startSaveNote(note) )
    }

    const handlePictureUpload = () => {
        fileSelector.current.click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]; 
        if ( file ){   // if se subio un archivo
            dispatch(startUploading(file))
        }
    }

    return (
        <div className="notes__appbar">

            <span>28 de agosto 2020</span>

            <input
            ref = {fileSelector}
            name= 'file'
            type = 'file'
            style= {{display: 'none' }}
            onChange={ handleFileChange }
            />

            <div>
                <button 
                className="btn"
                onClick={handlePictureUpload}
                >
                    Picture
                </button>

                <button 
                className="btn"
                onClick={handleSave}
                >
                    Save
                </button>
            </div>
            
        </div>
    )
}
