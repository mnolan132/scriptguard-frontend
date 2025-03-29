import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Documentation } from "./pages/docs/documentation";

function App() {
  return (
    <Flex direction="column" h="100vh" bg={{ base: "white", _dark: "#212121" }}>
      <NavBar />
      <Box
        flex="1" 
        mt="64px" 
        overflowY="auto"
      >
        <Documentation />
      </Box>
    </Flex>
  );
}

export default App;
