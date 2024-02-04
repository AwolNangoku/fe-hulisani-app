import { Stack, Radio, Typography} from "@mui/material"
import { useFormContext } from "react-hook-form"

interface RadioFieldProps {
  radioGroupLabel: string
  filedValue: string
  leftLabel: string
  rightLabel: string
}

const RadioField = ({
  radioGroupLabel,
  filedValue,
  leftLabel,
  rightLabel
}: RadioFieldProps) => {
  const { register } = useFormContext()
  return (
    <Stack
      width="100%"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap={30}
    >
      <Stack width="50%" flexDirection="row" justifyContent="baseline" alignItems="center">
        <Radio
          {...register(radioGroupLabel)}
          value={filedValue}
          id={radioGroupLabel}
        />
        <Typography variant="subtitle2">
          {leftLabel}
        </Typography>
      </Stack>
      <Stack width="50%">
        <Typography variant="subtitle2">
          {rightLabel}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default RadioField