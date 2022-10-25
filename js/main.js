alert("Bienvenido a ventas de articulos varios.\n\nEscoja el articulo que desee llevar de cada categoría \n indicando el # número del producto que se lista en las opciones.\n\nAl final se le indicará el valor total a pagar según lo escogido.")

//FUNCIONES 🎨

const categorias = (a,b,c,d,e) => {
    let opcion
    while (opcion != "1" && opcion != "2" && opcion != "3" && opcion != "4"){
        opcion = prompt(a).toString()
    
        switch (opcion) { 
            case "1":
                alert(b)
                break;
            case "2":
                alert(c)
                break;
            case "3":
                alert(d)
                break;
            case "4":
                alert('Usted no escogío ningún producto')
                break;
            default:
                alert('Articulo incorrecto. \nPor favor ingrese un número del 1 al 4 según lo que desee escoger.');
                break;
        }
    }
    return opcion
}



const precios = (a,b,c,d) => {
    let valor
    if (a=='1') {
        valor=b;
    } else if (a=='2') {
        valor=c;
    } else if (a=='3') {
        valor=d;
    } else if (a=='4') {
        valor=0
    } else {
        valor=0
    }
    return valor
}

// LLAMADOS 😄

let categoria1 = categorias(
    'Categoría Electrodomesticos \n\nEscriba el # del articulo que desea llevar:\n#1 teclado $3.000\n#2 mouse $1.700\n#3 mousepad $1.100.\n#4 Ninguno',
    'Usted escogió teclado por $3000',
    'Usted escogió mouse por $1.700',
    'Usted escogió mousepad por $1.100',
    );



let categoria2 = categorias(
    'Categoría Celulares\n\nEscribra el # del articulo que desea llevar:\n#1 Silla Acer $100.500\n#2 Auriculares Sony $3.780\n#3 Ipad  $90.000\n#4 Ninguno',
    'Usted escogió Silla Acer por $100.500',
    'Usted escogió Auriculares Sony por $3.780',
    'Usted escogió Ipad por $90.000',
    );



let categoria3 = categorias(
    'Categoría consolas\n\nEscribra el # del articulo que desea llevar:\n#1 Nitendo $5.700\n#2 Stray $7.500\n#3 Fifa 23 $20.000\n#4 Ninguno',
    'Usted escogió Nitendo por $5.700',
    'Usted escogió Stray por $7.500',
    'Usted escogió Fifa 23 por $20.000',
    );


let articulo1 = precios(
    categoria1,
    3000,
    1750,
    1100
    );

let articulo2 = precios(
    categoria2,
    100500,
    3780,
    90000
    );

let articulo3 = precios(
    categoria3,
    5700,
    7500,
    20000
    );

let total = articulo1 + articulo2 + articulo3;

//console.log(total)

if (total>0) {
    alert("El total a pagar por tus articulos seleccionados es: $" + total + "\nGracias por elegirnos y confiar en nosotros.\n¡Nos vemos 🎁!");    
} else {
    alert("Vemos que no te interesó ningún articulo.\nGracias por visitarnos.");
}