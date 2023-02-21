import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, emailVerify } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoURL, email, password);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Please verify your email address.");
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleEmailVerification = () => {
    emailVerify()
      .then(() => {})
      .catch(e => console.error(e));
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch(e => console.error(e));
  };

  const handleChecked = event => {
    setAccepted(event.target.checked);
  };

  return (
    <>
      <h1>Please Register </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUrl">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group
          onClick={handleChecked}
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">Terms and Conditions</Link>{" "}
              </>
            }
          />
        </Form.Group>

        <Button
          className="mb-3"
          variant="primary"
          type="submit"
          disabled={!accepted}
        >
          Register
        </Button>
        <Form.Group>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>
      </Form>
    </>
  );
};

export default Register;
