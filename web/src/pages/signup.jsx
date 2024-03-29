import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/button';
import { redirect } from 'react-router-dom';
import ToggleEntry from '../components/toggleEntry';
import axios from 'axios';


const SignupPage = () => {
    // Add your signup logic here
    // const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    // const { errors } = formState;

    const onSubmit =  (data, event) => {
        // const signupFormData = new FormData();
        // signupFormData.append('first_name', data.firstName);
        // signupFormData.append('last_name', data.surname);
        // signupFormData.append('email', data.email);
        // signupFormData.append('password', data.password);
        // signupFormData.append('date_of_birth', new Date(data.dateOfBirth).toISOString());

        // // Check if optional fields are filled out and append them to the form data
        // if (data.optionalField1) {
        //     signupFormData.append('country', data.country);
        // }
        // if (data.optionalField2) {
        //     signupFormData.append('timezone', data.timezone);
        // }
        // if (data.optionalField3) {
        //     signupFormData.append('currency', data.currency);
        // }
        // try {
        //     const response = await axios.post('http://localhost:5000/api/v1/users', signupFormData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     });

        //     console.log(signupFormData);
        //     console.log("It went through");
        //     event.preventDefault();
        //     //Redirect to login page
        //     window.location.href = '/login';
        // } catch (error) {
        //     console.error(error);
        // }
        // console.log(response.data);
        window.location.href = '/login';
    };

    return (
        // <section >
        //     <section className='w-10/12 h-10/12 rounded-r-xl'>
        <section className='bg-[#90EB88] h-screen w-full '>
            <section className='w-2/4 mx-auto bg-[#90EB88] '>
                
                <button className='bg-white rounded mt-16 max-sm:ml-20 sm:ml-44 py-2 px-12'>log in</button>
                <button className='bg-white rounded py-2 px-12'>sign up</button>

                <section className='bg-[#90EB88]  flex items-center justify-center'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                         <section className='mt-8 grid grid-cols-1 gap-x-4 min-md:gap-y-8 md:grid-cols-2'>
                            <label htmlFor='firstName' className='block font-medium leading-6 text-gray-900'>
                                <input
                                className='bg-white rounded-2xl pl-8 pr-8 py-2 my-3 w-full outline-none'
                                type='text'
                                name='firstName'
                                placeholder='First Name'
                                {...register('firstName',
                                    {
                                        required: {
                                            value: true,
                                            message: "First Name is required",
                                        },
                                        minLength: {
                                            value: 2,
                                            message: "First Name must be at least 2 characters",
                                        },
                                    })}
                            />
                        </label>
                        {/* <span className='hidden sm:inline-block text-sm ml-3 my-0 text-red-600'>{errors.fullname?.message}</span> */}


                        <label htmlFor='surname' className='block font-medium leading-6 text-gray-900'>
                            <input
                                className='bg-white rounded-2xl pl-8 pr-8 py-2 my-3 w-full outline-none'
                                type='text'
                                name='surname'
                                placeholder='Surname'
                                {...register('surname',
                                    {
                                        required: {
                                            value: true,
                                            message: "Surname is required",
                                        },
                                        minLength: {
                                            value: 2,
                                            message: "Surname must be at least 2 characters",
                                        },
                                    })}
                            />

                        </label>
                        {/* <span className='hidden sm:inline-block text-sm ml-3 my-0 text-red-600'>{errors.fullname?.message}</span> */}
                    </section>
                    <label htmlFor='dateOfBirth' className='block font-medium leading-6 '>
                        <input
                            className='bg-white rounded-2xl pl-8 pr-8 py-2 my-3 w-full outline-none'
                            type='date'
                            name='dateOfBirth'
                            {...register('dateOfBirth',
                                {
                                    required: {
                                        value: true,
                                        message: "Date of Birth is required",
                                    },
                                })}
                        />
                    </label>

                    <label htmlFor='email' className='font-medium leading-6 text-gray-900'>
                        <input
                            className='bg-white rounded-2xl pl-8 py-2 my-2 w-full outline-none'
                            type='email'
                            name='email'
                            placeholder='Email'
                            {...register('email',
                                {
                                    required: {
                                        value: true,
                                        message: "Email address is required",
                                    },
                                    pattern: {
                                        value:
                                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: "Invalid email format"
                                    },
                                })}
                        />
                        <span className='text-sm ml-3 text-red-600'>{errors.email?.message}</span>
                    </label>

                    <label htmlFor='password' className='font-medium leading-6 text-gray-900'>
                        <input
                            className='bg-white rounded-2xl pl-8 py-2 my-2 w-full outline-none'
                            type='password'
                            name='password'
                            placeholder='Password'
                            suggested='current-password'
                            {...register('password',
                                {
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters",
                                    },
                                    pattern: {
                                        value:
                                            /^(?=.*[A-Z])(?=.*[!@#$&*^%()~`])(?=.*[0-9]).{8,}$/,
                                        message: "Must contain: 1 special charceter, a capital letter and a number"
                                    },
                                })}
                        />
                        <span className='text-sm ml-3 text-red-600'>{errors.password?.message}</span>
                    </label>
                    <section className='flex flex-col mx-16 ml-28 sm:ml-48'>
                        <Button intent='welcoming' label='Sign Up' />
                    </section>
                    <p className='text-center'>Already have an acccount? Login</p>

                </form>
            </section>
            </section>
        </section>

        // </section>
    );
}

export default SignupPage;
