import React, { useState } from "react";
import {
  Banner,
  BannerHeader,
  BannerButton,
  BannerFlag,
  BannerGuidance,
  MediaBlockBody,
  BannerContent,
  Icon,
} from "@trussworks/react-uswds";

const GovBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Banner aria-label="Official website of the state department of something specific">
      <BannerHeader
        isOpen={isOpen}
        flagImg={
          <BannerFlag
            src="https://designsystem.digital.gov/assets/img/us_flag_small.png"
            aria-hidden
            alt=""
          />
        }
        headerText="This is an official website of the state department of something specific"
        headerActionText="Here's how you know"
      >
        <BannerButton
          isOpen={isOpen}
          aria-controls="custom-banner"
          onClick={() => {
            setIsOpen((previousIsOpen) => !previousIsOpen);
          }}
        >
          Here&apos;s how you know
        </BannerButton>
      </BannerHeader>
      <BannerContent id="custom-banner" isOpen={isOpen}>
        <div className="grid-row grid-gap-lg">
          <BannerGuidance className="tablet:grid-col-6">
            <Icon.Home aria-label="Home icon" />
            <MediaBlockBody>
              <p>
                <strong>Official websites use .gov</strong>
                <br />A <strong>.gov</strong> website belongs to an official
                government organization in the United States.
              </p>
            </MediaBlockBody>
          </BannerGuidance>
          <BannerGuidance className="tablet:grid-col-6">
            <Icon.Lock aria-label="Locked padlock icon" />
            <MediaBlockBody>
              <p>
                <strong>Secure .gov websites use HTTPS</strong>
                <br />A{" "}
                <strong>
                  lock (<Icon.Lock aria-label="Locked padlock icon" />)
                </strong>{" "}
                or <strong>https://</strong> means you&apos;ve safely connected
                to the .gov website. Share sensitive information only on
                official, secure websites.
              </p>
            </MediaBlockBody>
          </BannerGuidance>
        </div>
      </BannerContent>
    </Banner>
  );
};

export default GovBanner;
