import React from "react"
import { Stack } from "@mui/material"
import { NavBar } from ".."

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Stack p="5%" bgcolor="yellow" width="100%" height="100vh">
      <NavBar />
      {children}
    </Stack>
  )
}
export default PageLayout