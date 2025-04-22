import {
  Avatar,
  Blockquote,
  Box,
  Float,
  Heading,
  HStack,
  Span,
  Text,
} from "@chakra-ui/react";
import { EmailDialog } from "@/components/emailDialog";
import { Toaster } from "@/components/ui/toaster";

const About = () => {

  return (
    <Box
      p={6}
      textAlign={"left"}
      maxW={"1000px"}
      m={"0 auto"}
      display={"flex"}
      flexDir={"column"}
      gap={6}
    >
      <Toaster />
      <Heading>About ScriptGuard</Heading>
      <Text>
        Welcome to ScriptGuard — a growing library of components and utilities
        designed to help developers lock down their sites, protect their users
        and assets, and give end-users better control over their own security.
      </Text>
      <Text>
        I'm Matthew, a software developer with a Bachelor’s degree in Software
        Engineering and industry-recognized certifications in Cybersecurity. I
        love combining my skills in development with my passion for security to
        build tools that empower developers to take charge of their security
        posture.
      </Text>
      <Text>
        While ScriptGuard isn’t a silver bullet, it’s a step in the right
        direction. It helps developers follow better security practices and
        gives users a seamless experience where security doesn’t feel like a
        chore. Most importantly, ScriptGuard sparks conversations about security
        — something that can drive greater awareness and skill-building in the
        developer community.
      </Text>
      <Text>
        Currently, ScriptGuard is built for React, but as an open-source
        project, it’s designed to be adaptable — reverse-engineerable for other
        frameworks, with a component catalog that's constantly expanding.
      </Text>
      <Text fontWeight={"bold"}>
        💡 Contributions and collaboration are always welcome!
      </Text>
      <Text>
        If you have ideas for improvements, new features, or expanding support
        for other frameworks, I’d love to hear from you.
      </Text>
      <Text>
        📬 Reach out via email below — let’s build a more secure web, together.
      </Text>
      <Blockquote.Root colorPalette={"teal"} bg={{ base: "#FAFAFA", _dark: "#424242" }} padding="8">
        <Float placement="bottom-end" offset="10">
          <Blockquote.Icon opacity="0.4" boxSize="10" rotate="180deg" />
        </Float>
        <Blockquote.Content cite="Matthew Nolan">
          Privacy and security are not privileges reserved for those with
          knowledge of vulnerabilities or workplace-funded training. They are
          fundamental rights — everyone deserves to access the web safely and
          feel equipped to navigate it without fear or risk.
        </Blockquote.Content>
        <Blockquote.Caption>
          <cite>
            <HStack mt="2" gap="3">
              <Avatar.Root size="sm">
                <Avatar.Fallback name="Matthew Nolan" />
                <Avatar.Image src="/src/assets/mattbw.jpg" />
              </Avatar.Root>
              <Span fontWeight="medium">
                Matthew Nolan, Creator of ScriptGuard
              </Span>
            </HStack>
          </cite>
        </Blockquote.Caption>
      </Blockquote.Root>
      <EmailDialog />
    </Box>
  );
};

export default About;
