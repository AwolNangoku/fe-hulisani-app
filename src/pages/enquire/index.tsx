import { Stack, Typography } from "@mui/material"
import { PageLayout } from "../../components"
import { EnquiryFrom } from "../../forms"

const Enquire = () => {
  return (
    <PageLayout>
      <Stack width="100%">
        <Stack p="20px" />
        <Stack spacing={3} width="100%" bgcolor="white" justifyContent="center" alignItems="center">
          <Stack p={1} />
          <Stack width="100%" justifyContent="center" alignItems="center">
            <Typography variant="h6">
              ENQUIRY FROM
            </Typography>
            <Typography variant="body1">
              *Please complete all sections of this form to submit an enquiry
            </Typography>
          </Stack>

          <EnquiryFrom />
          <Stack p={1} />
        </Stack>
      </Stack>
    </PageLayout>
  )
}
export default Enquire