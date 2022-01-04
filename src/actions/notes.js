import { database } from '../firebase/firebase-config'
import { loadNotes } from '../helpers/loadNotes'
import { types } from '../types/types'
import Swal from 'sweetalert2'
import { fileUpload } from '../helpers/fileUpload'


//crea una nueva nota 
export const startNewNote = () => {
    return async (dispatch, getState) => {  

        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        //path de la collection de DB
        const docRef = await database.collection(`${uid}/journal/notes`).add(newNote)

        dispatch(activeNote(docRef.id, newNote))
        dispatch(addNewNote(docRef.id, newNote))
    }
}


//activa la nueva nota para verla en pantalla
export const activeNote = (id, note) => { 
    return {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }
}

//al crear una nueva nota, la sube al store de redux
export const addNewNote = (id, note) => {
    return {
        type: types.notesAddNew,
        payload:{
            id,
            ...note
        }
    }

}


//carga las notas al cargar o recargar la pagina 
export const startLoadingNotes = (uid) => {  
    return async (dispatch) => {

        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

//action que pone las notas en nuestro store
export const setNotes = (notes) => {  
    return {
        type: types.notesLoad,
        payload: notes
    }
}

//envia y actualiza los cambios de la nota en firestore
export const startSaveNote = (note) => {    

    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        if (!note.url) {             
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await database.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)
            .catch(err => {
                Swal.fire('Error', err.message, 'error')
            });

        dispatch(refreshNote(note.id, noteToFirestore))  

        Swal.fire('Saved', note.title, 'success')  
    }

}


//actualiza los cambios en en la vista previa de la nota
export const refreshNote = (id, note) => {

    return {
        type: types.notesUpdated,
        payload: {
            id,
            note: {
                id,    
                ...note
            }
        }
    }
}


//actualiza la nota con la nueva imagen y hace los cambios en el firestore
export const startUploading = (file) => {
    return async (dispatch, getState) => {

        const { active: activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        }); 

        const fileUrl = await fileUpload(file)
        activeNote.url = fileUrl;

        dispatch(startSaveNote(activeNote))

        Swal.close();

    }
}


//elimina la nota de la base de datos y de las notas del store de redux 
export const startDeleting = (id) => {   
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        await database.doc(`${uid}/journal/notes/${id}`).delete()
            .catch(err => {
                throw err
            });

        dispatch(deleteNote(id));

    }

}

//action para eliminar la nota del store de redux 
export const deleteNote = (id) => {
    return {
        type: types.notesDelete,
        payload: {
            id
        }
    }

}

//elimina las notas del store de redux una vez hace el logout 
export const deleteAllLogout = () => {

    return {
        type: types.notesLogoutCleaning,
    }
}
