# About The Project

REST API for absence

# Framework

1. [NodeJs](https://nodejs.org/en/)
2. [ExpressJs](https://expressjs.com/en/starter/installing.html)

# Technology

- [NodeJS](https://nodejs.org/id)
- [ExpressJS](https://expressjs.com/)
- [jsonwebtoken](https://jwt.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [dotenv](https://www.dotenv.org/)

# How to use

### 1. Clone the repository

### 2. Run with terminal, npm install to install all dependencies

```bash
npm install
```

### 3. Create database with postgreSQL:

```bash
db_fan_absensi
```

### 4. Create your .env:

```env
PORT=8888
APP_SECRET=secret words. example => (@0okmnji9)
DATABASE="postgres://postgres:1@127.0.0.1:5432/db_fan_absensi?schema=public" (or adjust it to your host and database name)

```

### 5. Restore schema:

Schema backup :

```bash
  db_backup_test_fan.sql
```

### 6. Run this project:

```bash
npm run dev
```

### 7. Username can use:

Supervisor

```bash
username: spv@email.com
password: password
```

User

```bash
username: bayu@email.com
password: password
```
