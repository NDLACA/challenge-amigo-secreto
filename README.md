# JUEGO PARA SORTEAR TU AMIGO SECRETO

_Con esta herramienta, vas a poder sortear de forma sencilla la lista de tus amigos, aquellos quienes van a participar en intercambio de regalos para fechas especiales como Navidad o Amor y Amistad._

## ¿Cómo funciona? 	📋
Para realizar el sorteo efectivo del amigo secreto que te corresponde, debes seguir estos pasos:
1. En la barra de texto, vas a ir ingresando uno a uno, los nombres de los participantes.
2. Una vez hayas agregado a todos los concursantes, puedes iniciar el **sorteo.**
3. Para empezar a sortear al amigo secreto, debes dar clic en el botón naranja **sortear amigo.**
4. Te aparecera en color verde, el nombre del amigo secreto que te corresponde y este, desaparecerá de la lista.
5. Deberás realizar el mismo procedimiento para todos los amigos hasta haber sorteado todos los concursantes.
6. Si deseas jugar nuevamente, una vez sorteada toda la lista, se reiniciará el juego.

## ¿Qué se realizo detrás - js? 📌

* Se generaron dos **_array_**: El primero para almacenar los nombres de los participantes que se van a ir agregando a la lista y el segundo para que se almacenen los nombres de las personas que ya van saliendo en el sorteo y de esta manera, **no se repitan.**
  
* Se llamo la primera función, **agregar amigo**, con el fin de habilitar el input del HTML para que el usuario pueda agregar los nombres de las personas que van a participar en el juego,
  añadiendo un push para que a medida que se agregue un nombre, este se sume a la lista del primer _array_ y una alerta para que no sea posible añadir un campo en blanco.

* Para la segunda función, **actualizar lista**, se llama la lista creada en el HTML para que cuando el usuario agregue un nombre, este apareza visible en la página, justo cuando se da clic en el botón "añadir".
  
* En la tercera función, **limpar caja**, se buscó que la barra de texto en el HTML (_escribe un nombre_), se limpiara automanticamente cuando se agregaba un nombre y diera paso para añadir el siguiente concursante.

* La cuarta función, el curpo del juego, **sortear amigo**, se creó con:
  - Una alerta para informar que no se puede hacer un sorteo sin ningún participante o con menos de dos.
  - Activando el inicio del juego, para que así, se pueda hacer un proceso completo de sorteo.
  - Para que el sistema pueda seleccionar el nombre entre la lista de amigos, se declaro la variable de _indice aleatorio_, para que se genere aleatoriamente un número entero entre la medida de la lista.
  - Con el indice, se busque en el _array_ la posición y seleccione el nombre en ese puesto y se extrae con la variable **amigo sorteado.** El cual con **_push_** se añade a la lista de amigos sorteados para que 
    ese concursante no vuelva a salir entre el sorteo.
  - De nuevo, trayecto del HTML con **_document.querySelector_** se muestre en pantalla el nombre que se sorteo de la lista de amigos.
  - Y una vez finalizado el sorteo de todos los participantes, se muestra una alerta con la finalización y se *reinicia el juego*
 
* Por último, se declara la quinta función, **reiniciar juego**, para que la herrramienta, una vez finalizado el proceso de sorteo, vuelva a sus valores iniciales y permita agregar una nueva lista. 



## Autores
Nataly Cubillos Arias - Alumna ONE 
