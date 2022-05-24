# API-REST-DOCKER
API REST en Javascript con docker

## Tecnologias usadas
* NodeJs
* Docker
* ExpressJs
* Postgres

## Deployment
Para realizar el despliegue de la aplicación solamente debemos abrir el proyecto en la terminal y ejecutar el siguiente comando

`docker compose up`

## Uso
Para hacer uso de la aplicación solo hace falta crear peticiones hacia la aplicación alojada en el puerto 3000 del localhost

**Importante:** las peticiones deben llevar el Content-Type:application/json
### endpoints

* / : Permite verificar la conexión con la base de datos. Devuelve un ok si la conexión
fue exitosa, un nok si fue fallida

* /signin: Permite la autenticación de usuarios y recibe los siguientes parametros:
    * username: Nombre de usuario, debe ser un string
    * password: Contraseña de usuario, debe ser un string
    * eventId: Id del evento

* /signup: Permite la creació de usuarios y recibe los siguientes parametros:
    * username: Nombre de usuario, debe ser un string
    * password: Contraseña de usuario, debe ser un string
    * eventId: Id del evento
    
* /users: Elimina todos los usuarios, no recibe parametros **Debe realizarse con el metodo http DELETE**

* /users: Permite registrar una cantidad masiva de usuarios **Debe realizarse con el metodo http DELETE**. Recibe un archivo csv con la estructura: eventId,username,password. Recibe los siguientes parametros:
    * users: archivo csv con la información de los usuarios