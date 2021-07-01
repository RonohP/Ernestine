import React from "react";
import "./schedule.css";
import SimpleCard from "../../UI/Card";

function Schedule() {
  const schedules = [
    {
      id: 'event-1',
      Event: 'CAT',
      class: 'Med Hall 1',
      school: 'School of Medicine',
      date: 'Mon 3/06/2021 ',
      time: ' 8.00am -11.00am',
    },
    {
      id: 'event-2',
      Event: 'Main Exam',
      class: 'Agric Hall 3',
      school: 'School of Agriculture',
      date: 'Mon 3/06/2021 ',
      time: ' 7gi.00am -11.00am',
    },
    {
      id: 'event-3',
      Event: 'Project presentation',
      class: 'Comp lab 1',
      school: 'School of Computing',
      date: 'Mon 3/06/2021 ',
      time: ' 9.00am -13.00pm',
    },
    {
      id: 'event-4',
      Event: 'Mechanical Presentation',
      class: 'Eng Hall 1',
      school: 'School of Engeneering',
      date: 'Mon 3/06/2021 ',
      time: ' 11.00am -14.00pm',
    },
    {
      id: 'event-5',
      Event: 'Lecture',
      class: 'Bsn Hall 1',
      school: 'School of Business',
      date: 'Mon 3/06/2021 ',
      time: ' 8.00am -11.00am',
    },
    {
      id: 'event-6',
      Event: 'Wound dressing practical',
      class: 'Med Hall 10',
      school: 'School of Nursing',
      date: 'Mon 3/06/2021 ',
      time: ' 13.00pm -15.00pm',
    },
    {
      id: 'event-7',
      Event: 'Lecture',
      class: 'Eng Hall 4',
      school: 'School of Archurial Sciences',
      date: 'Mon 3/06/2021 ',
      time: ' 10.00am -12.00pm',
    },
    {
      id: 'event-8',
      Event: 'Practicals',
      class: 'Scn Hall 1',
      school: 'School of Science',
      date: 'Mon 3/06/2021 ',
      time: ' 8.00am -11.00am',
    },
  ];
  return (
    <div className="cardDiv">
      {schedules.map((schedule) => {
        return <SimpleCard data={schedule} key={schedule.id}/>;
      })}
    </div>
  );
}

export default Schedule;
