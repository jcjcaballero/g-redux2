import { Action } from './ndrx-fake/ngrx'
import { incrementadorAction, decrementadorAction, multiplicadorAction, dividirAction, resetAction } from './contador/contador.actions';

function reducer2(state=10, action:Action){

    switch(action.type){

     case 'INCREMENTAR':
         return state += 1;
    case 'DECREMENTAR':
         return state -= 1;
    case 'MULTIPLICAR':
         return state * action.payload;
    case 'DIVIDIR':
         return state / action.payload;
    case 'RESET':
            return state = 0;
      default:
         return state;
    }
  
}

console.log( reducer2(10, incrementadorAction));
console.log( reducer2(10, decrementadorAction));
console.log( reducer2(10, multiplicadorAction));
console.log( reducer2(10, dividirAction));
console.log( reducer2(10, resetAction));