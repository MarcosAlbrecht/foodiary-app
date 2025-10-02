import z from "zod";

export const signUpSchema = z.object({
  goal: z.enum(["lose", "maintain", "gain"]),
  birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
