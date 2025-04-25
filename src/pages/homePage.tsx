import {
  Box,
  Heading,
  Highlight,
  Text,
  Button,

} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      height={"100%"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      px={{ base: "20px", md: "30px" }}
      py={{ base: "40px", md: "0" }}
      textAlign={{ base: "center", md: "left" }}
    >
      <Heading
        maxWidth={{ base: "100%", md: "875px" }}
        size={{ base: "xl", md: "3xl", lg: "5xl" }}
      >
        <Text color={"teal.500"} fontWeight={"bold"}>
          <Typewriter
            words={["<ScriptGuard />"]}
            loop={1}
            typeSpeed={100}
            cursor
            cursorStyle="_"
          />
        </Text>
        <Highlight
          query={["security"]}
          styles={{ color: "teal.500", fontWeight: "bold" }}
        >
          A component library that provides security that can keep pace.
        </Highlight>
      </Heading>
      <Text
        my={{ base: "15px", md: "20px" }}
        maxW={{ base: "100%", md: "750px" }}
        fontSize={{ base: "md", md: "lg" }}
      >
        Secure React input and utility components that handle basic security
        needs of your front end, letting you focus on scaling your project and user experience.
      </Text>
      <Box
        maxW={{ base: "100%", md: "250px" }}
        display={"flex"}
        justifyContent={"center"}
        gap={4}
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        <Button
          variant={"surface"}
          colorPalette={"green"}
          onClick={() => {
            navigate("/documentation");
          }}
        >
          Docs
        </Button>

        <Button
          variant={"surface"}
          colorPalette={"blue"}
          onClick={() => {
            navigate("/components");
          }}
        >
          Components
        </Button>
      </Box>
    </Box>
  );
};
