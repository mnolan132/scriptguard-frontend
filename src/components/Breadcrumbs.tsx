// components/Breadcrumbs.tsx
import { Box, HStack, Text, Link, Spinner } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useFetchComponents } from "@/common/hooks/useFetchComponents";
const isUUID = (str: string) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(str);

const Breadcrumbs = () => {
  const location = useLocation();
  const { data, loading } = useFetchComponents();

  const pathnames = location.pathname.split("/").filter(Boolean);

  const resolveName = (segment: string) => {
    if (!isUUID(segment)) return decodeURIComponent(segment);
    const match = data?.find((component) => component.id === segment);
    return match ? match.name : segment;
  };

  return (
    <Box px={4} py={2}>
      <HStack gap={2} wrap="wrap">
        {pathnames.map((segment, index) => {
          const fullPath = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;
          const label = resolveName(segment);

          return (
            <HStack key={fullPath} gap={1}>
              <Text>/</Text>
              {loading && isUUID(segment) ? (
                <Spinner size="xs" />
              ) : isLast ? (
                <Text color="teal.500" fontWeight="semibold">
                  {label}
                </Text>
              ) : (
                <Link as={RouterLink} href={fullPath} color="gray.600">
                  {label}
                </Link>
              )}
            </HStack>
          );
        })}
      </HStack>
    </Box>
  );
};

export default Breadcrumbs;
