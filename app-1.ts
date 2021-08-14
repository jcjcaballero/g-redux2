//Acciones  
//Segundo comentario
//Este es el comentario de la ramma feature a partir de la develop que estab subida.


interface Action{
    type:string;
    payload?: any;
   }

function reducer(state=10, action:Action){

    switch(action.type){

     case 'INCREMENTAR':
         return state += 1;
    case 'DECREMENTAR':
         return state -= 1;
    case 'MULTIPLICAR':
         return state * action.payload;
    case 'DIVIDIR':
         return state / action.payload;
      default:
         return state;
    }
}


//console.log(reducer(10, incrementadorAction)); // 11

//console.log(reducer(10, decrementadorAction)); // 9

//console.log(reducer(10, multiplicadorAction)); // 20

// console.log(reducer(10, dividirAction)); // 5