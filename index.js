
import {buscar,pers } from './personajes.js';
import { getRandomInt, pintarCard, getRandom } from './random.js';

document.getElementById("buscar").addEventListener ("click", buscar,pers);
document.getElementById("random").addEventListener ("click",getRandom,pintarCard,getRandomInt);
