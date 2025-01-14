import React from "react";
import {
  Icon,
  IconList,
  IconListItem,
  IconListIcon,
  IconListContent,
} from "@trussworks/react-uswds";

const IconListSupplies = () => {
  const listItems = [
    "Water (1 gallon per person per day)",
    "Food (stock up on non-perishable items that you eat regularly)",
    "Medications (this includes prescription and non-prescription meds)",
    "Tools and Supplies (utility knife, duct tape, battery powered radio, etc.)",
    "Sanitation and Hygiene (household bleach, soap, towels, etc.)",
    "Clothing and Bedding (a change of clothes for each family member and blankets)",
    "Important documents (copies of your driver’s license, passport, and birth certificate to name a few)",
    "First Aid supplies (although you’re a goner if a zombie bites you, you can use these supplies to treat basic cuts and lacerations that you might get during a tornado or hurricane)",
  ];

  return (
    <IconList>
      {listItems.map((item, index) => (
        <IconListItem key={index}>
          <IconListIcon className="text-green">
            <Icon.CheckCircle aria-hidden="true" />
          </IconListIcon>
          <IconListContent className="text-left">{item}</IconListContent>
        </IconListItem>
      ))}
    </IconList>
  );
};

export default IconListSupplies;
