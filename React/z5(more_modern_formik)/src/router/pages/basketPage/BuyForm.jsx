
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Input } from "./Input";
import { InputPhone } from "./InputPhone";


export const BuyForm = (props) => {
  const cards = props.cards;

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
    .max(10, 'Must be 10 characters or less')
    .min(2, 'Must be 2 characters or more')
    .required('Required'),
    lastName: Yup.string()
      .max(10, 'Must be 10 characters or less')
      .min(2, 'Must be 2 characters or more')
      .required('Required'),
    age: Yup.number()
      .required('Required')
      .min(10, "Too little")
      .max(100, 'Too much!')
      .integer('Must be integer')
    ,
    adress: Yup.string()
      .max(100, 'Must be 100 characters or less')
      .min(2, 'Must be 2 characters or more')
      .required('Required'),
    phone: Yup.string().test('Underscore-check', 'Please enter all your phone numbers',
      (value) => {
        return value ? !value.includes('_') : false;
      }),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        age: '',
        adress: '',
        phone: '',
      }}

      validationSchema={validationSchema}

      onSubmit={(values) => {
        console.log('User information:', values);
        console.log('Purchased items:', cards);
        localStorage.removeItem('basket');

        values.firstName= '';
        values.lastName= '';
        values.age= '';
        values.adress= '';
        values.phone= '';
      }}
    >
      <Form>
        <Field name='firstName' type="text" label='First Name' component={Input} />
        <ErrorMessage name='firstName' />

        <Field name='lastName' type='text' component={Input} />
        <ErrorMessage name='lastName' />

        <Field name='age' type='number' component={Input} />
        <ErrorMessage name='age' />

        <Field name='adress' type='text' component={Input} />
        <ErrorMessage name='adress' />

        <Field
          name="phone"
          type="text"
          component={InputPhone}
        />
        <ErrorMessage name='phone' />

        <button type='submit'>Checkout</button>
      </Form>
    </Formik>
  )
}