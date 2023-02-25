const tableData = [];

const newRowBtn = document.querySelector(".new-row-btn");
const saveBtn = document.querySelector(".save-btn");
const newTableRow = document.querySelector(".new-row");
const idCell = document.querySelector(".id");
const studentNameInput = document.querySelector(".student-name");
const studentRollInput = document.querySelector(".student-roll");
const subjectInput = document.querySelector(".subject");
const marksInput = document.querySelector(".marks");
const markedByInput = document.querySelector(".marked-by");
const editableTable = document.querySelector(".editable-table tbody");

let idCount = 0;

newRowBtn.addEventListener("click", function() {
  idCount++;
  idCell.textContent = idCount;
  newTableRow.style.display = "table-row";
});

saveBtn.addEventListener("click", function() {
  if (studentNameInput.value === "" || studentRollInput.value === "" || subjectInput.value === "" || marksInput.value === "" || markedByInput.value === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (isNaN(marksInput.value)) {
    alert("Marks must be a number.");
    return;
  }

  if (!markedByInput.value.includes("@")) {
    alert("Marked by must be a valid email address.");
    return;
  }

  const rowData = {
    id: idCount,
    student_name: studentNameInput.value,
    student_roll: studentRollInput.value,
    subject: subjectInput.value,
    marks: parseInt(marksInput.value),
    markedBy: markedByInput.value
  };

  tableData.push(rowData);

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${rowData.id}</td>
    <td>${rowData.student_name}</td>
    <td>${rowData.student_roll}</td>
    <td>${rowData.subject}</td>
    <td>${rowData.marks}</td>
    <td>${rowData.markedBy}</td>
  `;

  editableTable.appendChild(newRow);

  newTableRow.style.display = "none";

  console.log(tableData);
});
