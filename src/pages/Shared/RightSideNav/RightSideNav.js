import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-success">
          <FaGoogle></FaGoogle> Sign in with Google
        </Button>
        <Button variant="outline-dark">
          <GoMarkGithub></GoMarkGithub> Sign in with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h>Find Us On</h>
        <ListGroup>
          <ListGroup.Item className="mt-2">
            <FaFacebook /> Facebook{" "}
          </ListGroup.Item>
          <ListGroup.Item className="mt-2">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mt-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mt-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mt-2">
            <FaLinkedin /> LinkedIn
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-4">
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
