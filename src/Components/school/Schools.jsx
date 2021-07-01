import React from 'react';
import TableComponent from '../../UI/Table';
import { nanoid } from 'nanoid';

function Schools() {
  const columns = [
    { key: 'school', id: 'school', label: 'faculty' },
    { key: 'classes', id: 'classes', label: 'classes' },
    { key: 'campus', id: 'campus', label: 'campus' },
  ];

  const rows = [
    {
      key: nanoid(),
      school: 'School of Medicine',
      classes: '15',
      campus: 'Medical Campus',
    },
    {
      key: nanoid(),
      school: 'School of Agriculture',
      classes: '10',
      campus: 'Agricultural Complex',
    },
    {
      key: nanoid(),
      school: 'School of Computing',
      classes: '15',
      campus: 'Computer Labs',
    },
    {
      key: nanoid(),
      school: 'School of Engineering',
      classes: '10',
      campus: 'Engineering Complex',
    },
    {
      key: nanoid(),
      school: 'School of Business',
      classes: '20',
      campus: 'Main Campus',
    },
    {
      key: nanoid(),
      school: 'School of Nursing',
      classes: '10',
      campus: 'Medical Campus',
    },
    {
      key: nanoid(),
      school: 'School of Archturial Sciences',
      classes: '10',
      campus: 'Main Campus',
    },
    {
      key: nanoid(),
      school: 'School of Sciences',
      classes: '20',
      campus: 'Engeneering Complex',
    },
    {
      key: nanoid(),
      school: 'School of Arts',
      classes: '20',
      campus: 'Main Campus',
    },
  ];

  console.log(rows);
  return (
    <>
      <TableComponent key={nanoid} columns={columns} rows={rows} />{' '}
      {console.log(<TableComponent key={rows.key} columns={columns} rows={rows} />)}
    </>
  );
}

export default Schools;
