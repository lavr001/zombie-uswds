import React from "react";
import GovBanner from "../components/Banner";
import SiteAlert from "../components/SiteAlert";
import FooterComponent from "../components/Footer";

const HomePage = () => {
  return (
    <div className="grid-container usa-prose">
      <GovBanner />
      <SiteAlert />
      <div className="bg-custom-blue text-white padding-3">
        <h1>Zombie Preparedness Hub</h1>
        <p>
          Welcome to your one-stop resource for surviving any undead uprising
          (or any other emergency that might come your way). We’ve compiled
          essential tips, checklists, and official guidance to keep you and your
          community safe when disaster strikes. Whether you’re stocking up on
          water and non-perishable items or mapping out an evacuation plan,
          you’ll find practical steps you can take right now. The links in the
          Site Alert above will lead you to detailed advice on gathering
          emergency supplies and crafting a foolproof plan. By following these
          recommendations, you’ll be better prepared for anything—zombies,
          severe weather, or even unexpected disruptions to everyday life.
          Remember: staying informed, staying alert, and staying calm are the
          keys to outlasting any challenge. Don’t wait until you see something
          shambling down the street take action today!
        </p>
      </div>
      <FooterComponent />
    </div>
  );
};

export default HomePage;
