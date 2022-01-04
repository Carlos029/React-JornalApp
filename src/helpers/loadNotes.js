import { database } from "../firebase/firebase-config"

//carga las notas de firestore
export const loadNotes = async (uid) => {


    const notesSnap = await database.collection(`${uid}/journal/notes`).orderBy('date','desc').get();
    const notes = [];

    notesSnap.forEach(snapHijo => {
        notes.push({                
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    return notes;

}