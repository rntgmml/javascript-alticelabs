# Javascript challenge

Usando os seguintes end-points da API:

• https://jsonplaceholder.typicode.com/users

• https://jsonplaceholder.typicode.com/posts

Constrói um objeto Letter que possui um método denominado get e que internamente:

A) Coordene os pedidos à API;

B) Faça error handling dos mesmos pedidos;

C) E que com base nas respostas da API construa e devolva um array de objetos com a seguinte
estrutura:

```
[
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": "Kulas Light, Apt. 556 - 92998-3874 Gwenborough",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": "Romaguera-Crona",
    "posts": [
        {
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
        molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    ]
    },
...
]
```

## Run the project

### Install dependencies

`npm install`

### Run the project

`npm start`

### Visit the webpage

[http://localhost:8000/](http://localhost:8000/)

### Run the tests

`npm test`

## Built With

- JavaScript
- Jest
- Axios

## Author

👤 **Renata Melo**

- Github: [@rntgmml](https://github.com/rntgmml)
