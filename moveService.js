let _moveService = function(){
  return function(){
    let timeSpend = (Math.random() * 5) + 1
    return new Promise( function( resolve, reject ){
      setTimeout( resolve.bind( resolve, timeSpend ), timeSpend)
    } );
  }
}

export var empaquetar = _moveService()
export var desmontar = _moveService()
export var traslado = _moveService()
export var montar = _moveService()
export var colocar = _moveService()
