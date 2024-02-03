import { Stack, Typography } from "@mui/material"

const Admin = () => {
  return (
    <Stack spacing={3} width="100%" bgcolor="white" justifyContent="center" alignItems="center">
      <Stack p={1} />
      <Stack width="100%" justifyContent="center" alignItems="center">
      <Typography variant="h6">
        ADMIN APPLICATION FROM
      </Typography>
      <Typography variant="body1">
        *Please complete all sections of this application form in full(in complete application will not be processed)
      </Typography>
      </Stack>

      <Stack width="100%" bgcolor="red">
        Form here
      </Stack>
      
    </Stack>
  )
}
export default Admin