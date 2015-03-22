import * as moveService from "./moveService.js"

let totalTimeSpend = 0;
moveService.empaquetar()
  .then( (time) => {
    totalTimeSpend += time;
    return moveService.desmontar()
  } )
  .then( (time) => {
    totalTimeSpend += time;
    return moveService.traslado()
  } )
  .then( (time) => {
    totalTimeSpend += time;
    return moveService.montar()
  } )
  .then( (time) => {
    totalTimeSpend += time;
    return moveService.colocar()
  } )
  .then( (time) => {
    totalTimeSpend += time;
    console.log( `Con promesas he tardado en mudarme ${totalTimeSpend} seg. en mudarme` );
  } )

