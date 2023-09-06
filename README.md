<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo 

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nest/cli
```
4. Levantar la base de datos mediante docker
```
docker-compose up -d

```
5. Ejecutar
```
yarn start:dev

```
6. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

7. Llenar las variables de entorno definidas en __.env__

8. Reconstruir la base de datos con la semilla
```
http://localhost:3001/api/v2/seed
```

## Stack usado
* MongoDB
* NestJS
* Mongoose
* Docker

# Production Build
1. Crear el archivo  ```.env.prod```
2. Llenar las variables de entorno de produccion
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```