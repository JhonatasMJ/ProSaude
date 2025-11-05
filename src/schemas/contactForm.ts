import {z} from "zod";

export const contactFormSchema = z.object({
    username: z.string().trim().min(2, "O nome é obrigatório"),
    email: z.string().trim().min(1, 'O e-mail é obrigatório').email("E-mail inválido"),
    message: z.string().trim().min(1, "A mensagem é obrigatória"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>;