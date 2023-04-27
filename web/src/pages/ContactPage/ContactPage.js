import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit} className="form" config={{ mode: 'onBlur' }}>
        <TextField name="name" validation={{ required: true }} />
        <FieldError name="name" className="error" />
        <TextField name="email" validation={{ required: true }} />
        <FieldError name="email" className="error" />
        <TextAreaField name="message" validation={{ required: true }} />
        <FieldError name="message" className="error" />
        <Submit>Send Message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
