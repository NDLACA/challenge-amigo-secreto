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
  -
* Se llamo la primera función, **agregar amigo**, con el fin de habilitar el input del HTML para que el usuario pueda agregar los nombres de las personas que van a participar en el juego,
  añadiendo un push para que a medida que se agregue un nombre, este se sume a la lista del primer _array_ y una alerta para que no sea posible añadir un campo en blanco.
* Para la segunda función, **actualizar lista**, se llama la lista creada en el HTML para que cuando el usuario agregue un nombre, este apareza visible en la página, justo cuando se da clic en el botón "añadir".
* En la tercera función, **limpar caja**, se buscó que la barra de texto en el HTML (_escribe un nombre_), se limpiara automanticamente cuando se agregaba un nombre y diera paso para añadir el siguiente concursante. 



## Autores
Nataly Cubillos Arias - Alumna ONE 
