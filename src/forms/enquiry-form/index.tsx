import { 
  Stack, 
  TextField, 
  Button, 
  InputLabel, 
  Select, 
  MenuItem
} from "@mui/material"
import { FieldValues, FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { FieldControl } from "../controls"

const EnquiryFrom = () => {
  const methods = useForm()
  const { register, handleSubmit, formState: { errors } } = methods
  const navigate = useNavigate()
  
  const submitForm = (data: FieldValues) => {
    console.log('Submitting values....', data)
  }

  const onCancel = () => {
    navigate("/applications", { replace: true })
  }

  return (
    <FormProvider {...methods}>
      <Stack width="100%" p={5} justifyContent="center" alignItems="center">
        <form style={{ width: "100%" }} onSubmit={handleSubmit(submitForm)}>
          <Stack width="100%" spacing={5} justifyContent="center" alignItems="center">
            <FieldControl>
              <TextField
                id="first-name"
                label="First Name"
                error={errors?.firstname ? true : false}
                helperText={errors?.firstname ? "First name is required" : !errors?.firstname ? "" : "Enter First Name"}
                variant="standard"
                {...register("firstname", { required: true })}
              />
            </FieldControl>

            <FieldControl>
              <TextField
                id="last-name"
                label="Last Name"
                error={errors?.lastname ? true : false}
                helperText={errors?.lastname ? "Last name is required" : !errors?.lastname ? "" : "Enter Last Name"}
                variant="standard"
                {...register("lastname", { required: true })}
              />
            </FieldControl>

            <FieldControl>
              <TextField
                id="contact"
                label="Contact Number"
                error={errors?.contactNumber ? true : false}
                helperText={errors?.contactNumber ? "Contact number is required" : !errors?.contactNumber ? "" : "Enter Contact number"}
                variant="standard"
                {...register("contactNumber", { required: true })}
              />
            </FieldControl>

            <FieldControl>
              <TextField
                id="email"
                type="email"
                label="Email Address"
                error={errors?.email ? true : false}
                helperText={errors?.email ? "Email is required" : !errors?.email ? "" : "Enter Email Address"}
                variant="standard"
                {...register("email", { required: true })}
              />
            </FieldControl>

            <FieldControl>
              <InputLabel id="enquiryType">Enquiry Type</InputLabel>
              <Select
                labelId="enquiryType"
                id="enquiryType"
                label="Enquiry Type"
                {...register("enquiryType")}
              >
                {[{
                  label: "PRISA TRAINING UPGRADE",
                  value: "prisa_training_upgrade"
                }, {
                  label: "APPLICATION RELATED QUERRIES",
                  value: "application_related_querries"
                }, {
                  label: "TRAININGT ENQUIRY",
                  value: "training_enquiry"
                }, {
                  label: "TRAINING RESULTS ENQUIRY",
                  value: "training_results_enquiry"
                }, {
                  label: "PAYMENT ENQUIRY",
                  value: "payment_enquiry"
                }].map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
              </Select>
            </FieldControl>
          </Stack>

          <Stack p={4} />

          <Stack width="100%" flexDirection="row" gap={10} justifyContent="center" alignItems="center">
            <Stack width="20%">
              <Button
                type="button"
                variant="outlined"
                onClick={onCancel}
              >
                Cancel
              </Button>
            </Stack>

            <Stack width="20%">
              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </FormProvider>
  )
}
export default EnquiryFrom