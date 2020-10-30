console.log(`\n Trabalhando com listas`);

const listaDeDestinos = new Array(
  `Salvador`,
  `Sao Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

const idadeComprador = 20;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = 'Salvador';

console.log('\n Destinos possiveis');
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado === true;

let contador = 0;
let destinoExiste = false;
// while(contador < 4){
  
//   if(listaDeDestinos[contador] == destino) {
//     destinoExiste = true;
//     break;
//   }
//   // console.log(listaDeDestinos[contador])
//   contador += 1;
// }

for(contador; contador < 4; contador++){
  if(listaDeDestinos[contador] == destino){
    destinoExiste = true;
    break;
  }
}

console.log('Destino existe: ', destinoExiste)


if(podeComprar && destinoExiste) {
  console.log('Boa viagem');
}else {
  console.log('Desculpe tivemos um erro!')
}