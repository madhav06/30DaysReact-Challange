import logo from "./logo.svg";
import "./App.css";
import MaterialTable from "material-table";
import { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function App() {
  const columns = [
    {
      title: "Subjects",
      field: "subject",
      filtering: false,
      defaultGroupOrder: 1,
      cellStyle: { color: "blue" },
    },
    {
      title: "Students",
      field: "student",
      filterPlaceholder: "Filter by Name",
      defaultGroupOrder: 0,
    },
    {
      title: "Marks",
      field: "mark",
      defaultSort: "asc",
      searchable: false,
      filterPlaceholder: "Filter by Marks",
      defaultGroupOrder: 2,
    },
    {
      title: "Remarks",
      field: "remark",
      filterPlaceholder: "Filter by Remarks",
      grouping: false,
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
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              console.log(newRow);
              setTableData([...tableData, newRow]);
              setTimeout(() => resolve(), 500);
            }),

          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updateData = [...tableData];
              updateData[oldRow.tableData.id] = newRow;
              setTableData(updateData);
              console.log(newRow, oldRow);
              setTimeout(() => resolve(), 500);
            }),

          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updateData = [...tableData];
              updateData.splice(selectedRow.tableData.id, 1);
              console.log(updateData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        omSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          // sorting
          sorting: true,
          search: false,
          // searchText: "Mithila Polikar",
          searchFieldAlignment: "left",
          searchAutoFocus: true,

          //filtering
          filtering: false,

          //pagination
          paging: true,
          pageSizeOptions: [10, 20, 30, 50, 100],

          //export in react-table
          exportButton: true,
          exportAllData: true,
          exportFileName: "StudentDetails",
          actionsColumnIndex: -1,

          // checkboxes
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          selectionProps: (rowData) => ({
            disabled: true,
            color: "primary",
          }),
          grouping: true,
          rowStyle: (data, index) =>
            index % 2 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "green", fontStyle: "italic" },
        }}
        title="Student Marksheet"
        icons={{
          Export: () => <DownloadIcon />,
          Add: () => <AddIcon />,
          Delete: () => <DeleteIcon />,
          Edit: () => <EditIcon />,
          ch: () => <DoneIcon />,
          Clear: () => <CloseIcon />,
          NextPage: () => <ArrowForwardIosIcon />,
          PrevPage: () => <ArrowBackIosIcon />,
        }}
      />
    </div>
  );
}

export default App;
