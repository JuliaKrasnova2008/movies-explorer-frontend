import React from 'react'
import './Register.css'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { handleReg } from '../../utils/MainApi'


export default function Register() {

    //создаем метод для изменения локации, нужен в onSubmit
    const navigate = useNavigate()

    //начальные значения для Formik
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    //нужно для валидации формы
    const loginSchema = Yup.object().shape({
        name: Yup.string().required('Обязательное поле').min(2, 'Введите не менее 2 символов').max(20, 'Введите не более 20 символов'),
        email: Yup.string('Введите корректный email').email('Введите корректный email').required('Обязательное поле').min(5, 'Введите не менее 5 символов').max(25, 'Введите не более 25 символов'), //ключ email - это строка, эл/адрес, обязательное поле(не пустое), минималье кол-во и максимальное кол-во символов - эти методы взяты из библиотеки Yup
        password: Yup.string('Введите корректный пароль').min(5, 'Введите не менее 5 символов').max(25, 'Введите не более 25 символов').required('Обязательное поле'),
    })

    const onSubmit = (values) => {
        handleRegister(values, {
            onSuccess: (res) => {
                console.log(res);
                navigate('/signin')
            }, onError: (res) => {
                alert("Произошла ошибка. Попробуйте еще раз")
            }
        })
    }

    const { mutate: handleRegister } = useMutation({ //useMutation - хук, который позволяет создать функцию отложенного вызова(срабатывают при клике, изменении, каком-то действии, главное не сразу)
        mutationFn: handleReg
    })

    return (
        <>
            <div className='register'>
                <Link to="/" className='register__logo'>
                    <img src={logo} alt='Логотип сайта' />
                </Link>
                <h2 className="register__title">Добро пожаловать!</h2>

                <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={onSubmit}>
                    {(formik) => {
                        const { isValid, dirty } = formik
                        return (
                            <Form className="user-form">
                                <label className='user-form__field'>Имя
                                    <Field
                                        className="form__input form__input_type_name user-form__input"
                                        id="input-userName"
                                        name="name"
                                        type="text"
                                        autoComplete="off"
                                    />
                                    <ErrorMessage name="name" component="div" className='error__message' />
                                </label>

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
                                <button className="user-form__button" type="submit" disabled={!(dirty && isValid)}>Зарегестрироваться</button>
                                <p className="user-form__subtitle">
                                    Уже зарегистрированы?{" "}
                                    <Link to="/signin" className="user-form__link">
                                        Войти
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
