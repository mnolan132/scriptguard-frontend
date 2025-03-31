import {
  Box,
  Heading,
  Text,
  Code,
  Clipboard,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useColorModeValue } from "@/components/ui/color-mode";

const secureTextInputCode = `import { SecureTextInput } from "scriptguard-library";

const MyComponent = () => {
    const handleChange = (value: string) => console.log(value);

    return (
        <SecureTextInput onChange={handleChange} maxLength={100} />
    );
};       `;
const securePasswordInputCode = `
import { SecurePasswordInput } from "scriptguard-library";

const MyComponent = () => {
  return (
    <SecurePasswordInput minLength={8} />
  );
};`;

const secureEmailInputCode = `
import { SecureEmailInput } from "scriptguard-library";

const MyComponent = () => {
  return (
    <SecureEmailInput allowedDomains={["example.com"]} />
  );
};`;

const secureCopyButtonCode = `
import { SecureCopyButton } from "scriptguard-library";

const MyComponent = () => {
  return (
    <SecureCopyButton text="Sensitive Data" maskText autoClearClipboard />
  );
};`;

export const Documentation = () => {
  const syntaxTheme = useColorModeValue(oneLight, oneDark); // Auto-switch based on color mode

  return (
    <Box p={6} textAlign={"left"} maxW={"1000px"} m={"0 auto"}>
      <Heading size="xl">Documentation</Heading>
      <Text>
        A React component library for secure input handling, designed to prevent
        XSS attacks, enforce input validation, and enhance security.
      </Text>
      <br></br>
      <Heading size="lg">🚀 Installation</Heading>
      <Text>To install the library via npm:</Text>
      <Box
        m={5}
        p={5}
        borderRadius={5}
        bg={{ base: "#ECECEC", _dark: "#424242" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Code variant={"surface"} size="lg">
          npm install scriptguard-library
        </Code>
        <Clipboard.Root value="npm install scriptguard-library">
          <Clipboard.Trigger asChild>
            <IconButton variant="surface" size="xs">
              <Clipboard.Indicator />
            </IconButton>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Box>
      <br></br>
      <Text>Or using yarn:</Text>
      <Box
        m={5}
        p={5}
        borderRadius={5}
        bg={{ base: "#ECECEC", _dark: "#424242" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Code variant={"surface"} size="lg">
          yarn add scriptguard-library
        </Code>
        <Clipboard.Root value="yarn add scriptguard-library">
          <Clipboard.Trigger asChild>
            <IconButton variant="surface" size="xs">
              <Clipboard.Indicator />
            </IconButton>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Box>
      <br></br>
      <Heading size="lg">📦 Available Components</Heading>
      <br></br>
      <Heading size="md">1️⃣ SecureTextInput</Heading>
      <Text>
        A sanitized text input field that prevents XSS attacks and enforces
        character restrictions.
      </Text>
      <br></br>
      <Heading size="md">✅ Usage:</Heading>
      <Box
        m={5}
        p={5}
        borderRadius={5}
        bg={{ base: "#ECECEC", _dark: "#424242" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <SyntaxHighlighter
          code={secureTextInputCode}
          language="typescript"
          style={syntaxTheme}
        ></SyntaxHighlighter>
        <Clipboard.Root value={secureTextInputCode}>
          <Clipboard.Trigger asChild>
            <IconButton variant="surface" size="xs">
              <Clipboard.Indicator />
            </IconButton>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Box>
      <br></br>
      <Heading size="md">2️⃣ SecurePasswordInput</Heading>
      <Text>
        A secure password input field with sanitization and optional strength
        meter.
      </Text>
      <br></br>
      <Heading size="md">✅ Usage:</Heading>
      <Box
        m={5}
        p={5}
        borderRadius={5}
        bg={{ base: "#ECECEC", _dark: "#424242" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <SyntaxHighlighter
          code={securePasswordInputCode}
          language="typescript"
          style={syntaxTheme}
        ></SyntaxHighlighter>
        <Clipboard.Root value={securePasswordInputCode}>
          <Clipboard.Trigger asChild>
            <IconButton variant="surface" size="xs">
              <Clipboard.Indicator />
            </IconButton>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Box>
      <br></br>
      <Heading size="md">3️⃣ SecureEmailInput</Heading>
      <Text>
        A validated email input field with optional domain restrictions.
      </Text>
      <br></br>
      <Heading size="md">✅ Usage:</Heading>
      <Box
        m={5}
        p={5}
        borderRadius={5}
        bg={{ base: "#ECECEC", _dark: "#424242" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <SyntaxHighlighter
          code={secureEmailInputCode}
          language="typescript"
          style={syntaxTheme}
        ></SyntaxHighlighter>
        <Clipboard.Root value={secureEmailInputCode}>
          <Clipboard.Trigger asChild>
            <IconButton variant="surface" size="xs">
              <Clipboard.Indicator />
            </IconButton>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Box>
      <br></br>
      <Heading size="md">4️⃣ SecureCopyButton</Heading>
      <Text>
        A secure button to copy text to the clipboard with optional auto-clear
        functionality.
      </Text>
      <br></br>
      <Heading size="md">✅ Usage:</Heading>
      <Box
        m={5}
        p={5}
        borderRadius={5}
        bg={{ base: "#ECECEC", _dark: "#424242" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <SyntaxHighlighter
          code={secureCopyButtonCode}
          language="typescript"
          style={syntaxTheme}
        ></SyntaxHighlighter>
        <Clipboard.Root value={secureCopyButtonCode}>
          <Clipboard.Trigger asChild>
            <IconButton variant="surface" size="xs">
              <Clipboard.Indicator />
            </IconButton>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Box>
      <br></br>
      <Heading size="lg">🔄 Updating the Package</Heading>
      <Text>To update the package to the latest version:</Text>
      <Box
        m={5}
        p={5}
        borderRadius={5}
        bg={{ base: "#ECECEC", _dark: "#424242" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Code variant={"surface"} size="lg">
          npm update scriptguard-library
        </Code>
        <Clipboard.Root value="npm update scriptguard-library">
          <Clipboard.Trigger asChild>
            <IconButton variant="surface" size="xs">
              <Clipboard.Indicator />
            </IconButton>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Box>
      <br></br>
      <Heading size="lg">🛠 Development & Contribution</Heading>
      <Text>1. Clone the repository:</Text>
      <Box
        m={5}
        p={5}
        borderRadius={5}
        bg={{ base: "#ECECEC", _dark: "#424242" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Code variant={"surface"} size="lg">
          git clone https://github.com/mnolan132/scriptguard-library.git
        </Code>
        <Clipboard.Root value="git clone https://github.com/mnolan132/scriptguard-library.git">
          <Clipboard.Trigger asChild>
            <IconButton variant="surface" size="xs">
              <Clipboard.Indicator />
            </IconButton>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Box>
      <Text>2. Install dependencies:</Text>
      <Box
        m={5}
        p={5}
        borderRadius={5}
        bg={{ base: "#ECECEC", _dark: "#424242" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Code variant={"surface"} size="lg">
          cd scriptguard-library
          <br />
          npm install
        </Code>

        <Clipboard.Root
          value="
          cd scriptguard-library
          npm install
          "
        >
          <Clipboard.Trigger asChild>
            <IconButton variant="surface" size="xs">
              <Clipboard.Indicator />
            </IconButton>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Box>
      <Text>3. Build the package:</Text>
      <Box
        m={5}
        p={5}
        borderRadius={5}
        bg={{ base: "#ECECEC", _dark: "#424242" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Code variant={"surface"} size="lg">
          npm run build
        </Code>
        <Clipboard.Root value="npm run build">
          <Clipboard.Trigger asChild>
            <IconButton variant="surface" size="xs">
              <Clipboard.Indicator />
            </IconButton>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Box>
      <Text>4. Run tests:</Text>
      <Box
        m={5}
        p={5}
        borderRadius={5}
        bg={{ base: "#ECECEC", _dark: "#424242" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Code variant={"surface"} size="lg">
          npm test
        </Code>
        <Clipboard.Root value="npm test">
          <Clipboard.Trigger asChild>
            <IconButton variant="surface" size="xs">
              <Clipboard.Indicator />
            </IconButton>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Box>
    </Box>
  );
};
