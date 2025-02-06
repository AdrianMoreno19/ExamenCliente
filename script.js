function Productos(nombre, descripcion, cantidad) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
}

//Parte para el frame de donantes 1

let arrayDonantes1 = new Array();
arrayDonantes1.push(new Productos("Escobas", "escoba de limpieza", 5));
arrayDonantes1.push(new Productos("Guantes", "guantes de limpieza", 5));

//Esta funcion sirve para poder mostrar los productos en cada cambio o al principio
function mostrarDatos() {
    for (let x = 0; x < arrayDonantes1.length; x++) {
        let elemPadre = parent.dontantes1.document.getElementById("donanteLimpieza1");
        let elemHijo = document.createElement("li")
        elemHijo.textContent = arrayDonantes1[x].nombre + " " + arrayDonantes1[x].descripcion + " " + arrayDonantes1[x].cantidad;
        elemPadre.appendChild(elemHijo);
    }
}

mostrarDatos();

//Este boton se encarga de incrementar la cantidad deproductos que tenemos
let botonInc = document.getElementById("incremento");
botonInc.addEventListener("click", function () {
    //Recogemos el producto que queremos incrementar y hacemos una condicion para poder incrementar o uno u otro
    let producto = prompt("Introduce el producto que quieres incrementar");
    if (producto === "Escobas") {
        arrayDonantes1[0].cantidad = arrayDonantes1[0].cantidad + 1;
    } else if(producto == "Guantes"){
        arrayDonantes1[1].cantidad = (arrayDonantes1[1].cantidad + 1);
    }
    let elemPadre = parent.dontantes1.document.getElementById("donanteLimpieza1");
    elemPadre.textContent = "";
    mostrarDatos();
});

//Boton decremento se encarga de decrementar la cantidad de los productos
let botonDec = document.getElementById("decremento");
botonDec.addEventListener("click", function () {
    //Tiene el mismo funcionamiento que el incremento, pedimos el nombre y lo decrementamos con la condicion
    let producto = prompt("Introduce el producto que quieres decrementar");
    if (producto === "Escobas") {
        arrayDonantes1[0].cantidad = arrayDonantes1[0].cantidad - 1;
    } else if(producto == "Guantes"){
        arrayDonantes1[1].cantidad = (arrayDonantes1[1].cantidad - 1);
    }
    let elemPadre = parent.dontantes1.document.getElementById("donanteLimpieza1");
    elemPadre.textContent = "";
    mostrarDatos();
});

//Aqui tenemos el boton para poder donar los productos a los almacenes
let botonDonar = document.getElementById("donarProducto");
botonDonar.addEventListener("click", function () {
    //Lo que hacemos es pedir el nombre del producto y el nombre del almacen al que queremos enviarlo
    let producto=prompt("introduce el producto que quieres donar");
    let almacen = prompt("introduce el almacen al que quieres donar almacen1/almacen2");
    //En el primer if lo que hacemos es buscar el producto
    //Lo decrementamos y buscamos el almacen
    if (producto == "Escobas") {
        arrayDonantes1[0].cantidad = arrayDonantes1[0].cantidad - 1;
        let elemPadre = parent.dontantes1.document.getElementById("donanteLimpieza1");
        elemPadre.textContent = "";
        mostrarDatos();
        if (almacen==="almacen1") {
            //Buscamos el almacen y hacemos que nos lo inserte en el frame del almacen
            let elemPadre = parent.almacen1.document.getElementById("alma1");
            let elemhijo = document.createElement("li");
            elemhijo.textContent = arrayDonantes1[0].nombre;
            elemPadre.appendChild(elemhijo);

            //Cuando pulsemos a cualquier elemento lo que nos hace es mostrarnos una ventanita con informacion del producto
            elemhijo.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes1.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes1[0].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes1[0].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes1[0].cantidad + "<br>");
            });
        } else if(almacen === "almacen2"){
            let elemPadre = parent.almacen2.document.getElementById("alma2");
            let elemhijo = document.createElement("li");
            elemhijo.textContent = arrayDonantes1[0].nombre;
            elemPadre.appendChild(elemhijo);

            elemhijo.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes1.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes1[0].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes1[0].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes1[0].cantidad + "<br>");
            });
        }
    } else if(producto === "Guantes"){
        arrayDonantes1[1].cantidad = arrayDonantes1[1].cantidad - 1;
        let elemPadre = parent.dontantes1.document.getElementById("donanteLimpieza1");
        elemPadre.textContent = "";
        mostrarDatos();
        if (almacen==="almacen1") {
            let elemPadre = parent.almacen1.document.getElementById("alma1");
            let elemhijo = document.createElement("li");
            elemhijo.textContent = arrayDonantes1[1].nombre;
            elemPadre.appendChild(elemhijo);

            elemhijo.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes1.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes1[1].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes1[1].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes1[1].cantidad + "<br>");
            });
        } else if(almacen === "almacen2"){
            let elemPadre = parent.almacen2.document.getElementById("alma2");
            let elemhijo = document.createElement("li");
            elemhijo.textContent = arrayDonantes1[1].nombre;
            elemPadre.appendChild(elemhijo);

            elemhijo.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes1.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes1[1].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes1[1].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes1[1].cantidad + "<br>");
            });
        }
    }
});

