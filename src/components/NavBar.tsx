"use client";

import {
  Box,
  Flex,
  Menu,
  useDisclosure,
  Stack,
  Portal,
  Button,
} from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "@/assets/ScriptguardLogo.png";


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
              src={Logo}
              alt="Logo"
              style={{ height: "200px", width: "auto" }}
            />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"}>
              <ColorModeButton />

              <Menu.Root
                positioning={{ placement: "left-start" }}
                open={open}
                onInteractOutside={() => {
                  onToggle();
                }}
              >
                <Menu.Trigger asChild>
                  <Button onClick={onToggle}>
                    {open ? <FaTimes /> : <FaBars />}
                  </Button>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content alignItems="center">
                    <Menu.Item
                        cursor={"pointer"}
                        value="home"
                        onClick={() => {
                          navigate("/");
                          onToggle();
                        }}
                        bg={
                          location.pathname === "/"
                            ? "teal.500"
                            : "transparent"
                        }
                      >
                        Home
                      </Menu.Item>
                      <Menu.Item
                        cursor={"pointer"}
                        value="documentation"
                        onClick={() => {
                          navigate("/documentation");
                          onToggle();
                        }}
                        bg={
                          location.pathname === "/documentation"
                            ? "teal.500"
                            : "transparent"
                        }
                      >
                        Docs
                      </Menu.Item>
                      <Menu.Item
                        cursor={"pointer"}
                        value="components"
                        onClick={() => {
                          navigate("/components");
                          onToggle();
                        }}
                        bg={
                          location.pathname === "/components"
                            ? "teal.500"
                            : "transparent"
                        }
                      >
                        Components
                      </Menu.Item>
                      <Menu.Item
                        value="about"
                        cursor={"pointer"}
                        onClick={() => {
                          navigate("/about");
                          onToggle();
                        }}
                        bg={
                          location.pathname === "/about"
                            ? "teal.500"
                            : "transparent"
                        }
                      >
                        About
                      </Menu.Item>
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
