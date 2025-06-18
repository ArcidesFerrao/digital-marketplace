import React from "react";

export const ContactForm = () => {
  return (
    <form
      //   onSubmit={handleSubmit}
      className="contact-form flex flex-col justify-between min-w-96 gap-8 p-10"
    >
      <section className="header">
        <h2 className="text-4xl font-medium">Contact Us</h2>
      </section>
      <div className="full-name flex  gap-4">
        <input type="text" name="name" id="name" placeholder="Nome" required />

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
        // value={isSending ? "Enviando..." : "Enviar Mensagem"}
        id="enviar"
      />
    </form>
  );
};
