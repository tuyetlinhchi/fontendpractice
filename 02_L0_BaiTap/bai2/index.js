function createBox() {
  const number = document.getElementById("number").value;
  console.log(number);
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const margin = document.getElementById("margin").value;
  //let ul = ``;
  let ul = document.createElement("ul");
  console.log(ul);
  for (let i = 0; i < number; i++) {
    const li = document.createElement("li");
    //ul += `<li></li>`;
    console.log(ul);
    li.style.width = width + "px";
    li.style.height = height + "px";
    li.style.marginRight = margin + "px";
    li.style.marginBottom = margin + "px";

    ul.appendChild(li);
  }
  //document.getElementById("box").innerHTML = ul;
  document.body.appendChild(ul);
}
