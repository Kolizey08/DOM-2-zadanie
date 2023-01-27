const ul = document.createElement("ul");
const arr = ["html", "css", "js"];

function rinder(array) {
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    li.textContent = array[i];
    ul.append(li);
    document.body.append(ul);
  }
  return ul;
}

console.log(rinder(arr))
