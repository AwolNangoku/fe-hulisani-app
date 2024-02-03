import { Stack } from "@mui/material"
import Button from '@mui/material/Button';
import NavBarLink from "../nav-bar-link";

const AppNav = () => {
  return (
    <Stack width="100%" flexDirection="row" justifyContent="center" alignItems="center" gap="10px">
      <Button
        variant="contained"
      >
        <NavBarLink
          to="/enquiries"
          title="Enquire Form"
        />
      </Button>

      <Button
        variant="contained"
      >
        <NavBarLink
          to="/applications"
          title="Applications"
        />
      </Button>
    </Stack>
  )
}
export default AppNav