//Parte del Frame Para donantes 2

let arrayDonantes2 = new Array();
arrayDonantes2.push(new Productos("Cama", "Cama Perfecta", 5));
arrayDonantes2.push(new Productos("Mesa", "Mesa Para Comidas", 5));

//Esta funcion sirve para poder mostrar los productos en cada cambio o al principio

function mostrarDatos2() {
    for (let x = 0; x < arrayDonantes2.length; x++) {
        let elemPadre2 = parent.dontantes2.document.getElementById("donanteLimpieza2");
        let elemHijo2 = document.createElement("li")
        elemHijo2.textContent = arrayDonantes2[x].nombre + " " + arrayDonantes2[x].descripcion + " " + arrayDonantes2[x].cantidad;
        elemPadre2.appendChild(elemHijo2);
    }
}

mostrarDatos2();

let botonInc2 = parent.dontantes2.document.getElementById("incremento");
botonInc2.addEventListener("click", function () {
    let producto = prompt("Introduce el producto que quieres incrementar");
    if (producto === "Cama") {
        arrayDonantes2[0].cantidad = arrayDonantes2[0].cantidad + 1;
    } else if(producto == "Mesa"){
        arrayDonantes2[1].cantidad = (arrayDonantes2[1].cantidad + 1);
    }
    let elemPadre2 = parent.dontantes2.document.getElementById("donanteLimpieza2");
    elemPadre2.textContent = "";
    mostrarDatos2();
});

let botonDec2 = parent.dontantes2.document.getElementById("decremento");
botonDec2.addEventListener("click", function () {
    let producto = prompt("Introduce el producto que quieres decrementar");
    if (producto === "Cama") {
        arrayDonantes2[0].cantidad = arrayDonantes2[0].cantidad - 1;
    } else if(producto == "Mesa"){
        arrayDonantes2[1].cantidad = (arrayDonantes2[1].cantidad - 1);
    }
    let elemPadre2 = parent.dontantes2.document.getElementById("donanteLimpieza2");
    elemPadre2.textContent = "";
    mostrarDatos2();
});

let botonDonar2 = parent.dontantes2.document.getElementById("donarProducto");
botonDonar2.addEventListener("click", function () {
    let producto=prompt("introduce el producto que quieres donar");
    let almacen = prompt("introduce el almacen al que quieres donar almacen1/almacen2");
    if (producto == "Cama") {
        arrayDonantes2[0].cantidad = arrayDonantes2[0].cantidad - 1;
        let elemPadre2 = parent.dontantes2.document.getElementById("donanteLimpieza2");
        elemPadre2.textContent = "";
        mostrarDatos2();
        if (almacen==="almacen1") {
            let elemPadre2 = parent.almacen1.document.getElementById("alma1");
            let elemhijo2 = document.createElement("li");
            elemhijo2.textContent = arrayDonantes2[0].nombre;
            elemPadre2.appendChild(elemhijo2);

            elemhijo2.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes2.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes2[0].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes2[0].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes2[0].cantidad + "<br>");
            });
        } else if(almacen === "almacen2"){
            let elemPadre2 = parent.almacen2.document.getElementById("alma2");
            let elemhijo2 = document.createElement("li");
            elemhijo2.textContent = arrayDonantes2[0].nombre;
            elemPadre2.appendChild(elemhijo2);

            elemhijo2.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes2.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes2[0].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes2[0].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes2[0].cantidad + "<br>");
            });
        }
    } else if(producto === "Mesa"){
        arrayDonantes2[1].cantidad = arrayDonantes2[1].cantidad - 1;
        let elemPadre = parent.dontantes2.document.getElementById("donanteLimpieza2");
        elemPadre.textContent = "";
        mostrarDatos2();
        if (almacen==="almacen1") {
            let elemPadre2 = parent.almacen1.document.getElementById("alma1");
            let elemhijo2 = document.createElement("li");
            elemhijo2.textContent = arrayDonantes2[1].nombre;
            elemPadre2.appendChild(elemhijo2);

            elemhijo2.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes2.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes2[1].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes2[1].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes2[1].cantidad + "<br>");
            });
        } else if(almacen === "almacen2"){
            let elemPadre2 = parent.almacen2.document.getElementById("alma2");
            let elemhijo2 = document.createElement("li");
            elemhijo2.textContent = arrayDonantes2[1].nombre;
            elemPadre2.appendChild(elemhijo2);

            elemhijo2.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes2.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes2[1].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes2[1].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes2[1].cantidad + "<br>");
            });
        }
    }
});

