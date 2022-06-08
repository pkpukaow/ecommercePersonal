import React from "react";
import { useFormContext } from "react-hook-form";

const SubmitButton = ({ className, onClick, children = false }) => {
  const { handleSubmit, reset } = useFormContext();
  return (
    <button type="submit" className={className}>
      {children}
    </button>
  );
};

export default SubmitButton;
