import React from "react";
import {
  Breadcrumb,
  BreadcrumbBar,
  BreadcrumbLink,
} from "@trussworks/react-uswds";
import { Link } from "react-router-dom";

const ZombieBreadcrumb = () => {
  return (
    <BreadcrumbBar>
      <Breadcrumb>
        <BreadcrumbLink asCustom={Link} to="/">
          <span>Back to Home</span>
        </BreadcrumbLink>
      </Breadcrumb>

      <Breadcrumb current>
        <span>Preparedness 101</span>
      </Breadcrumb>
    </BreadcrumbBar>
  );
};

export default ZombieBreadcrumb;
