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
import { useNavigate, useLocation } from "react-router-dom";

export function NavBar() {
  const { open, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100%"
        bg={{ base: "white", _dark: "#000000" }}
        px={4}
        zIndex="1000"
        boxShadow="sm"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box m={4} onClick={() => navigate("/")} cursor={"pointer"}>
            <img
              src="/src/assets/ScriptguardLogo.png"
              alt="Logo"
              style={{ height: "200px", width: "auto" }}
            />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"}>
              <ColorModeButton />

              <Menu.Root positioning={{ placement: "left-start" }} open={open} onInteractOutside={() => {onToggle()}}>
                <Menu.Trigger>
                  <IconButton onClick={onToggle}>
                    {open ? <FaTimes /> : <FaBars />}
                  </IconButton>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content alignItems="center" >
                      <Menu.Item
                        cursor={"pointer"}
                        value="documentation"
                        onClick={() => {
                          navigate("/documentation");
                          onToggle();
                        }}
                        bg={
                          location.pathname === "/documentation"
                            ? "blue.500"
                            : "transparent"
                        }
                      >
                        Docs
                      </Menu.Item>
                      <Menu.Item value="components" cursor={"pointer"}>Components</Menu.Item>
                      <Menu.Item value="about" cursor={"pointer"}>About</Menu.Item>
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
