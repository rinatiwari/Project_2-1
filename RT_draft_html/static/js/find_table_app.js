// from data.js
var tableData = data;


// Get references to the elements of the DOM
var tbody = d3.select("tbody")
function buildTable(data){
    tbody.html("");
    data.forEach((dataRow) => {
        var row =tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
            cell.text(val);
    });
});
}

//build table
buildTable(tableData)

// find data

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("input");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
