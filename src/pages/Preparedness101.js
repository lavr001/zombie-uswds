import React from "react";
import GovBanner from "../components/Banner";
import ZombieSummaryBox from "../components/SummaryBox";
import ZombieMoviesTable from "../components/ZombieMoviesTable";
import EmergencyContactsTable from "../components/EmergencyContactsTable";
import ZombieProcessList from "../components/ProcessList";
import IconListSupplies from "../components/IconList";
import FooterComponent from "../components/Footer";
import ZombieBreadcrumb from "../components/Breadcrumb";

const Preparedness101 = () => {
  return (
    <div className="grid-container">
      <GovBanner />
      <ZombieBreadcrumb />
      <h1>Preparedness 101: Zombie Apocalypse</h1>

      <ZombieSummaryBox />

      <h2>A Brief History of Zombies</h2>
      <p>
        The concept of the zombie has deep roots in Haitian and West African
        folklore, where certain rituals and beliefs spoke of reanimated corpses
        controlled by a sorcerer’s spell. Over time, these tales found their way
        into popular culture, with the 1932 film White Zombie—often cited as the
        first feature-length zombie movie—shining a spotlight on Haitian voodoo
        traditions. However, the modern, flesh-eating zombie trope emerged
        largely from George A. Romero’s Night of the Living Dead in 1968.
        Romero’s depiction introduced undead hordes driven by an insatiable
        hunger and sparked countless imitators, from campy B-movies to
        big-budget blockbusters and TV shows. By combining primal fears of
        contagion and the unknown, zombies remain a potent cultural
        symbol—serving as metaphors for social collapse, unchecked consumerism,
        and our own anxieties about mortality. Whether voodoo slave or shambling
        ghoul, zombies have shambled through our nightmares for nearly a
        century.
      </p>

      <p>
        In movies, shows, and literature, zombies are often depicted as being
        created by an infectious virus, which is passed on via bites and contact
        with bodily fluids. Harvard psychiatrist Steven Schlozman wrote a
        (fictional) medical paper on the zombies presented in Night of the
        Living Dead and refers to the condition as Ataxic Neurodegenerative
        Satiety Deficiency Syndrome caused by an infectious agent. The Zombie
        Survival Guide identifies the cause of zombies as a virus called
        solanum. Other zombie origins shown in films include radiation from a
        destroyed NASA Venus probe (as in Night of the Living Dead), as well as
        mutations of existing conditions such as prions, mad-cow disease,
        measles and rabies.{" "}
      </p>

      <ZombieMoviesTable />

      <h2 id="emergency-contacts">Emergency Contacts</h2>
      <EmergencyContactsTable />

      <h2>Better Safe than Sorry</h2>

      <p>
        So what do you need to do before zombies…or hurricanes for example,
        actually happen? First of all, you should have an emergency kit in your
        house. This includes things like water, food, and other supplies to get
        you through the first couple of days before you can locate a zombie-free
        refugee camp (or in the event of a natural disaster, it will buy you
        some time until you are able to make your way to an evacuation shelter
        or utility lines are restored). Below are a few items you should include
        in your kit, for a full list visit the{" "}
        <a
          href="http://emergency.cdc.gov/preparedness/kit/disasters/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CDC Emergency page
        </a>
        .
      </p>

      <h2 id="icon-list">Disaster or Blackout Emergency Supplies</h2>
      <IconListSupplies />

      <h2 id="process-list">Emergency Plan</h2>
      <ZombieProcessList />
      <p>
        <b>Remember to Follow Your Plan.</b>
        <br />
        Creating a solid emergency plan is only half the battle—making sure
        everyone in your household understands and follows it is equally vital.
        Regularly review your plan with family or housemates, keeping all
        contact information up to date and ensuring everyone knows exactly what
        steps to take if zombies (or any other emergency) strike. Consider
        running periodic drills to practice your evacuation routes and meeting
        points. Most importantly, stay flexible. Real emergencies don’t always
        unfold perfectly or on schedule. Continue to adapt your plan and
        supplies as new information becomes available—whether it’s shifting
        storm paths or a sudden increase in zombie sightings. By staying
        prepared, staying informed, and staying committed to your emergency
        plan, you’re far more likely to weather any crisis that comes your way.
      </p>
      <FooterComponent />
    </div>
  );
};

export default Preparedness101;
