import { Box, Stack } from "@mui/material"
import AllPost from "./components/AllPost"
import LeftSide from "./components/LeftSide"
import RightSide from "./components/RightSide"
import NavBar from "./components/NavBar"


function App() {
  return (
    <>
      <Box>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftSide />
          <AllPost />
          <RightSide />
        </Stack>
      </Box>
    </>
  )
}

export default App
