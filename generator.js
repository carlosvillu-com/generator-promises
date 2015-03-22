import co from "co";
import * as moveService from "./moveService";


co(function* (){
  let duracionMudanza = 0;

  duracionMudanza += yield moveService.empaquetar()
  duracionMudanza += yield moveService.desmontar()
  duracionMudanza += yield moveService.traslado()
  duracionMudanza += yield moveService.montar()
  duracionMudanza += yield moveService.colocar()

  return duracionMudanza;
}).then( (duracionMudanza) => console.log( `Con generadores he tardado ${duracionMudanza} seg. en mudarme` ) );

