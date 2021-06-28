import React from 'react'
import MaterialTable from 'material-table';
//import { Paper, makeStyles  } from '@material-ui/core'
import { useState } from 'react';

//styles 
import '../Styles/Class.css';


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
      {title: 'Class', field: 'class'},
      {title: 'School', field: 'school'},
      {title: 'Capacity', field: 'capacity'},
      {title: 'Status', field: 'status', render:(row)=><div className={row.status ? 'Available': 'Booked'}>{row.status ? 'Available': 'Booked'}</div>}

  ]

  
    return (
        <div>
            <MaterialTable title='Material Table'
            title='Class Data'
            data={data}
            columns={columns}
      
            />
        </div>
    )
}

export default Class;