import React from 'react'
import { useState } from 'react';
import MaterialTable from 'material-table';

//import { Paper, makeStyles  } from '@material-ui/core'
//styles 
import './Class.css';


const classList =[
    {class: 'Medical Labs', school: 'Medicine', capacity: 100,  status: 0},
    {class: 'Agricultural Labs', school: 'Agriculture', capacity: 200, status: 1},
    {class: 'Main labs', school: 'Nursing', capacity: 100,  status: 0},
    {class: 'Hall A', school: 'Computing', capacity: 50, status: 1},
    {class: 'Hall B', school: 'Business', capacity: 300, status: 1},
    {class: 'Work Shop', school: 'Engineering', capacity: 100,  status: 1},
    {class: 'Work Shop', school: 'Sciences', capacity: 150,  status: 1},
    {class: 'Work Shop', school: 'Arts', capacity: 300,  status: 1},
    {class: 'Work Shop', school: 'Achurial Sciences', capacity: 100,  status: 1}

]



const Class=()=> {
  const [data] = useState(classList)
  
  const columns =[
      {title: 'Class', field: 'class' },
      {title: 'School', field: 'school'},
      {title: 'Capacity', field: 'capacity'},
      {title: 'Status', field: 'status', render:(row)=><div className={row.status ? 'Available': 'Booked'}>{row.status ? 'Available': 'Booked'}</div>}

  ]
  const options = {
    headerStyle: {
        width: "100%",
        padding: "2.5rem 1rem",
        backgroundColor: "#1A1820",
        color: '#FFF',
        fontSize: "1.3rem",
        fontWeight: "bold",
    },
    cellStyle: {
        padding: "1.6rem 1rem",
        fontFamily: "curasive",
        fontSize: "1.1rem",
        fontWeight: 500,
          color: "#1A1820"
        },
        rowStyle: {
            backgroundColor: '#EEE',
        },
  
}
  
    return (
        <div>
            <MaterialTable 
            title=''
            data={data}
            columns={columns}
            options={options}
            />
        </div>
    )
}

export default Class;