import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import emailjs from "emailjs-com";
import { useState } from "react";
import type ContactFormLabels from "@/types/ContactFormLabels";

export default function ContactForm() {
  const form = useForm<ContactFormLabels>({
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: ContactFormLabels) => {
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        "service_154alse",
        "template_jh2rgnl",
        {
          from_name: data.username,
          from_email: data.email,
          message: data.message,
        },
        "Bqm1lwWlI0m7jkD3I"
      );

      form.reset();
      console.log("✅ Enviado com sucesso:", result.text);
    } catch (error) {
      console.error("❌ Erro ao enviar:", error);
      alert("Erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-2/4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

         
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Digite sua mensagem..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
