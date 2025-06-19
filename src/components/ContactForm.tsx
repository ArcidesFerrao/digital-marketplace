"use client";

import { sendMessage } from "@/app/actions/sendMessage";
import { messageSchema } from "@/schemas/messageSchema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import React, { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

export const ContactForm = () => {
  const [state, action, pending] = useActionState(sendMessage, undefined);

  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: messageSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  useEffect(() => {
    if (state?.status === "success" && state.message) {
      toast.success(state.message, {
        style: {
          border: "1px solid var(--hover)",
          padding: "1rem",
          color: "var(--accent)",
        },
      });
    }
  }, [state]);

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="contact-form flex flex-col justify-between min-w-96 gap-8 p-10"
    >
      <section className="header">
        <h2 className="text-4xl font-medium">Contact Us</h2>
      </section>
      <div className="full-name flex  gap-4">
        <input type="text" name="nome" id="nome" placeholder="Nome" required />

        <input
          type="text"
          name="apelido"
          id="apelido"
          placeholder="Apelido"
          required
        />
      </div>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        className="w-full"
        required
      />
      {fields.email.errors && <p>{fields.email.errors}</p>}
      <input
        type="text"
        name="assunto"
        id="assunto"
        placeholder="Assunto"
        className="w-full"
      />
      <textarea
        className="flex w-full rounded-sm"
        name="mensagem"
        id="mensagem"
        placeholder="Em que podemos ajudar?"
        required
      ></textarea>
      <input
        type="submit"
        value={pending ? "Enviando..." : "Enviar Mensagem"}
        id="enviar"
      />
    </form>
  );
};
