import React, { ReactNode } from "react";
import { Select, TextField } from "@mui/material";
import { useController, useForm, Control } from "react-hook-form";

interface Props {
    control: Control,
    name: string,
    label: string
}

export function TextInput({ control, name, label }: Props) {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return <TextField {...inputProps} inputRef={ref} label={label}/>;
}

export function SelectInput({ control, name, children, label }: Props & {children: ReactNode}) {
    const {
      field: { ref, ...inputProps },
      fieldState: { invalid, isTouched, isDirty },
      formState: { touchedFields, dirtyFields }
    } = useController({
      name,
      control,
      rules: { required: true },
      defaultValue: "",
    });
  
    return <Select {...inputProps} inputRef={ref} label={label}>{children}</Select>;
  }
