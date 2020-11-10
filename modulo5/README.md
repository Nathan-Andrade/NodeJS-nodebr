## Comandos para rodar no baco de dados

### Docker

docker run \
    --name postgress \
    -e POSTGRES_USER=nathanandrade \
    -e POSTGRES_PASSWORD=mysecretkey \
    -e POSTGRES_DB=heroes \
    -p 5432:5432
    -d \
    postgres

docker ps
docker exec -it postgres /bin/bash


docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres;postgres \
    -d \
    adminer