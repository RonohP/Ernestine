import React from 'react'
import MaterialTable from 'material-table';
import { TablePagination } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


//styles 
import './Class.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#e6a284",
    color: "#e6a284"
  },
  toolbar: {
    backgroundColor: "white"
  },
  caption: {
    color: " #FC804A",
    fontSize: " 1.1rem"
}
  
});




const Class=()=> {
 
    const classes = useStyles();
    
    const data = [
        {class: 'Med Hall 1', school: 'Medicine', capacity: 100,  status: 0},
        {class: 'Agric Hall 3', school: 'Agriculture', capacity: 200, status: 1},
        {class: 'Med Hall 10', school: 'Nursing', capacity: 100,  status: 0},
        {class: 'Comp lab 1', school: 'Computing', capacity: 50, status: 1},
        {class: 'Bsn Hall 1', school: 'Business', capacity: 300, status: 1},
        {class: 'Eng Hall 1', school: 'Engineering', capacity: 100,  status: 1},
        {class: 'Scn Hall 1p', school: 'Sciences', capacity: 150,  status: 1},
        {class: 'Art Hall 4', school: 'Arts', capacity: 300,  status: 1},
        {class: 'Eng Hall 4', school: 'Achurial Sciences', capacity: 100,  status: 1} 
    ]

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
            color: "#EEE",
            fontFamily: "curasive",
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
 
        actionsCellStyle: {
            backgroundColor: "#ffccdd",
            color: "#FF00dd"
        },
          
}
  const components ={
              Pagination: props =>
         
         
            <TablePagination
              component="div"
              colSpan={props.colSpan}
              count={props.count}
              rowsPerPage={props.rowsPerPage}
              page={props.page}
              onChangePage={props.onChangePage}
              onChangeRowsPerPage={props.onChangeRowsPerPage}
              classes={{
                root: classes.root,
                toolbar: classes.toolbar,
                caption: classes.caption
                
              }}
            />
            

  }


    return (
        <div>
            <MaterialTable 
            title=''
            data={data}
            columns={columns}
            options={options}
            components={components}
            />
        </div>
    )
}

export default Class;