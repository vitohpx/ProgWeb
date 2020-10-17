var corpo = document.getElementById("corpo");
var div = document.createElement("div");

for (let i = 1; i <= 10; i++) {

  var tabela = document.createElement("table");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  
  td.id = "cabecalho";
  td.innerHTML = `Produtos de ${i}`;

  td.colSpan = 2;
  tr.appendChild(td);
  tabela.appendChild(tr);
  tr.appendChild(td);

  for (let j = 0; j <= 10; j++) {

    var linhas = document.createElement("tr");
    var x = document.createElement("td");
    x.innerHTML = `${i} x ${j}`;

    var y = document.createElement("td");
    y.innerHTML = `${i * j}`;

    linhas.appendChild(x);
    linhas.appendChild(y);

    tabela.appendChild(linhas);
  }
  
  div.appendChild(tabela);
  corpo.appendChild(div);

}
