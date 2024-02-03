import { Stack } from "@mui/material"
import { PageLayout } from "../../components"
import { useParams } from "react-router-dom"
import Admin from "./admin"
import External from "./external"
import Finance from "./finance"
import AppChoices from "./app-choices"

const Applications = () => {
  const { choice } = useParams()

  return (
    <PageLayout>
      <Stack width="100%">
        <Stack p="20px" />
        {(() => {
          switch(choice) {
            case "admin":
              return (
                <Admin />
              )
            case "external":
              return (
                <External />
              )
            case "finance":
              return (
                <Finance />
              )
            default:
              return (
                <AppChoices />
              )
          }
        })()}
      </Stack>
    </PageLayout>
  )
}
export default Applications