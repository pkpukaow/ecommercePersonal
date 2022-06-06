import React from "react";
import { useFormContext } from "react-hook-form";

const SubmitButton = ({ className, onClick, children = false }) => {
  const { handleSubmit, reset } = useFormContext();
  return (
    <button
      className={className}
      onClick={handleSubmit((data) => {
        onClick(data, reset);
      })}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
