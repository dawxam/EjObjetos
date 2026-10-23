function Ordenador(marca, modelo, ram, discoDuro, pulgadas) {
  this.marca = marca;
  this.modelo = modelo;
  this.ram = (ram !== undefined) ? ram : 4;
  this.discoDuro = (discoDuro !== undefined) ? discoDuro : 512;
  this.pulgadas = (pulgadas !== undefined) ? pulgadas : 17;
}

Ordenador.prototype.toString = function() {
  return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", RAM: " + this.ram + "GB, Disco Duro: " + this.discoDuro + "GB, Pulgadas: " + this.pulgadas;
};

function Portatil(marca, modelo, ram, discoDuro, pulgadas, autonomia) {
  Ordenador.call(this, marca, modelo, ram !== undefined ? ram : 4, discoDuro !== undefined ? discoDuro : 256, pulgadas !== undefined ? pulgadas : 12);
  this.autonomia = (autonomia !== undefined) ? autonomia : 4;
}

Portatil.prototype = Object.create(Ordenador.prototype);
Portatil.prototype.constructor = Portatil;

Portatil.prototype.toString = function() {
  return Ordenador.prototype.toString.call(this) + ", Autonomia: " + this.autonomia + " horas";
};

let contenedor2 = document.createElement("div");
contenedor2.style.fontFamily = "Arial, sans-serif";
contenedor2.style.padding = "10px";

let pc1 = new Ordenador("HP", "Pavilion");
let pc2 = new Ordenador("Lenovo", "ThinkPad", 16, 1024, 15);
let port1 = new Portatil("Apple", "MacBook");
let port2 = new Portatil("Asus", "ZenBook", 8, 512, 14, 8);

let resultados2 = [
  "Ordenador 1: " + pc1.toString(),
  "Ordenador 2: " + pc2.toString(),
  "Portatil 1: " + port1.toString(),
  "Portatil 2: " + port2.toString()
];

resultados2.forEach(function(texto) {
  let p = document.createElement("p");

  p.textContent = texto;
  contenedor2.appendChild(p);
});

document.body.appendChild(contenedor2);