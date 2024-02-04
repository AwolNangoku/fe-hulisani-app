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

const FinanceForm = () => {
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
              <InputLabel id="paymentStatus">Payment Status</InputLabel>
              <Select
                labelId="paymentStatus"
                id="paymentStatus"
                label="Payment Status"
                {...register("paymentStatus")}
              >
                {[{
                  label: "FULLY PAID",
                  value: "fully_paid"
                }, {
                  label: "HALF PAID",
                  value: "half_paid"
                }, {
                  label: "ONLY REGISTRATION",
                  value: "only_registration"
                },{
                  label: "NOT PAID",
                  value: "not_paid"
                }].map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
              </Select>
            </FieldControl>

            <FieldControl>
              <TextField
                id="id-number"
                label="Identity Number"
                error={errors?.idnumber ? true : false}
                helperText={errors?.idnumber ? "Identity number is required" : !errors.identity ? "" : "Enter Identity Number"}
                variant="standard"
                {...register("idnumber", { required: true })}
              />
            </FieldControl>

            <FieldControl>
              <TextField
                id="studentNumber"
                label="Student Number"
                error={errors?.studentNumber ? true : false}
                helperText={errors?.studentNumber ? "Student Number is Required" : !errors?.studentNumber ? "" : "Enter Student Number"}
                variant="standard"
                {...register("studentNumber", { required: true })}
              />
            </FieldControl>

            <FieldControl>
              <TextField
                id="quoteNumber"
                label="Quote Number"
                error={errors?.quoteNumber ? true : false}
                helperText={errors?.quoteNumber ? "Quote Number is Required" : !errors?.quoteNumber ? "" : "Enter Quote Number"}
                variant="standard"
                {...register("quoteNumber", { required: true })}
              />
            </FieldControl>

            <FieldControl>
              <TextField
                id="invoiceNumber"
                label="Invoice Number"
                error={errors?.invoiceNumber ? true : false}
                helperText={errors?.invoiceNumber ? "Invoice Number is Required" : !errors?.invoiceNumber ? "" : "Enter Invoice Number"}
                variant="standard"
                {...register("invoiceNumber", { required: true })}
              />
            </FieldControl>

            <FieldControl>
              <InputLabel id="completionStatus">Completion Status</InputLabel>
              <Select
                labelId="completionStatus"
                id="completionStatus"
                label="Completion Status"
                {...register("completionStatus")}
              >
                {[{
                  label: "DROP OUT",
                  value: "drop_out"
                }, {
                  label: "COMPLETED",
                  value: "completed"
                },{
                  label: "IN PROGRESS",
                  value: "in_progress"
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
export default FinanceForm