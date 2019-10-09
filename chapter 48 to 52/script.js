
function show() {
document.getElementById("a").style.display = "table-row";
document.getElementById("b").style.display = "table-row";
document.getElementById("c").style.display = "table-row";
document.getElementById("d").style.display = "table-row";
document.getElementById("e").style.display = "table-row";
document.getElementById("f").style.display = "table-row";
document.getElementById("g").style.display = "table-row";
}
function delRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }
