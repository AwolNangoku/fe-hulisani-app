import { Stack } from "@mui/material"

interface FieldControlProps {
  children?: React.ReactNode
}

const FieldControl = ({ children }: FieldControlProps) => {
  return (
    <Stack width={["100%", "50%"]}>
      {children}
    </Stack>
  )
}
export default FieldControl