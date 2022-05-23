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
* /signin: Permite la autenticación de usuarios y recibe los siguientes parametros:
    * username: Nombre de usuario, debe ser un string
    * password: Contraseña de usuario, debe ser un string
    * eventId: Id del evento, debe ser un entero

* /signup: Permite la creació de usuarios y recibe los siguientes parametros:
    * username: Nombre de usuario, debe ser un string
    * password: Contraseña de usuario, debe ser un string
    * eventId: Id del evento, debe ser un entero
    
* /delete: Elimina todos los usuarios, no recibe parametros