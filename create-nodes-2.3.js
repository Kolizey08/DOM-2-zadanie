const obj = [
  {
    name: "Google",
    url: "https://google.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "intocode",
    url: "https://intocode.ru",
  },
];

const ul = document.createElement('ul')

function rinder(arr) {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.href = arr[i].url
        a.textContent = arr[i].name
        ul.append(li)
        li.append(a)

    }
    return ul
}
console.log(rinder(obj));
document.body.append(ul)