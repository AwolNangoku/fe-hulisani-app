import React from "react"
import { Stack } from "@mui/material"
import { NavBar } from ".."
import { useParams } from "react-router-dom"

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const { choice } = useParams()
    
  return (
    <Stack p="5%" bgcolor="yellow" width="100%" height="100vh">
      {(() => {
        if (!choice) {
          return (
            <NavBar />
          )
        }
      })()}
      {children}
    </Stack>
  )
}
export default PageLayout