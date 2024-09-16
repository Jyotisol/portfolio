'use client'

import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "@/components/ui/api";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { BackgroundBeams } from '@/components/ui/Background-beams'

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface State {
  isLoading: boolean;
  error: string;
  values: FormValues;
}

const initValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState: State = {
  isLoading: false,
  error: "",
  values: initValues,
};

const GmailConnect: React.FC = () => {
  const toast = useToast();
  const [state, setState] = useState<State>(initState);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const { values, isLoading, error } = state;

  const onBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [event.target.name]: true }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: "Something went wrong",
      }));
    }
  };

  return (
    <>
    <div>
      <BackgroundBeams/>
    </div>
    <Container maxW="450px" mt={12} bg="#000319" color="white" p={6} borderRadius="md" boxShadow='2xl'>
      <Heading>Contact</Heading>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
          className="relative z-20"
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          className="relative z-20"
          type="email"
          name="email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.subject && !values.subject}
      >
        <FormLabel>Subject</FormLabel>
        <Input
          className="relative z-20"
          type="text"
          name="subject"
          errorBorderColor="red.300"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb={5}
      >
        <FormLabel>Message</FormLabel>
        <Textarea
          className="relative z-20"
          name="message"
          rows={4}
          errorBorderColor="red.300"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <Button
        className="relative z-20"
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !values.name || !values.email || !values.subject || !values.message
        }
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Container>
    </>
  );
};

export default GmailConnect;
