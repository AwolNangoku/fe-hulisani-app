import { 
  Stack, 
  TextField, 
  Button, 
  InputLabel, 
  Select, 
  MenuItem, 
  Divider, 
  RadioGroup
} from "@mui/material"
import { format } from 'date-fns'
import { FieldValues, FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import FormControl from "../controls/form-control"
import { FieldControl, RadioGroupControl } from "../controls"
import { RadioField } from "../fields"

const ExternalFrom = () => {
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
              <InputLabel id="applicationDate">Application Date</InputLabel>
              <TextField
                type="date"
                min={format(new Date(), 'yyyy-LL-dd')}
                error={errors?.applicationDate ? true : false}
                helperText={errors?.applicationDate ? "Application Date is Required" : !errors?.applicationDate ? "" : "Select Application Date"}
                {...register("applicationDate", { required: true })}
                id="applicationDate"
              />
            </FieldControl>

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
                id="id-number"
                label="Identity Number"
                error={errors?.idnumber ? true : false}
                helperText={errors?.idnumber ? "Identity number is required" : !errors.identity ? "" : "Enter Identity Number"}
                variant="standard"
                {...register("idnumber", { required: true })}
              />
            </FieldControl>
          </Stack>

            <Stack p={4} />
              <Divider sx={{ border: "gray solid 1px" }}/>
              <Stack p={1} />
            <Stack>
            <FormControl>
              <FieldControl>
                <RadioGroupControl
                  id="course1"
                  label="COURSE 1"
                  subtext="PRISA GRADES"
                />

                <RadioGroup
                  aria-labelledby="course1"
                  name="course1"
                >
                  <RadioField
                    radioGroupLabel="course1"
                    filedValue="gradeA"
                    leftLabel="Grade A"
                    rightLabel="R1000"
                  />

                  <RadioField
                    radioGroupLabel="course1"
                    filedValue="gradeB"
                    leftLabel="Grade B"
                    rightLabel="R1000"
                  />

                  <RadioField
                    radioGroupLabel="course1"
                    filedValue="gradeECD"
                    leftLabel="Grade ECD"
                    rightLabel="R1900"
                  />

                  <RadioField
                    radioGroupLabel="course1"
                    filedValue="gradeEDCBA"
                    leftLabel="Grade EDCBA"
                    rightLabel="R4000"
                  />
                </RadioGroup>
              </FieldControl>
            </FormControl>

            <Stack p={1} />
            <Divider sx={{ border: "gray solid 1px" }}/>
            <Stack p={1} />

            <FormControl>
              <FieldControl>
                <RadioGroupControl
                  id="course2"
                  label="COURSE 2"
                  subtext="FIRE ARM TRAINING AND COMPETANCY"
                />

                <RadioGroup
                  aria-labelledby="course2"
                  name="course2"
                >
                  <RadioField
                    radioGroupLabel="course2"
                    filedValue="oneFireArm"
                    leftLabel="ONE FIRE ARM"
                    rightLabel="R1860"
                  />

                  <RadioField
                    radioGroupLabel="course2"
                    filedValue="twoFireArm"
                    leftLabel="TWO FIRE ARM"
                    rightLabel="R3500"
                  />

                  <RadioField
                    radioGroupLabel="course2"
                    filedValue="allThreeFireArm"
                    leftLabel="ALL THREE FIRE ARM"
                    rightLabel="R4500"
                  />

                  <RadioField
                    radioGroupLabel="course2"
                    filedValue="oneFireArmForBusiness"
                    leftLabel="ONE FIRE ARM FOR BUSINESS"
                    rightLabel="R2500"
                  />
                  
                  <RadioField
                    radioGroupLabel="course2"
                    filedValue="twoFireArmForBusiness"
                    leftLabel="TWO FIRE ARM FOR BUSINESS"
                    rightLabel="R4500"
                  />

                  <RadioField
                    radioGroupLabel="course2"
                    filedValue="allThreeFireArmForBusiness"
                    leftLabel="ALL THREE FIRE ARM FOR BUSINESS"
                    rightLabel="R6000"
                  />
                </RadioGroup>
              </FieldControl>
            </FormControl>

            <Stack p={1} />
            <Divider sx={{ border: "gray solid 1px" }}/>
            <Stack p={1} />

            <FormControl>
              <FieldControl>
                <RadioGroupControl
                  id="course3"
                  label="COURSE 3"
                  subtext="COMBO TRAINING"
                />

                <RadioGroup
                  aria-labelledby="course3"
                  name="course3"
                >
                  <RadioField
                    radioGroupLabel="course3"
                    filedValue="fireArmForPrivateAndBusiness"
                    leftLabel="1 FIRE ARM FOR PRIVATE & 1 FIRE ARM FOR BUSINESS"
                    rightLabel="R5500"
                  />

                  <RadioField
                    radioGroupLabel="course3"
                    filedValue="handGunAndRifleForPrivatePurpose"
                    leftLabel="HAND GUN FOR PRIVATE PURPOSE"
                    rightLabel="R3000"
                  />

                  <RadioField
                    radioGroupLabel="course3"
                    filedValue="handGunAndRifleForBusinessPurpose"
                    leftLabel="HAND GUN FOR BUSINESS PURPOSE"
                    rightLabel="R4000"
                  />
                </RadioGroup>
              </FieldControl>
            </FormControl>

            <Stack p={1} />
            <Divider sx={{ border: "gray solid 1px" }}/>
            <Stack p={1} />

            <FormControl>
              <FieldControl>
                <RadioGroupControl
                  id="course4"
                  label="COURSE 4"
                  subtext="SASSETA ACCREDITED TRAINING"
                />

                <RadioGroup
                  aria-labelledby="course4"
                  name="course4"
                >
                  <RadioField
                    radioGroupLabel="course4"
                    filedValue="nationaCertificateGeneralSecurityPractiseLevel2"
                    leftLabel="NATIONAL CERTIFICATE GENERAL SECURITY PRACTICES NCG LEVEL 2 ID(58572)"
                    rightLabel="R10060"
                  />

                  <RadioField
                    radioGroupLabel="course4"
                    filedValue="skillsProgramOnePatrolSecurityOfficer"
                    leftLabel="SKILLS PROGRAM 1 | PATROL SECURITY OFFICER"
                    rightLabel="R3000"
                  />

                  <RadioField
                    radioGroupLabel="course4"
                    filedValue="skillsProgramTwoAccessControlSecurityOfficer"
                    leftLabel="SKILLS PROGRAM 1 | PATROL CONTROL SECURITY OFFICER"
                    rightLabel="R3000"
                  />

                  <RadioField
                    radioGroupLabel="course4"
                    filedValue="skillsProgramThreeAssetAndReactionSecurityOfficer"
                    leftLabel="SKILLS PROGRAM 1 | ASSET AND REACTION SECURITY OFFICER"
                    rightLabel="R3000"
                  />
                </RadioGroup>
              </FieldControl>
            </FormControl>
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
export default ExternalFrom