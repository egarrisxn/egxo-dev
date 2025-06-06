import * as React from 'react'
import {Controller, FormProvider, useFormContext} from 'react-hook-form'
import {Slot} from '@radix-ui/react-slot'
import clsx from 'clsx'
import styles from './form.module.css'

const Form = FormProvider
const FormFieldContext = React.createContext({})

const FormField = ({...props}) => {
  return (
    <FormFieldContext.Provider value={{name: props.name}}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const {getFieldState, formState} = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const {id} = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

const FormItemContext = React.createContext({})

const FormItem = React.forwardRef(({className, ...props}, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{id}}>
      <div ref={ref} className={clsx(styles['context'], className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef(({className, ...props}, ref) => {
  const {error, formItemId} = useFormField()

  return (
    <label
      ref={ref}
      className={clsx(error && styles['label'], className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef(({...props}, ref) => {
  const {error, formItemId, formDescriptionId, formMessageId} = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = 'FormControl'

const FormDescription = React.forwardRef(({className, ...props}, ref) => {
  const {formDescriptionId} = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={clsx(styles['description'], className)}
      {...props}
    />
  )
})
FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef(({className, children, ...props}, ref) => {
  const {error, formMessageId} = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p ref={ref} id={formMessageId} className={clsx(styles['message'], className)} {...props}>
      {body}
    </p>
  )
})
FormMessage.displayName = 'FormMessage'

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