//Parte del Frame para donantes 3

let arrayDonantes3 = new Array();
arrayDonantes3.push(new Productos("judias", "judias Perfecta", 5));
arrayDonantes3.push(new Productos("Macarrones", "Macarrones Para Comidas", 5));

function mostrarDatos3() {
    for (let x = 0; x < arrayDonantes3.length; x++) {
        let elemPadre3 = parent.dontantes3.document.getElementById("donanteLimpieza3");
        let elemHijo3 = document.createElement("li")
        elemHijo3.textContent = arrayDonantes3[x].nombre + " " + arrayDonantes3[x].descripcion + " " + arrayDonantes3[x].cantidad;
        elemPadre3.appendChild(elemHijo3);
    }
}

mostrarDatos3();

let botonInc3 = parent.dontantes3.document.getElementById("incremento");
botonInc3.addEventListener("click", function () {
    let producto = prompt("Introduce el producto que quieres incrementar");
    if (producto === "judias") {
        arrayDonantes3[0].cantidad = arrayDonantes3[0].cantidad + 1;
    } else if(producto == "Macarrones"){
        arrayDonantes3[1].cantidad = (arrayDonantes3[1].cantidad + 1);
    }
    let elemPadre3 = parent.dontantes3.document.getElementById("donanteLimpieza3");
    elemPadre3.textContent = "";
    mostrarDatos3();
});

let botonDec3 = parent.dontantes3.document.getElementById("decremento");
botonDec3.addEventListener("click", function () {
    let producto = prompt("Introduce el producto que quieres decrementar");
    if (producto === "judias") {
        arrayDonantes3[0].cantidad = arrayDonantes3[0].cantidad - 1;
    } else if(producto == "Macarrones"){
        arrayDonantes3[1].cantidad = (arrayDonantes3[1].cantidad - 1);
    }
    let elemPadre3 = parent.dontantes3.document.getElementById("donanteLimpieza3");
    elemPadre3.textContent = "";
    mostrarDatos3();
});

let botonDonar3 = parent.dontantes3.document.getElementById("donarProducto");
botonDonar3.addEventListener("click", function () {
    let producto=prompt("introduce el producto que quieres donar");
    let almacen = prompt("introduce el almacen al que quieres donar almacen1/almacen2");
    if (producto == "judias") {
        arrayDonantes3[0].cantidad = arrayDonantes3[0].cantidad - 1;
        let elemPadre3 = parent.dontantes3.document.getElementById("donanteLimpieza3");
        elemPadre3.textContent = "";
        mostrarDatos3();
        if (almacen==="almacen1") {
            let elemPadre3 = parent.almacen1.document.getElementById("alma1");
            let elemhijo3 = document.createElement("li");
            elemhijo3.textContent = arrayDonantes3[0].nombre;
            elemPadre3.appendChild(elemhijo3);

            elemhijo3.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes3.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes3[0].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes3[0].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes3[0].cantidad + "<br>");
            });
        } else if(almacen === "almacen2"){
            let elemPadre3 = parent.almacen2.document.getElementById("alma2");
            let elemhijo3 = document.createElement("li");
            elemhijo3.textContent = arrayDonantes3[0].nombre;
            elemPadre3.appendChild(elemhijo3);

            elemhijo3.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes3.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes3[0].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes3[0].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes3[0].cantidad + "<br>");
            });
        }
    } else if(producto === "Macarrones"){
        arrayDonantes3[1].cantidad = arrayDonantes3[1].cantidad - 1;
        let elemPadre = parent.dontantes3.document.getElementById("donanteLimpieza3");
        elemPadre.textContent = "";
        mostrarDatos3();
        if (almacen==="almacen1") {
            let elemPadre3 = parent.almacen1.document.getElementById("alma1");
            let elemhijo3 = document.createElement("li");
            elemhijo3.textContent = arrayDonantes3[1].nombre;
            elemPadre3.appendChild(elemhijo3);

            elemhijo3.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes3.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes3[1].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes3[1].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes3[1].cantidad + "<br>");
            });
        } else if(almacen === "almacen2"){
            let elemPadre3 = parent.almacen2.document.getElementById("alma2");
            let elemhijo3 = document.createElement("li");
            elemhijo3.textContent = arrayDonantes3[1].nombre;
            elemPadre3.appendChild(elemhijo3);

            elemhijo3.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes3.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes3[1].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes3[1].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes3[1].cantidad + "<br>");
            });
        }
    }
});

//Parte del Frame para donantes 4

