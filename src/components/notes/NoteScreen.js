import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNote, startDeleting } from '../../actions/notes'


export const NoteScreen = () => {


    const { active: note } = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note);
    const { title, body } = formValues;
    const dispatch = useDispatch()

    const activeId = useRef(note.id) 

    useEffect(() => {

        if (note.id !== activeId.current) {  
            reset();
            activeId.current = note.id   
        }

    }, [note, reset])  

    useEffect(() => {

        dispatch((activeNote(formValues.id, { ...formValues }))) 

    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch(startDeleting(activeId.current))
    }


    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    value={title}
                    onChange={handleInputChange}
                    placeholder="Untitled"
                    className="notes__title-input"
                    autoComplete="off"
                    name='title'
                ></input>

                <textarea
                    placeholder="what happened today"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                    name='body'
                >
                </textarea>

                {
                    (note.url)
                    && (
                        <div className="notes__image">
                            <img
                                src={note.url}
                                alt="imagen"
                            />
                        </div>
                    )
                }

                <button 
                className='btn btn-danger'
                onClick={handleDelete}
                >
                    Delete
                </button>


            </div>

        </div>
    )
}
