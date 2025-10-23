import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  TextInput,
  Button,
  Group,
  Box,
  Notification,
  Textarea,
  Paper,
  Loader,
  Flex,
  Input,
  VisuallyHidden,
  ButtonProps,
} from '@mantine/core';
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

import emailjs from '@emailjs/browser';
import { SavedColors } from '@shared/constants';
import styled from 'styled-components';
interface ExtendedButtonProps
  extends ButtonProps,
    Omit<React.ComponentProps<'button'>, 'color'|'style'> {
  type?: 'submit' | 'button' | 'reset';
}
const HoveredButton = styled(Button)<ExtendedButtonProps>`
    color: ${SavedColors.PrimaryWhite};
    border: 1px solid ${SavedColors.PrimaryWhite};
    background-color: transparent;
    transition: all 0.5s ease-in-out;

    &:hover{
        color: ${SavedColors.Primaryblue};
        background-color: ${SavedColors.PrimaryWhite};
    }
`

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm: React.FC = () => {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const sendEmail = async (data: ContactFormData) => {
    
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        subject: 'Form Message',
        reply_to: data.email,
      };

                const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                );

      return result;
    } catch (error) {
      console.error('Email sending failed:', error);
      throw new Error('Failed to send email. Please try again later.');
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    
    try {
      await sendEmail(data);
      
      setShowSuccess(true);
      setShowError(false);
      reset();
      
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      setShowError(true);
      setShowSuccess(false);
      
      setTimeout(() => {
        setShowError(false);
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <Flex p={{base:'20px',lg:'20px'}} w={{base:'100%',lg:'80%'}} bg={SavedColors.Primaryblue} style={{ borderRadius: '5px' }}>
      <Box component="form" w="100%" onSubmit={handleSubmit(onSubmit)}>
        <VisuallyHidden>
          <label htmlFor="name">Your Name</label>
          <label htmlFor="email">Your Email</label>
          <label htmlFor="phone">Your Phone</label>
          <label htmlFor="message">Your Message</label>
        </VisuallyHidden>

        {showSuccess && (
          <Notification
            icon={<IoMdCheckmark size="1.1rem" />}
            color="teal"
            title="Success!"
            onClose={() => setShowSuccess(false)}
            mb="md"
          >
            Your message has been sent successfully! We'll get back to you soon.
          </Notification>
        )}

        {showError && (
          <Notification
            icon={<IoCloseSharp size="1.1rem" />}
            color="red"
            title="Error!"
            onClose={() => setShowError(false)}
            mb="md"
          >
            {errorMessage}
          </Notification>
        )}

        <TextInput
          placeholder="Enter your full name"
          {...register('name')}
          error={errors.name?.message}
          required
          mb="lg"
          size="sm"
          id="name"
        />

        <TextInput
          placeholder="Enter your email address"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          required
          mb="lg"
          size="sm"
          id="email"
        />

        <TextInput
          placeholder="Enter your phone number"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          required
          mb="lg"
          size="sm"
          id="phone"
        />

        <Textarea
          placeholder="Please describe your inquiry in detail..."
          rows={5}
          {...register('message')}
          error={errors.message?.message}
          required
          mb="xl"
          size="sm"
          id="message"
        />

          <HoveredButton
            type="submit"
            size="sm"
            loading={isSubmitting}
            disabled={isSubmitting}
            leftSection={isSubmitting ? <Loader size="sm" /> : <CiMail size={18} />}
            fullWidth
            variant="outline"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </HoveredButton>
      </Box>
    </Flex>
  );
};

export default ContactForm;