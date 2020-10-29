console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
  `Salvador`,
  `Sao Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

const idadeComprador = 10;
const estaAcompanhado = true;

console.log('Destinos possiveis');
console.log(listaDeDestinos);

if(idadeComprador >= 18) {
  console.log('Comprador maior de idade');
  listaDeDestinos.splice(1,1);
}else{
  if(estaAcompanhado){
    console.log('Comprador esta acompanhado.');
    listaDeDestinos.splice(1,1);
  }else{
    console.log('Não é maior de Idade e não posso vender.');
  }
}

console.log(listaDeDestinos);
