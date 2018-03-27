
function echo(msg) {
  window.alert("Echoing: "+ msg);
}

function changeIt() {
  var el = document.getElementById("Welcome");
  el.innerHTML = "Goodbye world!";
  el.style.backgroundColor = "#FFCCCC";

  var listItems = document.getElementsByTagName("li");
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "#00FF00";
  }
}

function sortList(listId) {
  var list = document.getElementById(listId);
  var c = list.childNodes;

  var listItemsHTML = new Array();
  for (var i = 0; i < c.length; i++) {
    if (c[i].nodeName === "LI") {
      listItemsHTML.push(c[i].innerHTML);
    }
  }

  listItemsHTML.sort();
  list.innerHTML = "";
  for(var i = 0; i < listItemsHTML.length; i++) {
    list.innerHTML += "<li>" + listItemsHTML[i] + "</li>";
  }
}

function addInfo() {
  document.write("<p>URL: " + document.URL + "</p>");
  document.write("<p>Date: " + Date() + "</p>");

}

function removeTableRatings(id) {
  var t = document.getElementById(id);

  <!-- Neat for loop shenanigans -->
  for(var i = 1, n = t.rows.length; i < n; i++) {
    for(var j = 1, m = t.rows[i].cells.length; j < m; j++) {
      console.log(t.rows[i].cells[j].innerHTML);
      if (t.rows[i].cells[j].innerHTML < 3) {
        t.deleteRow(i);
        n -= 1;
        i -= 1;
      }
    }
  }
}
