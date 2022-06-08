import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

function SelectorYup({
  name,
  containerClassname,
  className,
  defaultValue,
  data = [],
  ...props
}) {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className={containerClassname}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <>
              <label className="form-label font-semibold">{name}</label>
              <select
                defaultValue={defaultValue}
                className={className}
                value={value}
                onChange={onChange}
                {...props}
              >
                {data.map((el, idx) => {
                  return (
                    <option key={idx} value={el.value}>
                      {el.label}
                    </option>
                  );
                })}
              </select>
            </>
          );
        }}
        name={name}
      />
      {errors[name] && (
        <div className="is-invalid text-danger">{errors[name].message}</div>
      )}
    </div>
  );
}

export default SelectorYup;
