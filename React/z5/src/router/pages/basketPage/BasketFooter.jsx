import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { PatternFormat } from "react-number-format";

const BuyForm = (props) => {
  const cards = props.cards;
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
      adress: '',
      phone: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .max(10, 'Must be 10 characters or less')
      .min(2, 'Must be 2 characters or more')
      .required('Required'),
      lastName: Yup.string()
      .max(10, 'Must be 10 characters or less')
      .min(2, 'Must be 2 characters or more')
      .required('Required'),
      age: Yup
      .number()
      .typeError('Must be a number')
      .required('Required')
      .min(10, "Too little")
      .max(100, 'Too much!')     
      .integer('Must be integer')
      ,
      adress: Yup.string()
      .max(100, 'Must be 100 characters or less')
      .min(2, 'Must be 2 characters or more')
      .required('Required')
      ,
      phone: Yup.string()
      .required('Required')
    }),
    onSubmit: values => {
      console.log('User information:', values);
      console.log('Purchased items:', cards);
      localStorage.removeItem('basket');
      // window.location.reload()
    }
  })
  return (
    <div className='basket-footer'>
      <h3>Please write your contact details</h3>
      <form onSubmit={formik.handleSubmit}>
        {/* <div> */}
          <label htmlFor='firstName'> First Name </label>
          <input 
            id='firstName'
            type='text'
            {...formik.getFieldProps('firstName')}
            ></input>
          {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
        {/* </div> */}

        {/* <div> */}
          <label htmlFor='lastName'> Last Name </label>
          <input 
            id='lastName'
            type='text'
            {...formik.getFieldProps('lastName')}
            ></input>
          {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
        {/* </div> */}

        {/* <div> */}
          <label htmlFor='age'> Age </label>
          <input 
            id='age'
            type='text'
            {...formik.getFieldProps('age')}
            ></input>
          {formik.touched.age && formik.errors.age ? <p>{formik.errors.age}</p> : null}
        {/* </div> */}

        {/* <div> */}
          <label htmlFor='adress'> Delivery adress </label>
          <input 
            id='adress'
            type='text'
            {...formik.getFieldProps('adress')}
            ></input>
          {formik.touched.adress && formik.errors.adress ? <p>{formik.errors.adress}</p> : null}
        {/* </div> */}

        {/* <div> */}
          <label htmlFor='phone'> Phone </label>
          <PatternFormat format="+380 (##) ### ## ##" allowEmptyFormatting mask="_" 
            id='phone'
          {...formik.getFieldProps('phone')}
          />
          {formik.touched.phone && formik.errors.phone ? <p>{formik.errors.phone}</p> : null}
        {/* </div> */}

        {/* <div> */}
          <button 
            type='submit'
            >Checkout</button>
        {/* </div> */}
      </form>
  </div>

  )
}

export function BasketFooter(props) {
  return (
    <BuyForm cards= {props.cards}/>
  )
}
