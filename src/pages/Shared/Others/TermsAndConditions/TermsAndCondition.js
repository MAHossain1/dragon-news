import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <h2>
        You're here to accept terms and conditions not for mastering over me!
      </h2>
      <Link to="/register">Go Back to Register without hesitation</Link>
    </div>
  );
};

export default TermsAndCondition;
