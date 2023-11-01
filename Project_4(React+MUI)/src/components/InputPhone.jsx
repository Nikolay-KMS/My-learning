
import { PatternFormat } from "react-number-format";

export const InputPhone= ({field, ...props})=> {
  return (
    <div>
      <label htmlFor={field.name}>{props.label}</label>
      <PatternFormat
        {...field}
        id={field.name}
        format="+380 (##) ### ## ##" allowEmptyFormatting
        mask="_"
      />
    </div>
  )
}
