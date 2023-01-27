const arr = ["html", "css", "js"]

const ul = document.createElement('ul')


for(let i = 0; i < arr.length; i++) {
    const li = document.createElement('li')
    li.textContent = arr[i] 
    ul.append(li)
}

document.body.append(ul)

console.log(ul);