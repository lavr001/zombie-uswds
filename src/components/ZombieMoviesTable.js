import React from "react";
import { Table } from "@trussworks/react-uswds";

const ZombieMoviesTable = () => {
  const columns = ["Title", "Year", "Director", "Producer"];

  const data = [
    {
      title: "White Zombie",
      year: "1932",
      director: "Victor Halperin",
      producer: "Edward Halperin",
    },
    {
      title: "King of the Zombies",
      year: "1941",
      director: "Jean Yarbrough",
      producer: "Lindsley Parsons",
    },
    {
      title: "I Walked with a Zombie",
      year: "1943",
      director: "Jacques Tourneur",
      producer: "Val Lewton",
    },
    {
      title:
        "The Incredibly Strange Creatures Who Stopped Living and Became Mixed-Up Zombies",
      year: "1964",
      director: "Ray Dennis Steckler",
      producer: "Ray Dennis Steckler",
    },
    {
      title: "Dawn of the Dead",
      year: "1978",
      director: "George A. Romero",
      producer: "Richard P. Rubinstein",
    },
  ];

  return (
    <Table
      bordered
      caption="Zombie Movies Not Yet Named to National Film Preservation Board Registry"
    >
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} scope="col">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.title}</td>
            <td>{row.year}</td>
            <td>{row.director}</td>
            <td>{row.producer}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ZombieMoviesTable;
