"use client";

import {
  Box,
  Flex,
  Menu,
  useDisclosure,
  Stack,
  Portal,
  IconButton,
} from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import { FaBars, FaTimes } from "react-icons/fa";

export function NavBar() {
  const { open, onToggle } = useDisclosure();
  return (
    <>
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        bg="bg"
        px={4}
        zIndex="1000"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <img
              src="/src/assets/ScriptguardLogo.png"
              alt="Logo"
              style={{ height: "200px", width: "auto" }}
            />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"}>
              <ColorModeButton />

              <Menu.Root positioning={{ placement: "left-start" }} open={open}>
                <Menu.Trigger>
                  <IconButton onClick={onToggle}>
                    {open ? <FaTimes /> : <FaBars />}
                  </IconButton>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content alignItems="center">
                      <Menu.Item value="docs">Docs</Menu.Item>
                      <Menu.Item value="components">Components</Menu.Item>
                      <Menu.Item value="about">About</Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
