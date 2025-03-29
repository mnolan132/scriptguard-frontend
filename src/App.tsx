import "./App.css";
import { ColorModeButton, } from "@/components/ui/color-mode";
import { Box  } from "@chakra-ui/react";
import {NavBar} from './components/NavBar'

function App() {

  return (
    <Box >
      <NavBar />
      <Box pt={'64px'}></Box>
      <p>Hello world!</p>
      <ColorModeButton />
    </Box>
  );
}

export default App;
