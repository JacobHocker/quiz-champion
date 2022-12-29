import React from 'react';
import './AdminPostQuizzes.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function AdminPostQuizzes() {

    const initialValues = {
        quizName: "",
        quizImage: "",
        quizCategory: "",
        quizDescription: "",
    }

    const validationSchema = Yup.object().shape({
        quizName: Yup.string().min(10).required("There must be a quiz name!"),
        quizImage: Yup.string().required("An Image for your quiz is required!"),
        quizCategory: Yup.string().required("Category must be stated for your quiz!"),
        quizDescription: Yup.string().min(30).max(500).required("Describe about the quiz!")
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:2000/quizzes", data).then((response) => {
            console.log("Success")
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
                    <label>Quiz Category</label>
                    <ErrorMessage name='quizCategory' component='span' />
                    <Field 
                        autoComplete='off'
                        id='input-create-quiz' 
                        name='quizCategory' 
                        placeholder='Quiz Category'
                    />
                    <label>Quiz Description</label>
                    <ErrorMessage name='quizDescription' component='span' />
                    <Field 
                        autoComplete='off'
                        id='input-create-quiz' 
                        name='quizDescription' 
                        placeholder='Quiz Description'
                    />

                    <button type='submit'>Create Quiz</button>
                </Form>
            </Formik>
        </div>
    )
}