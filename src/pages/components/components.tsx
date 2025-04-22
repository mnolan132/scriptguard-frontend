import { Box, Heading, Grid, Spinner, Text, VStack } from "@chakra-ui/react";
import { ComponentCard } from "./componentCard";
import { useFetchComponents } from "@/common/hooks/useFetchComponents";
import { Component } from "@/types";

export const Components = () => {
  const { data, loading, error } = useFetchComponents();

  if (loading)
    return (
      <VStack colorPalette="teal">
        <Spinner color="colorPalette.600" />
        <Text color="colorPalette.600">Loading...</Text>
      </VStack>
    );

  if (error || !data) return <Text>Error loading component</Text>;

  const groupedData = Array.isArray(data)
    ? data.reduce((acc, item) => {
        const category = item.category || "Uncategorized";
        if (!acc[category]) acc[category] = [];
        acc[category].push(item);
        return acc;
      }, {} as Record<string, Component[]>)
    : undefined;

  return (
    <Box p={6} textAlign={"left"} maxW={"1000px"} m={"0 auto"}>
      {groupedData &&
        Object.entries(groupedData).map(([category, components]) => (
          <Box key={category} mb={6}>
            <Heading size="md" mb={4}>
              {category}
            </Heading>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap="6"
            >
              {components.map((item) => (
                <div key={item.id}>
                  <ComponentCard item={item} />
                </div>
              ))}
            </Grid>
          </Box>
        ))}
    </Box>
  );
};
