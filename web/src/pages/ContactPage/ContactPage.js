import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
      name
      message
    }
  }
`

const ContactPage = () => {
  const [create] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('thanks for submitting')
    },
  })

  const onSubmit = (data) => {
    create({
      variables: {
        input: data,
      },
    })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Toaster />
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
