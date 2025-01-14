import React from "react";
import {
  ProcessList,
  ProcessListItem,
  ProcessListHeading,
} from "@trussworks/react-uswds";

const MyProcessList = () => {
  return (
    <ProcessList>
      <ProcessListItem>
        <ProcessListHeading type="h4" className="text-left">
          Identify local emergencies
        </ProcessListHeading>
        <p className="text-left">
          Identify the types of emergencies that are possible in your area.
          Besides a zombie apocalypse, this may include floods, tornadoes, or
          earthquakes. If you are unsure contact your local Red Cross chapter
          for more information.
        </p>
      </ProcessListItem>
      <ProcessListItem>
        <ProcessListHeading type="h4" className="text-left">
          Pick a family meeting place
        </ProcessListHeading>
        <p className="text-left">
          Pick a meeting place for your family to regroup in case zombies invade
          your home…or your town evacuates because of a hurricane. Pick one
          place right outside your home for sudden emergencies and one place
          outside of your neighborhood in case you are unable to return home
          right away.
        </p>
      </ProcessListItem>
      <ProcessListItem>
        <ProcessListHeading type="h4" className="text-left">
          Identify emergency contacts
        </ProcessListHeading>
        <p className="text-left">
          Make a list of local contacts like the police, fire department, and
          your local zombie response team. Also identify an out-of-state contact
          that you can call during an emergency to let the rest of your family
          know you are ok.
        </p>
      </ProcessListItem>
    </ProcessList>
  );
};

export default MyProcessList;
