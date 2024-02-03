import { Stack, TextField, Button, Typography } from "@mui/material"
import { FieldValues, useForm } from "react-hook-form"

const AdminFrom = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const submitForm = (data: FieldValues) => {
    console.log('Submitting values....', data)
  }

  return (
    <Stack width="100%" p={5} justifyContent="center" alignItems="center">
      <form style={{ width: "100%" }} onSubmit={handleSubmit(submitForm)}>
        <Stack width="100%" flexDirection="row" gap={10}>
          <Stack width="50%">
            <TextField
              id="first-name"
              label="First Name"
              error={errors?.firstname ? true : false}
              helperText={errors?.firstname ? "First name is required" : !errors?.firstname ? "" : "Enter First Name"}
              variant="standard"
              {...register("firstname", { required: true })}
            />
          </Stack>

          <Stack width="50%">
            <TextField
              id="last-name"
              label="Last Name"
              error={errors?.lastname ? true : false}
              helperText={errors?.lastname ? "Last name is required" : !errors?.lastname ? "" : "Enter Last Name"}
              variant="standard"
              {...register("lastname", { required: true })}
            />
          </Stack>
        </Stack>
        
        <Stack p={2} />

        <Stack width="100%" flexDirection="row" gap={10}>
          <Stack width="50%">
            <TextField
              id="id-number"
              label="Identity Number"
              error={errors?.idnumber ? true : false}
              helperText={errors?.idnumber ? "Identity number is required" : "Enter Identity Number"}
              variant="standard"
              {...register("idnumber", { required: true })}
            />
          </Stack>

          <Stack width="50%">
            <TextField
              id="contact"
              label="Contact Number"
              error={errors?.contactNumber ? true : false}
              helperText={errors?.contactNumber ? "Contact number is required" : "Enter Contact number"}
              variant="standard"
              {...register("contactNumber", { required: true })}
            />
          </Stack>
        </Stack>

        <Stack p={2} />

        <Stack width="100%">
          <Typography variant="h6">
            Physical address
          </Typography>
        </Stack>

        <Stack p={2} />

        <Stack width="100%" flexDirection="row" gap={10} justifyContent="center" alignItems="center">
          <Stack width="30%">
            <Button type="button" variant="outlined">Back</Button>
          </Stack>

          <Stack width="30%">
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  )
}
export default AdminFrom