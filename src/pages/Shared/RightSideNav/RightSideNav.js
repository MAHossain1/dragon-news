import React, { useContext } from "react";
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
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-success"
        >
          <FaGoogle></FaGoogle> Sign in with Google
        </Button>
        <Button variant="outline-dark">
          <GoMarkGithub></GoMarkGithub> Sign in with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h4>Find Us On</h4>
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
