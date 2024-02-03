import { Stack } from "@mui/material"
import Button from '@mui/material/Button';
import { NavBarLink } from '../../../components';
import { generatePath } from "react-router-dom";

const AppChoices = () => {
  return (
    <Stack width="100%" gap="20px">
      <Button
        variant="contained"
      >
        <NavBarLink
          to={generatePath("/applications/:choice", { choice: "admin" })}
          title="Admin application"
        />
      </Button>

      <Button
        variant="contained"
      >
        <NavBarLink
          to={generatePath("/applications/:choice", { choice: "external" })}
          title="External application"
        />
      </Button>

      <Button
        variant="contained"
      >
        <NavBarLink
          to={generatePath("/applications/:choice", { choice: "finance" })}
          title="Finance application"
        />
      </Button>
    </Stack>
  )
}
export default AppChoices