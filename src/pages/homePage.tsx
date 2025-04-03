import {
  Box,
  Heading,
  Highlight,
  Text,
  Button,
  HoverCard,
  Portal,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
        <Text color={"blue.700"} fontWeight={"bold"}>
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
          styles={{ color: "blue.700", fontWeight: "bold" }}
        >
          A component library that provides security that can keep pace.
        </Highlight>
      </Heading>
      <Text
        my={{ base: "15px", md: "20px" }}
        maxW={{ base: "100%", md: "750px" }}
        fontSize={{ base: "md", md: "lg" }}
      >
        Secure React input and action components that handle basic security
        needs of your front end, letting you focus on the fun stuff
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
        <HoverCard.Root size="sm">
          <HoverCard.Trigger asChild>
            <Button disabled variant={"surface"} colorPalette={"blue"}>
              Components
            </Button>
          </HoverCard.Trigger>
          <Portal>
            <HoverCard.Positioner>
              <HoverCard.Content>
                <HoverCard.Arrow />
                <Stack gap="1">
                  <Text textStyle="sm" fontWeight="semibold">
                  🚀 Coming soon!
                  </Text>
                  <Text>
                    In the meantime, check out the{" "}
                    <Link to={"/documentation"} style={{ color: "green" }}>
                      docs
                    </Link>
                  </Text>
                </Stack>
              </HoverCard.Content>
            </HoverCard.Positioner>
          </Portal>
        </HoverCard.Root>
      </Box>
    </Box>
  );
};
