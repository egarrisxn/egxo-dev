'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema, type FormData } from '@/lib/schemas'
import { toast } from '@/components/ui/sonner'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

async function sendEmail(data: FormData) {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })

    const response = await res.json()

    if (res.ok) {
      toast.success(response.message || 'Email sent successfully!')
    } else {
      toast.error(response.error || 'Something went wrong.')
    }
  } catch (err) {
    toast.error(`Failed to send email: ${err}`)
  }
}

export default function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
    mode: 'onSubmit',
  })

  const onSubmit = async (data: FormData) => {
    await sendEmail(data)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1.5">
        <div className="flex flex-col gap-1.5 md:flex-row md:gap-3.5">
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    placeholder="Jane Doe"
                    aria-label="Name"
                    className="flex h-9 w-full min-w-0 rounded-md border border-input bg-card/70 px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-card file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="email"
                    placeholder="your@email.com"
                    aria-label="Email"
                    className="flex h-9 w-full min-w-0 rounded-md border border-input bg-card/70 px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-card file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  placeholder="Insert message here.."
                  aria-label="Message"
                  className="flex field-sizing-content min-h-32 w-full rounded-md border border-input bg-card/70 px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="group mt-1 inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border bg-card/70 py-3 pr-5 pl-4.5 text-[0.9rem] leading-[1.4] font-medium text-foreground shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 xl:mt-0 dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
        >
          {form.formState.isSubmitting ? (
            'Sending...'
          ) : (
            <span className="inline-flex items-center gap-1">
              Send Message
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5 size-3 transition-all duration-300 ease-out group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
            </span>
          )}
        </button>
      </form>
    </Form>
  )
}
