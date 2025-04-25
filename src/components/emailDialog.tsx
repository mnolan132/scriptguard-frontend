import { useRef, useState } from "react";
import {
  Button,
  CloseButton,
  Dialog,
  Field,
  IconButton,
  Input,
  Portal,
  Textarea,
  VStack,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { useForm } from "react-hook-form";
import { TfiEmail } from "react-icons/tfi";
import emailjs from "@emailjs/browser";

const EMAIL_SERVICE = import.meta.env.VITE_EMAIL_SERVICE;
const EMAIL_TEMPLATE = import.meta.env.VITE_EMAIL_TEMPLATE;
const EMAIL_TOKEN = import.meta.env.VITE_EMAIL_TOKEN;


type FormValues = {
  name: string;
  email: string;
  title: string;
  message: string;
};

export const EmailDialog = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSendEmail = () => {
    if (!form.current) return;
    setLoading(true);
    emailjs
      .sendForm(
        `${EMAIL_SERVICE}`,
        `${EMAIL_TEMPLATE}`,
        form.current,
        `${EMAIL_TOKEN}`
      )
      .then(
        () => {
          toaster.success({
            title: "Success!",
            description:
              "Your email has been sent, Matthew will get back to you soon!",
          });
          setLoading(false);
          reset();
          setIsOpen(false);
        },
        (error) => {
          toaster.error({
            title: "Error",
            description: error.text,
          });
          setLoading(false);
        }
      );
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={({ open }) => setIsOpen(open)}>
      <Flex justify="flex-end" width="100%">
        <Dialog.Trigger asChild>
          <IconButton
            width="200px"
            colorPalette={"teal"}
            rounded={"full"}
            variant={"outline"}
            aria-label="Contact"
          >
            {loading ? <Spinner /> : <TfiEmail />}
          </IconButton>
        </Dialog.Trigger>
      </Flex>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Contact</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              <form ref={form} onSubmit={handleSubmit(onSendEmail)}>
                <VStack gap={4}>
                  <Field.Root invalid={!!errors.name}>
                    <Field.Label>Name</Field.Label>
                    <Input
                      {...register("name", { required: "Name is required" })}
                    />
                    <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root invalid={!!errors.email}>
                    <Field.Label>Email</Field.Label>
                    <Input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                    />
                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root invalid={!!errors.title}>
                    <Field.Label>Subject</Field.Label>
                    <Input
                      {...register("title", {
                        required: "Subject is required",
                      })}
                    />
                    <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root invalid={!!errors.message}>
                    <Field.Label>Message</Field.Label>
                    <Textarea
                      resize="vertical"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
                  </Field.Root>

                  <Button type="submit" colorScheme="blue" width="full">
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton position="absolute" top={2} right={2} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
