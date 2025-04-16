import { useParams } from "react-router-dom";
import { useFetchComponent } from "@/common/hooks/useFetchComponent";
import {
  Accordion,
  Box,
  Code,
  Heading,
  Span,
  Spinner,
  Table,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useColorModeValue } from "@/components/ui/color-mode";

const ComponentInfo = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useFetchComponent(id!);
  const syntaxTheme = useColorModeValue(oneLight, oneDark); // Auto-switch based on color mode

  if (loading)
    return (
      <VStack colorPalette="teal">
        <Spinner color="colorPalette.600" />
        <Text color="colorPalette.600">Loading...</Text>
      </VStack>
    );
  if (error || !data) return <Text>Error loading component</Text>;

  return (
    <Box p={6} textAlign="left" maxW="1000px" m="0 auto">
      <Heading>{data.name}</Heading>
      <Text mt={4}>{data.description}</Text>
      {(data.usageExamples ?? []).length > 0 && (
        <Box my={6}>
          <Heading size="md" mb={4}>
            Usage Examples
          </Heading>
          <Accordion.Root collapsible>
            {data.usageExamples?.map((example, idx) => (
              <Accordion.Item key={idx} value={example.title}>
                <Accordion.ItemTrigger>
                  <Span flex="1">{example.title}</Span>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <SyntaxHighlighter
                    code={example.code}
                    language="typescript"
                    style={syntaxTheme}
                    children={""}
                  ></SyntaxHighlighter>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Box>
      )}

      {data.props?.length && (
        <Box my={6}>
          <Heading size="md" mb={4}>
            Props
          </Heading>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Name</Table.ColumnHeader>
                <Table.ColumnHeader>Type</Table.ColumnHeader>
                <Table.ColumnHeader>Required</Table.ColumnHeader>
                <Table.ColumnHeader>Default</Table.ColumnHeader>
                <Table.ColumnHeader>Description</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data.props.map((prop, idx) => (
                <Table.Row key={idx}>
                  <Table.Cell><Code>{prop.name}</Code></Table.Cell>
                  <Table.Cell><Code>{prop.type}</Code></Table.Cell>
                  <Table.Cell>{prop.required ? "Yes" : "No"}</Table.Cell>
                  <Table.Cell>
                    {prop.defaultValue ? prop.defaultValue : "N/A"}
                  </Table.Cell>
                  <Table.Cell>{prop.description}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      )}
    </Box>
  );
};

export default ComponentInfo;
