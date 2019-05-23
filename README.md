# Dado Capital Auth

# Sobre o projeto

O projeto é desenvolvido utilizando Postgres, Express, Vue e Node. 

# Desenvolvimento

Instale o [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce) e o [docker-compose](https://docs.docker.com/compose/install/).

## Configuração das variáveis de ambiente

Faça uma cópia arquivo `variables.env.sample` para o arquivo `variables.env` e preencha com as chaves para as variáveis de ambiente. 

## Iniciando docker

Após a definição das variáveis e com o banco de dados executando via docker. Rode com o docker executando:

```
docker-compose up
```

Pronto, o desenvolvimento já pode ser iniciado!

A api estará disponível em: localhost:5000/api
O frontend estará disponível em: localhost:8080

Caso for preciso reconstruir as imagens (backend e frontend) basta fazer:

```
docker-compose up --build
```

**Limitação**: Alterações no arquivo package.json (do frontend ou do backend) exigem um rebuild (reconstrução) da imagem com o comando citado acima.

### Comandos úteis

Caso você queira parar os containers e remover os volumes execute:

```
docker-compose down --volumes
```

Para visualizar os containers rodando:

```
docker ps
```

Para executar comandos num shell dentro do container:

```
docker exec -it <container_id> sh
```

Para matar um container

```
docker kill <container_id>
```

# Desenvolvimento sem Docker

## Configuração das variáveis de ambiente

É necessário exportar as variáveis de ambiente para que o projeto possa ser executado. Essa é a lista de variáveis necessárias:

- SECRET_OR_KEY
- DATABASE_URL
- FACEBOOK_APP_ID
- FACEBOOK_APP_SECRET
- GOOGLE_APP_ID
- GOOGLE_APP_SECRET

Para exportar use, como exemplo, o comando abaixo (no terminal):

```
export SECRET_OR_KEY="umsupersegredo"
```

Obs: a variável DATABASE_URL deve ter o seguinte formato "postgres://<username>:<password>@localhost:5432/dc-auth"

## Instalação de dependências

### Para o backend

Na pasta server, rode o seguinte comando:

```
yarn install
```

### Para o frontend

Na pasta client, rode o seguinte comando:

```
yarn install
```

## Execução do projeto

### Para execução do backend

Na pasta server, rode o seguinte comando:

```
yarn run start
```

### Para execução do frontend

Na pasta client, rode o seguinte comando:

```
yarn run serve
```

# Testes

Os testes são escritos usando [chai](https://www.chaijs.com) e rodam via [docker-compose](https://github.com/mochajs/mocha).

### Executar testes

```
yarn test
```
