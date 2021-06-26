import React from "react";
import "./schedule.css";
import ScheduleTable from "../../UI/ScheduleTable";

function Schedule() {
  const columns = [
    { id: "school", label: "faculty" },
    { id: "class", label: "class" },
    {
      id: "date",
      label: "date",
    },
    {
      id: "status",
      label: "status",
    },
  ];

  const rows = [
    {
      school: "School of Medicine",
      class: "Med Hall 1",
      date: "Mon 3/06/2021 @ 8.00am-11.00am",
      status: "booked",
    },
    {
      school: "School of Agriculture",
      class: "Agric Hall 3",
      date: "Tues 4/06/2021 @ 11.00am-14.00pm",
      status: "booked",
    },
    {
      school: "School of Computing",
      class: "Comp lab 1",
      date: "Wed 5/06/2021 @ 15.00am-18.00pm",
      status: "booked",
    },
    {
      school: "School of Engeneering",
      class: "Eng Hall 1",
      date: "Thur 13/06/2021 @ 8.00am-11.00am",
      status: "Booked",
    },
    {
      school: "School of Business",
      class: "Bsn Hall 1",
      date: "Wed 23/06/2021 @ 8.00am-11.00am",
      status: "booked",
    },
    {
      school: "School of Nursing",
      class: "Med Hall 10",
      date: "Fri 20/06/2021 @ 11.00am-13.00pm",
      status: "booked",
    },
    {
      school: "School of Archurial Sciences",
      class: "Eng Hall 4",
      date: "Mon 22/05/2021 @ 8.00am-11.00am",
      status: "booked",
    },
    {
      school: "School of Science",
      class: "Scn Hall 1",
      date: "Fri 10/05/2021 @ 8.00am-11.00am",
      status: "booked",
    },
  ];
  return <ScheduleTable columns={columns} rows={rows} />;
}

export default Schedule;
