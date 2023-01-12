import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPostQuizzes.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function AdminPostQuizzes() {
    let navigate = useNavigate();

    const initialValues = {
        quizName: "",
        quizImage: "",
        quizDifficulty: "",
        quizDescription: "",
        catId: 0,
    }

    const validationSchema = Yup.object().shape({
        quizName: Yup.string().min(10).required("There must be a quiz name!"),
        quizImage: Yup.string().required("An Image for your quiz is required!"),
        quizDifficulty: Yup.string().required("Difficulty must be stated for your quiz!"),
        quizDescription: Yup.string().min(30).max(500).required("Describe about the quiz!"),
        catId:  Yup.number().required()
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:2000/quizzes", data).then((response) => {
            navigate('/quizzes')
        })
    }
    return (
        <div className='create-quiz-container'>
            <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            >
                <Form className='create-quiz-form'>
                    <label>Quiz Name</label>
                    <ErrorMessage name='quizName' component='span' />
                    <Field 
                        autoComplete='off'
                        id='input-create-quiz' 
                        name='quizName' 
                        placeholder='Quiz Name'
                    />
                    <label>Quiz Image</label>
                    <ErrorMessage name='quizImage' component='span' />
                    <Field 
                        autoComplete='off'
                        id='input-create-quiz' 
                        name='quizImage' 
                        placeholder='Quiz Image'
                    />
                    <label>Quiz Difficulty</label>
                    <ErrorMessage name='quizDifficulty' component='span' />
                    <Field 
                        autoComplete='off'
                        id='input-create-quiz' 
                        name='quizDifficulty' 
                        placeholder='Quiz Difficulty'
                    />
                    <label>Quiz Description</label>
                    <ErrorMessage name='quizDescription' component='span' />
                    <Field 
                        autoComplete='off'
                        id='input-create-quiz' 
                        name='quizDescription' 
                        placeholder='Quiz Description'
                    />
                    <label>Category ID</label>
                    <ErrorMessage name='catId' component='span' />
                    <Field
                    autoComplete='off'
                    id='input-create-quiz'
                    type='number'
                    name='catId'
                    />
                    <button type='submit' className='admin-btn'>Create Quiz</button>
                </Form>
            </Formik>
        </div>
    )
}
