const cuadro = document.getElementById("cuadro")
for (let index = 1; index < 14; index++) {
    const div = document.createElement("div")
    const img = document.createElement("img")
    img.setAttribute("src", 'img/' + index + '.png')
    div.setAttribute("data-carta", index)
    div.setAttribute("id", "btn-carta")
    div.setAttribute("class", "btn-carta col")
    div.appendChild(img)
    cuadro.appendChild(div)
}
