import { Stack, FormLabel, Typography } from "@mui/material"

interface RadioGroupControlProps {
  id: string
  label: string
  subtext: string
}

const RadioGroupControl = ({
  id,
  label,
  subtext
}: RadioGroupControlProps) => {
  return (
    <Stack width="100%" spacing="5px">
      <FormLabel id={id}>{label}</FormLabel>
      <Typography variant="subtitle2">
        {subtext}
      </Typography>
    <Stack p={.8} />
    </Stack>
  )
}
export default RadioGroupControl