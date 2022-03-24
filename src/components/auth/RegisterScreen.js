import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'


export const RegisterScreen = () => {

    const dispatch = useDispatch(); 
    const { msgError } = useSelector(state => state.ui)  //asi recibo la informacion que esta en el store (osea, la informacion de los reducers)

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: "",
        password2: ""

    });

    const { name, email, password, password2 } = formValues;


    const handleRegister = (e) => {

        e.preventDefault();

        if (isFormValid()) {
            dispatch(removeError())
            dispatch(startRegisterWithEmailPasswordName(email,password,name))
        }

    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('name is requiered'))
            return false
        } else if (email.trim().length === 0) {
            dispatch(setError('email is requiered'))
            return false
        }else if (password.trim().length < 5 || password.trim() !== password2.trim()) {
            dispatch(setError('password needs to be at least 6 characters and match each other'))
            return false
        }

        return true;
    }


    return (
        <div>
            <h3 className="auth__title">Register </h3>

            <form 
            onSubmit={handleRegister}
            className='animate__animated animate__fadeIn animate__faster'
            >

                {
                    msgError !== '' &&

                        (
                            <div className='auth__alert-error'>
                               {msgError} {/*esto se pudo hacer con un state, pero aqui se hizo con redux (con reducer uiReducer), para practicar*/}
                            </div>
                        )

                }


                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}

                />

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    minLength="5"
                    value={email}
                    onChange={handleInputChange}

                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}

                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}

                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mt-5"
                >
                    Register
                </button>

                <hr />


                <Link
                    to="/auth/login"
                    className="link"
                >
                    Registered already?
                </Link>

            </form>
        </div>
    )
}
