function persona(o,e){this.nombre=o||"Anonimo",this.edad=e||0}persona.prototype.getNombre=function(){return this.nombre},persona.prototype.setNombre=function(o){this.nombre=o},persona.prototype.setEdad=function(o){this.edad=o},persona.prototype.getNombreEdad=function(){return this.nombre+" tiene "+this.edad+" años"};