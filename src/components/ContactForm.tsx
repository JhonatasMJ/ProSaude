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
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/schemas/contactForm";

export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = async (data: ContactFormLabels) => {
    setStatus("sending");

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
      setStatus("sent");
/* Seta o botao enviado */
     
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("❌ Erro ao enviar:", error);
      setStatus("idle");
      /* Seta o botao inativo */
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 "
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold mt-8 !text-foreground">
                  Nome Completo<span className="text-marca1">.</span>
                </FormLabel>
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
                <FormLabel className="text-xl font-bold !text-foreground">
                  E-mail<span className="text-marca1">.</span>
                </FormLabel>
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
                <FormLabel className="text-xl font-bold !text-foreground">
                  Mensagem<span className="text-marca1">.</span>
                </FormLabel>
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

          <Button
            type="submit"
            className={`w-full py-6 text-md relative overflow-hidden transform transition duration-300 border-none text-white ${
              status === "sent"
                ? "bg-marca1 hover:bg-marca1 hover:ring-3 hover:ring-marca1/50 hover:scale-[1.02]"
                : "bg-marca2 hover:bg-marca2 hover:ring-3 hover:ring-marca2/50 hover:scale-[1.02]"
            }`}
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Enviando..."
              : status === "sent"
              ? "Enviado ✅"
              : "Enviar Mensagem"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
