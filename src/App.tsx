import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Documentation } from "./pages/docs/documentation";
import { HomePage } from "./pages/homePage";

function App() {
  return (
    <Router>
      <Flex
        direction="column"
        h="100vh"
        w="100%"
        bg={{ base: "white", _dark: "#212121" }}
        overflowX="hidden"
      >
        <NavBar />
        <Box flex="1" w="100%" mt="64px" overflowY="auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
