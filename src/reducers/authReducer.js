import { types } from "../types/types";


/*  ejemplo de la info del state de abajo

    {
        uid: 'sdfsfw4523'
        name: 'Carlos'
    }

 */

export const authReducer = (state = {}, action) => { 

    switch (action.type) {


        case types.login:

            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:

            return {}

        default:
            break;

    }

    return state

}
