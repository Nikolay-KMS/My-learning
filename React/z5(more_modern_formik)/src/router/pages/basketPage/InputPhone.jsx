
import { PatternFormat } from "react-number-format";

export const InputPhone= ({field, ...props})=> {
  return (
    <div>
      <PatternFormat
        {...field}
        format="+380 (##) ### ## ##" allowEmptyFormatting
        mask="_"
      />
    </div>
  )
}
