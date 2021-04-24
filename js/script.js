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

function guardarDatos() {   //------------------Funcion para llamar datos del archivo JSON ---------
    fetch("data/datos.json")
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("datos", JSON.stringify(data))
            llenarTabla()
        })
}
guardarDatos()

function llenarTabla() {
    const tabla = document.getElementById("tabla")
    tabla.textContent = ""
    var data = localStorage.getItem('datos')
    data = JSON.parse(data)
    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr")
        const tdNumero = document.createElement("td")
        tdNumero.textContent = data[i].numero
        tr.appendChild(tdNumero)
        const tdCarta = document.createElement("td")
        tdCarta.textContent = data[i].carta
        tr.appendChild(tdCarta)
        const tdCantidad = document.createElement("td")
        tdCantidad.textContent = data[i].cantidad
        tr.appendChild(tdCantidad)
        tabla.appendChild(tr)
    }
}

document.getElementById('guardar').onclick = guardarCartaNueva

function guardarCartaNueva() {
    var numero = document.querySelector('#numero').value
    var carta = document.querySelector('#carta').value
    var datos = localStorage.getItem('datos')
    datos = JSON.parse(datos)

    if (numero == "" || numero * 0 != 0) {
        alert('Digite un numero')
        return
    } else if (carta == "") {
        alert('Digite el nombre de la carta')
        return
    }

    var dato = { numero: numero, carta: carta, cantidad: 0 }

    datos.push(dato)

    localStorage.setItem('datos', JSON.stringify(datos))
    llenarTabla()
}

$(".btn-carta").click(function () {
    var datos = localStorage.getItem('datos');
    datos = JSON.parse(datos);
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].numero == this.dataset.carta) {
            datos[i].cantidad++;
        }
    }
    localStorage.setItem('datos', JSON.stringify(datos));
    llenarTabla()
});
