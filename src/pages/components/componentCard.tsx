import React from "react";
import { Component } from "@/types";
import { Card, Link } from "@chakra-ui/react";
import { CiLink } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export const ComponentCard = ({ item }: { item: Component }) => {
    const navigate = useNavigate();

  return (
    <Card.Root className="cursor-pointer">
      <Card.Body display={"flex"} justifyContent={"space-evenly"}>
        <Card.Title>{item.name}</Card.Title>
        <Card.Description>{item.description}</Card.Description>
        <Card.Footer>
          <Link onClick={() => navigate(`/components/${item.id}`)} colorPalette={"cyan"}>
            {`View documentation`} <CiLink />
          </Link>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
};
