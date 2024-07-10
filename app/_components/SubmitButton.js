"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLabel }) {
  // This hook here will know about the status of the form
  // const { pending, formData, method, action } = useFormStatus(); // full parameters, but the last three are not really useful
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

// the useFormStatus() hook must be used in a component thats rendered inside a form, thats why we created d Button() as a seperate component
// if we use a server action as the action prop of a form, "useFormStatus() hook" is the best way to know about the status. if no we use the useTransition Hook
