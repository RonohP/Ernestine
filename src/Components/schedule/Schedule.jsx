import React from "react";
import "./schedule.css";
import SimpleCard from "../../UI/Card";

function Schedule() {
  const schedules = [
    {
      Event: "CAT",
      class: "Med Hall 1",
      school: "School of Medicine",
      date: "Mon 3/06/2021 ",
      time: " 8.00am -11.00am",
    },
    {
      Event: "Main Exam",
      class: "Agric Hall 3",
      school: "School of Agriculture",
      date: "Mon 3/06/2021 ",
      time: " 7.00am -11.00am",
    },
    {
      Event: "Project presentation",
      class: "Comp lab 1",
      school: "School of Computing",
      date: "Mon 3/06/2021 ",
      time: " 9.00am -13.00pm",
    },
    {
      Event: "Mechanical Presentation",
      class: "Eng Hall 1",
      school: "School of Engeneering",
      date: "Mon 3/06/2021 ",
      time: " 11.00am -14.00pm",
    },
    {
      Event: "Lecture",
      class: "Bsn Hall 1",
      school: "School of Business",
      date: "Mon 3/06/2021 ",
      time: " 8.00am -11.00am",
    },
    {
      Event: "Wound dressing practical",
      class: "Med Hall 10",
      school: "School of Nursing",
      date: "Mon 3/06/2021 ",
      time: " 13.00pm -15.00pm",
    },
    {
      Event: "Lecture",
      class: "Eng Hall 4",
      school: "School of Archurial Sciences",
      date: "Mon 3/06/2021 ",
      time: " 10.00am -12.00pm",
    },
    {
      Event: "Practicals",
      class: "Scn Hall 1",
      school: "School of Science",
      date: "Mon 3/06/2021 ",
      time: " 8.00am -11.00am",
    },
  ];
  return (
    <div className="cardDiv">
      {schedules.map((schedule) => {
        return <SimpleCard data={schedule} />;
      })}
    </div>
  );
}

export default Schedule;
