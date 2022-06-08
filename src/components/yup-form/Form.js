import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Form({
  defaultValues = {},
  children,
  schema,
  className,
  onSubmit,
}) {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          onSubmit(data, methods.reset);
        })}
        className={className}
      >
        {children}
      </form>
    </FormProvider>
  );
}

// onClick={handleSubmit((data) => {
//   onClick(data, reset);
// })}
