'use client'

import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {sendEmail} from '@/lib/send-email'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '../form'
import Input from '../input'
import Textarea from '../textarea'
import styles from './contactform.module.css'

const formSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(500),
})

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const {handleSubmit} = form

  function onSubmit(data) {
    sendEmail(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormField
          control={form.control}
          name='name'
          render={({field}) => (
            <FormItem>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <FormControl>
                <Input
                  className={styles.input}
                  placeholder='Jane Doe'
                  aria-label='Name input'
                  type='text'
                  id='name'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({field}) => (
            <FormItem>
              <FormLabel htmlFor='email'>Email Address</FormLabel>
              <FormControl>
                <Input
                  className={styles.input}
                  placeholder='your@email.com'
                  aria-label='Email input'
                  type='email'
                  id='email'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({field}) => (
            <FormItem>
              <FormLabel htmlFor='message'>Message</FormLabel>
              <FormControl>
                <Textarea
                  className={styles.textarea}
                  placeholder='Hit me with your best shot!'
                  aria-label='Message input'
                  id='message'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type='submit' className={styles.button}>
          Send
        </button>
      </form>
    </Form>
  )
}
