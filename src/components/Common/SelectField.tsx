import React from 'react';
import Select from "react-select";

export const SelectField = ({options, field, form, value} : any) => 
{
  var fieldValue = field.value ?? undefined;
  var isFound = options?.find((option : any) => option.id === fieldValue);

  return(<Select
      options={options}
      name={field.name}
      value={isFound !== undefined ? isFound : null}
      onChange={(option: any) => form.setFieldValue(field.name, option.id)}
      onBlur={field.onBlur}
    />
  )
}