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
      start: 'Mon Jun 06 2021 8:00:47 GMT+0300 (East Africa Time)',
      end: ' Mon Jun 06 2021 11:00:47 GMT+0300 (East Africa Time)',
    },
    {
      id: 'event-2',
      Event: 'Main Exam',
      class: 'Agric Hall 3',
      school: 'School of Agriculture',
      start: 'Mon Jun 06 2021 8:00:47 GMT+0300 (East Africa Time)',
      end: ' Mon Jun 06 2021 11:00:47 GMT+0300 (East Africa Time)',
    },
    {
      id: 'event-3',
      Event: 'Project presentation',
      class: 'Comp lab 1',
      school: 'School of Computing',
      start: 'Mon Jun 06 2021 8:00:47 GMT+0300 (East Africa Time)',
      end: ' Mon Jun 06 2021 11:00:47 GMT+0300 (East Africa Time)',
    },
    {
      id: 'event-4',
      Event: 'Mechanical Presentation',
      class: 'Eng Hall 1',
      school: 'School of Engeneering',
      start: 'Mon Jun 06 2021 8:00:47 GMT+0300 (East Africa Time)',
      end: ' Mon Jun 06 2021 11:00:47 GMT+0300 (East Africa Time)',
    },
    {
      id: 'event-5',
      Event: 'Lecture',
      class: 'Bsn Hall 1',
      school: 'School of Business',
      start: 'Mon Jun 06 2021 8:00:47 GMT+0300 (East Africa Time)',
      end: ' Mon Jun 06 2021 11:00:47 GMT+0300 (East Africa Time)',
    },
    {
      id: 'event-6',
      Event: 'Wound dressing practical',
      class: 'Med Hall 10',
      school: 'School of Nursing',
      start: 'Mon Jun 06 2021 8:00:47 GMT+0300 (East Africa Time)',
      end: ' Mon Jun 06 2021 11:00:47 GMT+0300 (East Africa Time)',
    },
    {
      id: 'event-7',
      Event: 'Lecture',
      class: 'Eng Hall 4',
      school: 'School of Archurial Sciences',
      start: 'Mon Jun 06 2021 8:00:47 GMT+0300 (East Africa Time)',
      end: ' Mon Jun 06 2021 11:00:47 GMT+0300 (East Africa Time)',
    },
    {
      id: 'event-8',
      Event: 'Practicals',
      class: 'Scn Hall 1',
      school: 'School of Science',
      start: 'Mon Jun 06 2021 8:00:47 GMT+0300 (East Africa Time)',
      end: ' Mon Jun 06 2021 11:00:47 GMT+0300 (East Africa Time)',
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
