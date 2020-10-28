console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
  `Salvador`,
  `Sao Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

listaDeDestinos.push(`Teresina`)
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos)