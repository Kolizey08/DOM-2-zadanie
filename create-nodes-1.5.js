const div1 = document.createElement('div')
const div2 = document.createElement('div')
const div3 = document.createElement('div')

div1.className = 'red'
div2.className = 'green'
div3.className = 'blue'

div3.textContent = 'я вложен'

div1.append(div2)
div2.append(div3)

console.log(div1);