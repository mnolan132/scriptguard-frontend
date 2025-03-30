import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Documentation } from "./pages/docs/documentation";

function App() {
  return (
    <Flex direction="column" h="100vh" w="100%" bg={{ base: "white", _dark: "#212121" }} overflowX="hidden">
      <NavBar />
      <Box
        flex="1"
        w="100%" 
        mt="64px"
        overflowY="auto"
      >
        <Documentation />
      </Box>
    </Flex>
  );
}

export default App;
