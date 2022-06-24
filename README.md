
>UPDATE. Криво залился это репозиторий. Либо из-за невнимательности, либо ещё из-за чего.
Об этом мне сообщил первй проверяющий студент.
Залил на другой реп https://github.com/AntonFartovii/af-CRUD-api-2/tree/develop
режим разработки npm run start:dev


Буду признателен любым вашим комментариям косательно выполнения таски.

Методы реализованы. Тестировал через Postman.
Не умею делать тестирование ещё пока. Не реализовано
Тему кластеров до конца не изучил.

Server создаётся в index.ts

Webpack не настроен
```
 "scripts": {
    "start:dev": "nodemon",
    "start:prod": "tsc index.ts",
    "start": "ts-node index.ts",
    "webpack:dev": "webpack --mode=development",
    "webpack:build": "webpack --mode=production",
    "test": "jest",
    "test:watch": "jest --watch"
  },
```

