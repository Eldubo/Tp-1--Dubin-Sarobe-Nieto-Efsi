# Tp Efsi-1--Dubin-Sarobe-Nieto
 Formulario con verificación

Interfaz: 
Para hacer la pagina primero pensamos en como debería estar estructurada. Empezamos haciendo el HTML y diseñando la base del proyecto. Luego utilizamos JavaScript para poder hacer la pagina funcional y que responda a lo que necesitamos que pase. Finalmente, una vez que teníamos la página funcionando, utilizamos CSS para darle color al formulario. Además creamos un botón para cambiar de "modo claro" a "modo oscuro" y en este ultimo cambiamos los colores cálidos por unos más apagados. 
Verificaciones:
Para todos los campos hicimos que haga la validación cada vez que agregue un nuevo caracter. 

Validamos para el campo Nombre que el usuario ingrese solo letras (aplicando .test sobre la variable con expresión que acepta todas las letras en mayúscula y minúscula), que tenga al menos tres caracteres. 
Para el campo Email que haya una combinación de letras y números, luego un @, más caracteres, un punto y entre 2 y 6 caracteres más. Lo hicimos aplicando .test sobre la variable con expresión que acepta todas las letras y los números). No usamos el input type email para hacer la validación con js.
Para la contraseña validamos que tenga un número, una mayúscula y un caracter especial (esto último con un .test, lo anterior igualando a un LowerCase). 

Desafíos: 
Hacer funcionar el modo oscuro y claro 

Mejoras: 
Hacer más extras 
Validar si el dominio del mail es real
Que el nombre empiece con mayúscula