let arrayDonantes4 = new Array();
arrayDonantes4.push(new Productos("Camiseta", "Camiseta Perfecta", 5));
arrayDonantes4.push(new Productos("Sudadera", "Sudadera Perfecta", 5));

function mostrarDatos4() {
    for (let x = 0; x < arrayDonantes4.length; x++) {
        let elemPadre4 = parent.dontantes4.document.getElementById("donanteLimpieza4");
        let elemHijo4 = document.createElement("li")
        elemHijo4.textContent = arrayDonantes4[x].nombre + " " + arrayDonantes4[x].descripcion + " " + arrayDonantes4[x].cantidad;
        elemPadre4.appendChild(elemHijo4);
    }
}

mostrarDatos4();

let botonInc4 = parent.dontantes4.document.getElementById("incremento");
botonInc4.addEventListener("click", function () {
    let producto = prompt("Introduce el producto que quieres incrementar");
    if (producto === "Camiseta") {
        arrayDonantes4[0].cantidad = arrayDonantes4[0].cantidad + 1;
    } else if(producto == "Sudadera"){
        arrayDonantes4[1].cantidad = (arrayDonantes4[1].cantidad + 1);
    }
    let elemPadre4 = parent.dontantes4.document.getElementById("donanteLimpieza4");
    elemPadre4.textContent = "";
    mostrarDatos4();
});

let botonDec4 = parent.dontantes4.document.getElementById("decremento");
botonDec4.addEventListener("click", function () {
    let producto = prompt("Introduce el producto que quieres decrementar");
    if (producto === "Camiseta") {
        arrayDonantes4[0].cantidad = arrayDonantes4[0].cantidad - 1;
    } else if(producto == "Sudadera"){
        arrayDonantes4[1].cantidad = (arrayDonantes4[1].cantidad - 1);
    }
    let elemPadre4 = parent.dontantes4.document.getElementById("donanteLimpieza4");
    elemPadre4.textContent = "";
    mostrarDatos4();
});

let botonDonar4 = parent.dontantes4.document.getElementById("donarProducto");
botonDonar4.addEventListener("click", function () {
    let producto=prompt("introduce el producto que quieres donar");
    let almacen = prompt("introduce el almacen al que quieres donar almacen1/almacen2");
    if (producto == "Camiseta") {
        arrayDonantes4[0].cantidad = arrayDonantes4[0].cantidad - 1;
        let elemPadre4 = parent.dontantes4.document.getElementById("donanteLimpieza4");
        elemPadre4.textContent = "";
        mostrarDatos4();
        if (almacen==="almacen1") {
            let elemPadre4 = parent.almacen1.document.getElementById("alma1");
            let elemhijo4 = document.createElement("li");
            elemhijo4.textContent = arrayDonantes4[0].nombre;
            elemPadre4.appendChild(elemhijo4);

            elemhijo4.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes4.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes4[0].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes4[0].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes4[0].cantidad + "<br>");
            });
        } else if(almacen === "almacen2"){
            let elemPadre4 = parent.almacen2.document.getElementById("alma2");
            let elemhijo4 = document.createElement("li");
            elemhijo4.textContent = arrayDonantes4[0].nombre;
            elemPadre4.appendChild(elemhijo4);

            elemhijo4.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes4.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes4[0].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes4[0].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes4[0].cantidad + "<br>");
            });
        }
    } else if(producto === "Sudadera"){
        arrayDonantes4[1].cantidad = arrayDonantes4[1].cantidad - 1;
        let elemPadre = parent.dontantes4.document.getElementById("donanteLimpieza4");
        elemPadre.textContent = "";
        mostrarDatos4();
        if (almacen==="almacen1") {
            let elemPadre4 = parent.almacen1.document.getElementById("alma1");
            let elemhijo4 = document.createElement("li");
            elemhijo4.textContent = arrayDonantes4[1].nombre;
            elemPadre4.appendChild(elemhijo4);

            elemhijo4.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes4.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes4[1].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes4[1].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes4[1].cantidad + "<br>");
            });
        } else if(almacen === "almacen2"){
            let elemPadre4 = parent.almacen2.document.getElementById("alma2");
            let elemhijo4 = document.createElement("li");
            elemhijo4.textContent = arrayDonantes4[1].nombre;
            elemPadre4.appendChild(elemhijo4);

            elemhijo4.addEventListener("click", function () {
                let ventana = window.open("", arrayDonantes4.nombre, "width=300, height=300");
                ventana.document.write("Nombre: " + arrayDonantes4[1].nombre + "<br>");
                ventana.document.write("Descripcion: " + arrayDonantes4[1].descripcion + "<br>");
                ventana.document.write("Cantidad: " + arrayDonantes4[1].cantidad + "<br>");
            });
        }
    }
});