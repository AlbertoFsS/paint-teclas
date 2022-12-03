var teclas={UP : 38,DOWN:40,LEFT: 37,RIGHT: 39};

document.addEventListener("keyup",dibujarTeclado);  
var cuadrito = document.getElementById("cuadro");
var papel = cuadrito.getContext("2d");
var x= 150;
var y= 150;


dibujarlinea(149, 149,151,151,papel);


function dibujarlinea( x1, y1, x2, y2, lienzo)
{
lienzo.beginPath();
lienzo.lineWidth=3;
lienzo.moveTo(x1, y1);
lienzo.lineTo(x2, y2);
lienzo.stroke();
lienzo.closePath();
}

var movimiento= 10;


function dibujarTeclado(evento){
  
    switch(evento.keyCode){
        case teclas.UP:
            dibujarlinea(x, y, x, y-movimiento,papel);
            y= y - movimiento;
            console.log("UP");
            break;
        case teclas.DOWN:
            dibujarlinea(x, y, x, y+movimiento,papel);
            y= y + movimiento;
            console.log("DOWN");
            break;
        case teclas.LEFT:
            dibujarlinea(x, y, x-movimiento,y,papel);
            x= x - movimiento;
            console.log("LEFT");
            break;
        case teclas.RIGHT:
            dibujarlinea(x, y, x+movimiento,y,papel);
            x= x + movimiento;
            console.log("RIGHT");
            break;
        default:
            console.log("otra tecla");
    }
}