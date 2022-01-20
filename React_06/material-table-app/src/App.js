import logo from "./logo.svg";
import "./App.css";
import MaterialTable from "material-table";
import { useState } from "react";

function App() {
  const columns = [
    { title: "Subjects", field: "subject", filtering: false },
    {
      title: "Students",
      field: "student",
      filterPlaceholder: "Filter by Name",
    },
    {
      title: "Marks",
      field: "mark",
      defaultSort: "asc",
      searchable: false,
      filterPlaceholder: "Filter by Marks",
    },
    {
      title: "Remarks",
      field: "remark",
      filterPlaceholder: "Filter by Remarks",
    },
  ];

  const [tableData, setTableData] = useState([
    {
      subject: "Gujarati",
      student: "Kantibhai Dave",
      mark: "47",
      remark: "C",
    },

    {
      subject: "Gujarati",
      student: "Mithila Polikar",
      mark: "100",
      remark: "A++",
    },
    {
      subject: "Gujarati",
      student: "Khushboo Pawar",
      mark: "84",
      remark: "A",
    },

    {
      subject: "Mathematics",
      student: "Kantibhai Dave",
      mark: "62",
      remark: "B",
    },
    {
      subject: "Mathematics",
      student: "Mohanbhai Rawat",
      mark: "79",
      remark: "B+",
    },

    {
      subject: "Mathematics",
      student: "Mithila Polikar",
      mark: "93",
      remark: "A+",
    },

    {
      subject: "Mathematics",
      student: "Khushboo Pawar",
      mark: "75",
      remark: "A+",
    },

    {
      subject: "Physics",
      student: "Kantibhai Dave",
      mark: "59",
      remark: "C+",
    },

    {
      subject: "Physics",
      student: "Mithila Polikar",
      mark: "85",
      remark: "A",
    },

    {
      subject: "Physics",
      student: "Khushboo Pawar",
      mark: "92",
      remark: "A+",
    },
  ]);

  return (
    <div className="App">
      <h1 align="center">React App</h1>
      <h4 align="center">School Management App using Material-Table</h4>

      <MaterialTable
        columns={columns}
        data={tableData}
        title="Student Marksheet"
        options={{
          // sorting
          sorting: true,
          search: true,
          searchText: "Mithila Polikar",
          searchFieldAlignment: "left",
          searchAutoFocus: true,

          //filtering
          filtering: true,

          //pagination
          paging: true,
          pageSizeOptions: [10, 20, 30, 50, 100],
        }}
      />
    </div>
  );
}

export default App;
