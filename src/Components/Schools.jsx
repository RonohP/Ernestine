import React from "react";
import TableComponent from "../UI/Table";

function Schools() {
  const columns = [
    { id: "school", label: "faculty" },
    { id: "classes", label: "classes" },
    {
      id: "campus",
      label: "campus",
    },
  ];

  const rows = [
    {
      school: "School of Medicine",
      classes: "15",
      campus: "Medical Campus",
    },
    {
      school: "School of Agriculture",
      classes: "10",
      campus: "Agricultural Complex",
    },
    {
      school: "School of Computing",
      classes: "15",
      campus: "Computer Labs",
    },
    {
      school: "School of Engineering",
      classes: "10",
      campus: "Engineering Complex",
    },
    {
      school: "School of Business",
      classes: "20",
      campus: "Main Campus",
    },
    {
      school: "School of Nursing",
      classes: "10",
      campus: "Medical Campus",
    },
    {
      school: "School of Archturial Sciences",
      classes: "10",
      campus: "Main Campus",
    },
    {
      school: "School of Sciences",
      classes: "20",
      campus: "Engeneering Complex",
    },
    {
      school: "School of Arts",
      classes: "20",
      campus: "Main Campus",
    },
  ];
  return <TableComponent columns={columns} rows={rows} />;
}

export default Schools;
