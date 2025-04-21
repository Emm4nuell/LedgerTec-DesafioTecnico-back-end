<p align="center">
  <a href="https://ledgertec.com.br/#" target="_blank">
    <img src="https://ledgertec.com.br/img/logo-ledger.png" width="320" alt="LedGerTec Logo" />
  </a>
</p>

<p align="center">
  Projeto modular utilizando <a href="https://nestjs.com/" target="_blank">NestJS</a>, com <strong>Clean Architecture</strong>, <strong>Prisma ORM</strong>, banco de dados <strong>PostgreSQL (Neon.tech)</strong> e integração com o <a href="https://github.com/artefactual/archivematica" target="_blank">Archivematica</a>.
</p>

---

## 📘 Descrição

Este projeto é construído em NestJS utilizando **Clean Architecture**. Utiliza o **Prisma ORM** como camada de persistência, com banco de dados **PostgreSQL** hospedado no [Neon.tech](https://console.neon.tech/). Além disso, integra com o sistema de preservação digital [Archivematica](https://github.com/artefactual/archivematica).

Este projeto é parte de um **desafio técnico da empresa LedGerTec** para uma vaga de **estágio FullStack**.

---

## 🧱 Estrutura do Projeto

```bash
.
├── app.module.ts
├── main.ts
├── database/
│   └── prisma.service.ts
│
├── archivematica/
│   ├── application/
│   │   ├── archivematica.controller.ts
│   │   └── dto/
│   │       └── archivematica.response.ts
│   ├── domain/
│   │   ├── entity/
│   │   │   └── archivematica.entity.ts
│   │   └── service/
│   │       ├── archivematica.service.ts
│   │       └── prisma.archivematica.ts
│   ├── infrastructure/
│   │   └── repository/
│   │       └── archivematica.repository.ts
│   └── archivematica.module.ts
│
├── auth/
│   ├── application/
│   │   ├── auth.controller.ts
│   │   └── dto/
│   │       ├── auth.request.ts
│   │       └── auth.response.ts
│   ├── domain/
│   │   └── service/
│   │       └── auth.service.ts
│   ├── infrastructure/
│   │   ├── component/
│   │   │   └── auth.guard.ts
│   │   └── config/
│   │       └── set.metadata.ts
│   └── auth.module.ts
│
└── user/
    ├── application/
    │   ├── user.controller.ts
    │   └── dto/
    │       ├── user.mapper.ts
    │       ├── user.request.ts
    │       └── user.response.ts
    ├── domain/
    │   ├── entities/
    │   │   └── user.entity.ts
    │   └── service/
    │       ├── user.service.ts
    │       └── prisma.database.ts
    ├── infrastructure/
    │   └── repository/
    │       └── user.repository.ts
    └── user.module.ts

```


### Para seguir com a instalação do Archivetamica no Docker, siga as instruções do README.mb do link abaixo
<p align="left">Link para instalação: <a href="https://github.com/artefactual/archivematica/tree/qa/1.x/hack" target="_blank">Archivematica</a></p>
