import React from "react";
import { Footer, FooterNav, Address, Logo } from "@trussworks/react-uswds";

const FooterComponent = () => {
  return (
    <Footer
      size="slim"
      returnToTop={true}
      primary={
        <div className="usa-footer__primary-container grid-row margin-top-4">
          <div className="mobile-lg:grid-col-8">
            <FooterNav
              size="slim"
              links={Array(4).fill(
                <a className="usa-footer__primary-link" href="#">
                  Primary Link
                </a>
              )}
            />
          </div>
          <div className="tablet:grid-col-4">
            <Address
              size="slim"
              items={[
                <a key="telephone" href="tel:1-800-555-5555">
                  (800) CALL-GOVT
                </a>,
                <a key="email" href="mailto:info@agency.gov">
                  info@agency.gov
                </a>,
              ]}
            />
          </div>
        </div>
      }
      secondary={
        <div>
          <Logo
            size="slim"
            image={
              <img
                className="usa-footer__logo-img"
                alt="img alt text"
                src="https://designsystem.digital.gov/assets/img/us_flag_small.png"
              />
            }
            heading={
              <p className="usa-footer__logo-heading">
                Zombie Preparedness Agency
              </p>
            }
          />
          <p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Return to Top
            </a>
          </p>
        </div>
      }
    />
  );
};

export default FooterComponent;
