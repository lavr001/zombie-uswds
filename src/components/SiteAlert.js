import React from "react";
import { Alert } from "@trussworks/react-uswds";
import { HashLink } from "react-router-hash-link";

const SiteAlert = () => {
  return (
    <Alert
      type="warning"
      heading="Zombie Preparedness Alert in effect:"
      headingLevel="h4"
      className="text-left"
    >
      <ul>
        <li>
          <HashLink smooth to="/preparedness-101#icon-list">
            Ready emergency supplies
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/preparedness-101#process-list">
            Prepare emergency plan
          </HashLink>
        </li>
      </ul>
    </Alert>
  );
};

export default SiteAlert;
