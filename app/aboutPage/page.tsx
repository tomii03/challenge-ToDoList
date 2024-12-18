"use client";
import React from "react";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg relative">
      <h1 className="text-4xl font-bold mb-4">Acerca de</h1>
      <p>
        Bienvenido a nuestra aplicación de To-Do List. Esta app está diseñada
        para ayudarte a organizar tus tareas y mejorar tu productividad. Hemos
        creado esta herramienta con la intención de ofrecerte la mejor
        experiencia posible, implementando tecnologías modernas como Next.js y
        TypeScript.
      </p>
      <button
        className="mt-6 bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 "
        onClick={() => router.back()}
      >
        Volver
      </button>
    </div>
  );
};

export default AboutPage;
