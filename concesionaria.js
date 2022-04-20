const autos = require('./autos')

let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patente){
      const moduloAutos = autos.filter(function(autos){
         return autos.patente == patente
      })
      const resultado = (moduloAutos.length > 0) ? moduloAutos[0]:null
   },  venderAuto:function(patente){
      let autoEncontrado = this.buscarAuto(patente) 
      autoEncontrado.vendido = true 

}
}
console.log(concesionaria.venderAuto("APL123"))
