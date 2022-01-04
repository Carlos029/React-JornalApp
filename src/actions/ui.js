import { types } from "../types/types"



export const setError = (error) => {
    return {
        type: types.uiSetError,
        payload: error
    }
}

export const removeError = () => {
    return {
        type: types.uiRemoveError
    }
}


//cuando esta en pantalla de login, y presiona el boton "login", el valor se pone en true, y si esta en true, no puede volver apretar el boton hasta que cambie a false 
export const startLoading = () => {
    return {
        type: types.uiStartLoading
    }
}


//lo mismo q startLoadin, pero al revez, para q valor = false y poder presionar el boton otra vez
export const finishLoading = () => {
    return {
        type: types.uiFinishLoading
    }
}
