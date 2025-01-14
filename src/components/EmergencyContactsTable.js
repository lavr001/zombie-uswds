import React from "react";
import { Table } from "@trussworks/react-uswds";

const EmergencyContactsTable = () => {
  const columns = ["Department", "Telephone"];

  const data = [
    {
      department: "Police",
      telephone: "703-555-0132",
    },
    {
      department: "Fire/Emergency Medical Response",
      telephone: "703-555-0177",
    },
    {
      department: "Department of Sanitation",
      telephone: "703-555-0112",
    },
  ];

  return (
    <Table bordered caption="Zombie Apocalypse Emergency Contacts">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index} scope="col">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.department}</td>
            <td>{row.telephone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmergencyContactsTable;
