import logo from "./logo.svg";
import "./App.css";
import MaterialTable from "material-table";
import { useState } from "react";

function Crud() {
  const columns = [
    { title: "Subjects", field: "subject" },
    {
      title: "Students",
      field: "student",
    },
    {
      title: "Marks",
      field: "mark",
    },
    {
      title: "Remarks",
      field: "remark",
      filterPlaceholder: "Filter by Remarks",
    },
  ];
  const [tableData, setTableData] = useState([]);

  return (
    <div className="App">
      <h1 align="center">React App</h1>
      <h4 align="center">School Management App using Material-Table</h4>

      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: () => new Promise((resolve, reject) => {}),
        }}
        title="Student Marksheet"
        options={{
          // sorting
          sorting: false,
          searchFieldAlignment: "right",

          //filtering

          //pagination

          //export in react-table
          //export in react-table
          exportButton: true,
          exportAllData: true,
          exportFileName: "StudentDetails",
        }}
      />
    </div>
  );
}

export default Crud;
