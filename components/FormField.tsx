import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file";
}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input
            {...field} // Bind react-hook-form field properties
            className="input"
            placeholder={placeholder}
            type={type}
            aria-invalid={fieldState.invalid ? "true" : "false"}
            aria-describedby={`${name}-error`}
          />
        </FormControl>
        <FormDescription></FormDescription>
        <FormMessage id={`${name}-error`} />
      </FormItem>
    )}
  />
);

export default FormField;
