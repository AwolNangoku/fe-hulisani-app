import { Stack } from "@mui/material"

interface FormControlProps {
  children: React.ReactNode
}

const FormControl = ({ children }: FormControlProps) => {
  return (
    <Stack width="100%" flexDirection={["column", "row"]} gap={10}>
      {children}
    </Stack>
  )
}
export default FormControl