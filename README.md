# Prueba Front-End Envia.com

# Resultados:
Para el corto tiempo que tuve para realizar esto siento que pude haber hecho mas, pero simplemente me atore un poco con el componente de la tabla de ordenes ya que tuve varios problemas con el fetch del API y mas cuando queria meterme a ver los detalles, no me dejaba por temas del CORS.

Igual con mas tiempo pude haber creado mis propios estilos de tailwind. Ya que cuestan los pre-creados.


# Descripción:
Realiza una interfaz de usuario con un diseño que tenga buena usabilidad, sea
intuitivo y cumpla con las especificaciones que se describen a continuación:

  1. Crea una tabla de pago donde se listarán los productos de la orden de compra.
  2. Crea un formulario donde se pueda agregar productos a la tabla antes
mencionada.


# Puntos a calificar:
  ● Limpieza y estructura del código
  ● Diseño de la página realizada.
  ● Cumplimiento de la funcionalidad y especificaciones mencionadas


# Especificaciones:
1. Para obtener la información de la orden de compra, así como los productos,
deberás realizar una petición (request) usando el método GET a la siguiente
URL: https://eshop-deve.herokuapp.com/api/v2/orders
2. Enlista las órdenes y al hacer click podemos ver el detalle de cada una.



3. Es importante que tenga en cuenta que para acceder al API deberá enviar el
token en el Authorization header de la petición: *Por seguridad no esta*
Obtendrás un JSON con la información de la orden y deberá desplegar los
productos en la tabla del punto 1 de la descripción del examen, los cuales se
encuentran en el atributo items del JSON.
4. Los campos que deben considerar para mostrar los productos son:
   
  ● Sku
  ● Name
  ● Quantity
  ● Price
5. También deberás indicar en alguna parte al principio de la página web el
número de la orden indicado en el atributo number.

6. En el formulario ya mencionado debes incluir los mismos campos de los
productos mostrados, es decir, sku, name, quantity y price, al igual que un
botón de agregar que al hacer click, la información capturada se agregue a la
tabla de productos de la orden.

7. (Opcional) Agregar todos los campos del formulario como campos obiligatorios
y si no se captura información en alguno de éstos, marcarlo de color rojo e
indicar que es obligatorio.

8. (Opcional) Agregar botón de pagar y que al hacer clic, muestre una alerta
indicando que el proceso fue exitoso, esta alerta deberá tener un diseño
agradable.
