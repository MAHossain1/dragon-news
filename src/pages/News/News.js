import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, rating, category_id } = news;

  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <div>
          <FaStar className="text-warning me-2"></FaStar>
          <span>{rating?.number}</span>
        </div>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All News in this Category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
