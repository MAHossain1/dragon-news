import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const from = location.state?.from?.pathname || "/";

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("Your email not verified. Please verify your email");
        }
      })
      .catch(error => {
        setError(error.message);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <h1>Please Login </h1>
      <Form onSubmit={handleSubmit}>
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

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Group>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>
      </Form>
    </>
  );
};

export default Login;
