import React from "react";
import { SummaryBox } from "@trussworks/react-uswds";
import { HashLink } from "react-router-hash-link";

const ZombieSummaryBox = () => {
  return (
    <SummaryBox className="text-left" heading="Know the Basics">
      <p>
        Know your community’s{" "}
        <HashLink smooth to="#emergency-contacts">
          Emergency Contacts
        </HashLink>
      </p>
      <p>
        If you are under a Zombie Apocalypse Warning, make an{" "}
        <HashLink smooth to="#process-list">
          Emergency Plan
        </HashLink>{" "}
        right away.
      </p>
      <p>
        Gather{" "}
        <HashLink smooth to="#icon-list">
          Emergency Supplies
        </HashLink>{" "}
        for your home and your car.
      </p>
    </SummaryBox>
  );
};

export default ZombieSummaryBox;
