import React from 'react'
import './Login.css'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useMutation } from '@tanstack/react-query'
import { handleLogin } from '../../utils/MainApi'
import { useDispatch } from 'react-redux'
import { setToken } from '../../redux/slices/userReducer'


export default function Login() {

    //создаем метод для изменения локации, нужен в onSubmit
    const navigate = useNavigate();

    const dispatch = useDispatch();

    //начальные значения для Formik
    const initialValues = {
        email: '',
        password: ''
    }

    //нужно для валидации формы
    const loginSchema = Yup.object().shape({
        email: Yup.string('Введите корректный email').email('Введите корректный email').required('Обязательное поле').min(5, 'Введите не менее 5 символов').max(25, 'Введите не более 25 символов'), //ключ email - это строка, эл/адрес, обязательное поле(не пустое), минималье кол-во и максимальное кол-во символов - эти методы взяты из библиотеки Yup
        password: Yup.string('Введите корректный пароль').min(5, 'Введите не менее 5 символов').max(25, 'Введите не более 25 символов').required('Обязательное поле'),
    })

    const onSubmit = (values) => {
        handleRegister(values, {
            onSuccess: (res) => {
                console.log(res);
                dispatch(setToken(res.token))
                navigate('/movies')
            }, onError: (res) => {
                alert("Произошла ошибка. Попробуйте еще раз")
            }
        })
    }

    const { mutate: handleRegister } = useMutation({ //useMutation - хук, который позволяет создать функцию отложенного вызова(срабатывают при клике, изменении, каком-то действии, главное не сразу)
        mutationFn: handleLogin
    })

    return (
        <>
            <div className='login'>
                <Link to="/" className='login__logo'>
                    <img src={logo} alt='Логотип сайта' />
                </Link>
                <h2 className="login__title">Рады видеть!</h2>

                <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={onSubmit}>
                    {(formik) => {
                        const { isValid, dirty } = formik
                        return (
                            <Form className="user-form">
                                <label className='user-form__field'>E-mail
                                    <Field
                                        className="form__input form__input_type_email user-form__input"
                                        id="input-userEmail"
                                        name="email"
                                        type="email"
                                        autoComplete="off"
                                    />
                                    <ErrorMessage name="email" component="div" className='error__message' />
                                </label>

                                <label className='user-form__field'>Пароль
                                    <Field
                                        className="form__input form__input_type_password user-form__input"
                                        id="input-password"
                                        name="password"
                                        type="password"
                                    />
                                    <ErrorMessage name="password" component="div" className='error__message' />
                                </label>
                                <button className="user-form__button" type="submit" disabled={!(dirty && isValid)}>Войти</button>
                                <p className="user-form__subtitle">
                                    Ещё не зарегистрированы?{" "}
                                    <Link to="/signup" className="user-form__link">
                                        Регистрация
                                    </Link>
                                </p>
                            </Form>
                        )
                    }}

                </Formik>
            </div>
        </>
    )
}
