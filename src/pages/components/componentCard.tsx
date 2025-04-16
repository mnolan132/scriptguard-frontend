import React from "react";
import { Component } from "@/types";
import { Card, Link } from "@chakra-ui/react";
import { CiLink } from "react-icons/ci";

export const ComponentCard = ({ item }: { item: Component }) => {
  return (
    <Card.Root className="cursor-pointer">
      <Card.Body display={"flex"} justifyContent={"space-evenly"}>
        <Card.Title>{item.name}</Card.Title>
        <Card.Description>{item.description}</Card.Description>
        <Card.Footer>
          <Link href={`/components/${item.id}`} colorPalette={"cyan"}>
            {`View documentation`} <CiLink />
          </Link>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
};
