import { useEffect, useState } from "react";
import { Component } from "@/types";
import { Card, Link } from "@chakra-ui/react";
import { CiLink } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export const ComponentCard = ({ item }: { item: Component }) => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`@/assets/${item.name}.png`);
        setImageSrc(image.default);
      } catch {
        setImageSrc(null);
      }
    };
    loadImage();
  }, [item.name]);

  return (
    <Card.Root
      position="relative"
      transition="box-shadow 0.3s ease"
      _hover={{ boxShadow: "lg" }}
      p={4}
      borderRadius="md"
    >
      <Card.Body display="flex" flexDirection="column" alignItems="left">
        <Card.Title>{item.name}</Card.Title>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={`${item.name} preview`}
            style={{
              maxHeight: "200px",
              objectFit: "contain",
              margin: "1rem 0",
            }}
          />
        )}
        <Card.Description>{item.description}</Card.Description>
        <Card.Footer>
          <Link onClick={() => navigate(`/components/${item.id}`)} color="cyan.500">
            View documentation <CiLink />
          </Link>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
};
