# Backend - Plataforma de Adopción de Mascotas 🐶🐱

API REST desarrollada con Django y Django REST Framework. Su propósito es gestionar el proceso de adopción en refugios, permitiendo el registro y administración de mascotas, así como la gestión de citas para adopción.

## Tecnologías Utilizadas

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)![DRF](https://img.shields.io/badge/DRF-000000?style=for-the-badge&logo=django&logoColor=white)![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)![Shell](https://img.shields.io/badge/Shell-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white)![Tests](https://img.shields.io/badge/Tests-000000?style=for-the-badge&logo=jest&logoColor=white)![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)[![REST API](https://img.shields.io/badge/REST_API-005571?style=for-the-badge&logo=api&logoColor=white)](https://restfulapi.net/)

## Tabla de Contenidos

- [Instalación](#instalación)
  - [Entorno con Docker](#entorno-con-docker)
  - [Entorno Local](#entorno-local)
- [Comandos](#comandos)
  - [Comandos Personalizados](#comandos-personalizados)
  - [Comandos para Ejecutar Tests](#comandos-para-ejecutar-tests)
    - [Entorno con Docker](#entorno-con-docker)
    - [Entorno Local](#entorno-local)
- [Endpoints](#endpoints)
  - [Mascotas](#mascotas)
  - [Citas](#citas)

## Instalación

### Pasos de Instalación

1. **Clona este repositorio:**

```bash
git clone https://github.com/No-Country-simulation/c24-48-n-webapp.git
cd c24-48-n-webapp/backend
```

2. **Crea el entorno virtual:**

Utiliza `venv` o cualquier otro gestor de entornos virtuales. Luego, crea y activa el entorno virtual:

```bash
python -m venv venv
# En Windows
venv\Scripts\activate
# En Mac/Linux
source venv/bin/activate
```

3. **Crea las variables de entorno:**
- Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables:
  - `SECRET_KEY` -> Clave secreta para la configuración de Django.
  - `DB_NAME` -> Nombre de la base de datos.
  - `DB_USER` -> Usuario de la base de datos.
  - `DB_PASSWORD` -> Contraseña del usuario de la base de datos.
  - `DB_HOST` -> Host de la base de datos.
  - `DB_PORT` -> Puerto de la base de datos.
  - `DJANGO_SETTINGS_MODULE` -> Módulo de configuración de Django.
  - `CLOUDINARY_CLOUD_NAME` -> Nombre de la nube de Cloudinary.
  - `CLOUDINARY_API_KEY` -> Clave API de Cloudinary.
  - `CLOUDINARY_API_SECRET` -> Secreto API de Cloudinary.

### Entorno con Docker

**Requisitos:**
- Docker
- Docker Compose

1. **Construir y ejecutar los contenedores:**

```bash
docker compose -f docker/docker-compose.dev.yml build
docker compose -f docker/docker-compose.dev.yml up
```

¡Listo! El proyecto ahora debería estar en funcionamiento en tu entorno con docker. Puedes acceder a él desde tu navegador web visitando `http://0.0.0.0:8000/`.

### Entorno Local

**Requisitos:**
- Python
- PostgreSQL

1. **Instalar las dependencias:**

```bash
pip install -r requirements.txt
```

2. **Crea las migraciones:**

```bash
python manage.py makemigrations --settings=config.settings.development
python manage.py migrate --settings=config.settings.development
```

3. **Ejecutar el servidor:**

```bash
python manage.py runserver --settings=config.settings.development
```

¡Listo! El proyecto ahora debería estar en funcionamiento en tu entorno local. Puedes acceder a él desde tu navegador web visitando `http://127.0.0.1:8000/`.

---

## Comandos  

### Comandos Personalizados  

- **Crear registros de mascotas por defecto**  
  ```bash
  python manage.py create_default_pets
  python manage.py create_default_pets --count=<cantidad>  # Opcional, por defecto crea 10 registros
  ```

### Comandos para Ejecutar Tests  

#### Ejecutar tests en un entorno Docker  

- **Ejecutar todos los tests:**  
  ```bash
  docker exec -it <id_container> python manage.py test apps --settings=config.settings.<entorno>
  ```  
  `<entorno>` puede ser `development` o `production`.

- **Ejecutar un test específico:**  
  ```bash
  docker exec -it <id_container> python manage.py test apps.<nombre_módulo>.tests.<nombre_test> --settings=config.settings.<entorno>
  ```  
  Reemplaza `<nombre_módulo>` y `<nombre_test>` con los valores correspondientes.  

#### Ejecutar tests en un entorno local  

- **Ejecutar todos los tests:**  
  ```bash
  python manage.py test apps --settings=config.settings.<entorno>
  ```  
  `<entorno>` puede ser `development` o `production`.

- **Ejecutar un test específico:**  
  ```bash
  python manage.py test apps.<nombre_módulo>.tests.<nombre_test> --settings=config.settings.<entorno>
  ```  
  Reemplaza `<nombre_módulo>` y `<nombre_test>` con los valores correspondientes.  

---

## Endpoints

### Mascotas

| Nombre | Método | URL | Descripción |
|:------ | :----- | :-- | :---------- |
| [Registro Mascotas](#registro-mascotas) | `POST` | `/api/pets/registro` | Endpoint para el registro de mascotas. |

#### Registro Mascotas

##### Método HTTP

```http
GET /api/pets/registro
```
##### Query Params

| Query Params     | Tipo     | Descripción                |
| :--------------- | :------- | :------------------------- |
| `age`       | `int` | **Requerido**. Edad de la mascota |
| `size`       | `string` | **Requerido**. Tamaño de la mascota |
| `breed`       | `string` | **Requerido**. Raza de la mascota |
| `health_status`       | `string` | **Requerido**. Estado de salud de la mascota |
| `status`       | `string` | **Requerido**. Estado de la mascota |
| `photo_cover`       | `URLField` | **Requerido**. Foto de la mascota |

> **NOTA**: Solo acceden usuarios staff o admin


##### Ejemplo de solicitud

```http
Authorization: Token <admin_o_staff_token_key>
Content-Type: application/json

{
  "age": 5,
  "size": "medium",
  "breed": "labrador",
  "health_status": "healthy",
  "status": "adoptable"
}
```

##### Headers

| Header           | Tipo     | Descripcion                |
| :--------------- | :------- | :------------------------- |
| `Authorization`  | `string` | **Requerido**. Token de autenticacion de admin o staff |


##### Ejemplo de respuesta exitosa

```http
HTTP/1.1 200 Ok
Content-Type: application/json

{
  'status': 'success', 
  'message': 'Pet registered successfully.', 
  'data': {
    'Pet': {
      "id": "12",
      "age": 5,
      "size": "medium",
      "breed": "labrador",
      "health_status": "healthy",
      "status": "adoptable"
    }
  }
}
```

| Nombre | Método | URL | Descripción |
|:------ | :----- | :-- | :---------- |
| [Actualizar Mascota](#actualizar-mascota) | `POST` | `/api/pets/update` | Endpoint para el actualizar mascota. |

#### Actualizar mascota

##### Método HTTP

```http
POST /api/pets/update
```
##### Query Params

| Query Params     | Tipo     | Descripción                |
| :--------------- | :------- | :------------------------- |
| `pk`       | `int` | **Requerido**. id de la mascota a actualizar |
| `age`       | `int` | **Opcional**. Nueva edad de la mascota |
| `size`       | `string` | **Opcional**. Nueva tamaño de la mascota |
| `breed`       | `string` | **Opcional**. Nueva raza de la mascota |
| `health_status`       | `string` | **Opcional**. Nueva estado de salud de la mascota |
| `status`       | `string` | **Opcional**. Nueva estado de la mascota |
| `photo_cover`       | `URLField` | **Opcional**. Foto de la mascota |

> **NOTA**: Solo permisos a usuarios staff o admin.

##### Ejemplo de solicitud

```http
Authorization: Token <admin_o_staff_token_key>
Content-Type: application/json

{
  "pk": 5
  "age": 6,
  "status": "Pending"
}
```

##### Headers

| Header           | Tipo     | Descripcion                |
| :--------------- | :------- | :------------------------- |
| `Authorization`  | `string` | **Requerido**. Token de autenticacion de admin o staff |


##### Ejemplo de respuesta exitosa

```http
HTTP/1.1 200 Ok
Content-Type: application/json

{
{
  'status': 'success', 
  'message': 'Pet updated successfully.', 
  'data': {
    'Pet': {
      "id": "5",
      "age": 6,
      "size": "medium",
      "breed": "labrador",
      "health_status": "healthy",
      "status": "Pending"
    }
  }
}
}
```

| Nombre | Método | URL | Descripción |
|:------ | :----- | :-- | :---------- |
| [Borrar Mascota](#borrar-mascota) | `POST` | `/api/pets/delete` | Endpoint para el borrado de mascota. |

#### Borrar mascota

##### Método HTTP

```http
POST /api/pets/delete
```
##### Query Params

| Query Params     | Tipo     | Descripción                |
| :--------------- | :------- | :------------------------- |
| `pk`       | `int` | **Requerido**. id de la mascota a eliminar. |


##### Ejemplo de solicitud

```http
Authorization: Token Token <admin_o_staff_token_key>
Content-Type: application/json

{
  "pk": 5
}
```
##### Headers

| Header           | Tipo     | Descripci贸n                |
| :--------------- | :------- | :------------------------- |
| `Authorization`  | `string` | **Requerido**. Token de autenticacion de admin o staff |

##### Ejemplo de respuesta exitosa

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  'status':'success', 
  'message': 'Pet has been deleted.'
}
```

| Nombre | Método | URL | Descripción |
|:------ | :----- | :-- | :---------- |
| [disponibles Mascotas](#disponibles-mascotas) | `GET` | `/api/pets/pets_available` | Endpoint retorna lista de mascotas disponibles para adopcion. |

#### Disponibles Mascotas

##### Método HTTP

```http
GET /api/pets/pets_available
```
##### Ejemplo de solicitud

```http
Content-Type: application/json
```

##### Ejemplo de respuesta exitosa

```http
HTTP/1.1 200 Ok
Content-Type: application/json

{
  "status": "success",
  "message": "The pets available were successfully obtained.",
  "data": {
    "page_info": {
      "count": 20,
      "page_size": 2,
      "links": {
        "next": "http://0.0.0.0:8000/api/pets?page=3&page_size=2",
        "previous": "http://0.0.0.0:8000/api/pets?page_size=2"
      }
    },
    "pets": [
      {
        "id": 3,
        "name": "Meghan",
        "age": 2,
        "size": "medium",
        "breed": "themselves",
        "health_status": "material",
        "photo_cover": "https://picsum.photos/229/615",
        "status": "available",
        "create_at": "2025-02-20T23:18:37.623560Z",
        "update_at": "2025-02-20T23:18:37.623587Z",
        "photos": []
      },
      {
        "id": 4,
        "name": "Ryan",
        "age": 6,
        "size": "medium",
        "breed": "change",
        "health_status": "couple",
        "photo_cover": "https://dummyimage.com/354x670",
        "status": "available",
        "create_at": "2025-02-20T23:18:37.628448Z",
        "update_at": "2025-02-20T23:18:37.628465Z",
        "photos": []
      }
    ]
  }
}
```
| Nombre | Método | URL | Descripción |
|:------ | :----- | :-- | :---------- |
| [fotos Mascota](#fotos-mascota) | `POST` | `/api/pets/upload_photos` | Endpoint subir fotos de mascotas. |

#### Borrar mascota

##### Método HTTP

```http
POST /api/pets/upload_photos
```
##### Query Params

| Query Params     | Tipo     | Descripción                |
| :--------------- | :------- | :------------------------- |
| `pk`       | `int` | **Requerido**. id de la mascota para la asociacion de fotos. |

##### Ejemplo de solicitud

```http
Authorization: Token Token <admin_o_staff_token_key>
Content-Type: application/json

{
  "pk": 5,
  "photo_url": "https://example.com/photo1.jpg"
}
```
##### Headers

| Header           | Tipo     | Descripci贸n                |
| :--------------- | :------- | :------------------------- |
| `Authorization`  | `string` | **Requerido**. Token de autenticacion de admin o staff |


##### Ejemplo de respuesta exitosa

```http
HTTP/1.1 200 Ok
Content-Type: application/json

{
  "status": "success",
  "message": "Pet updated photos successfully.",
  "data": {
    "Pet": {
      "id": 5,
      "name": "Buddy",
      "age": 5,
      "size": "medium",
      "breed": "labrador",
      "health_status": "healthy",
      "status": "adoptable",
      "photos": [
        {
          "photo_id": 101,
          "photo_url": "https://example.com/photo1.jpg"
        },
      ]
    }
  }
}
```
| Nombre | Método | URL | Descripción |
|:------ | :----- | :-- | :---------- |
| [Filtrar Mascotas](#filtrar-mascotas) | `GET` | `/api/pets/filter` | Endpoint para el filtro de mascotas con diferentes parámetros en la API. |

#### Filtrar Mascotas

##### Método HTTP

```http
GET /api/pets/filter
```

##### Query Params

| Query Params     | Tipo     | Descripción                |
| :--------------- | :------- | :------------------------- |
| `age`       | `int` | **Opcional**. Edad de la mascota |
| `size`       | `string` | **Opcional**. Tamaño de la mascota |
| `breed`       | `string` | **Opcional**. Raza de la mascota |
| `health_status`       | `string` | **Opcional**. Estado de salud de la mascota |
| `status`       | `string` | **Opcional**. Estado de la mascota |
| `size_value`     | `int`    | **Opcional**. Valor del tamaño de elementos por página |
| `page_value`     | `int`    | **Opcional**. Valor de la página para navegar entre la paginación |

> **NOTA**: Si los parámetros `page_size` y `page` no se incluyen en la URL, se aplicarán valores por defecto:
>
> - **Ejemplo**: `GET /api/pets/filter`
>   - **page_size** será `10`, lo que significa que se mostrarán 10 elementos por página.
>   - **page** será `1`, comenzando en la primera página de la paginación.
>
> **Recomendación**: Para navegar entre las páginas, debe incluir el parámetro `page` e indicar el número de la página a la que desea acceder.

##### Ejemplo de solicitud

```http
Content-Type: application/json
```

##### Ejemplo de respuesta exitosa

```http
HTTP/1.1 200 Ok
Content-Type: application/json

{
  "status": "success",
  "message": "The pets were successfully obtained.",
  "data": {
    "page_info": {
      "count": 20,
      "page_size": 2,
      "links": {
        "next": "http://0.0.0.0:8000/api/pets?page=3&page_size=2",
        "previous": "http://0.0.0.0:8000/api/pets?page_size=2"
      }
    },
    "pets": [
      {
        "id": 3,
        "name": "Meghan",
        "age": 2,
        "size": "medium",
        "breed": "themselves",
        "health_status": "material",
        "photo_cover": "https://picsum.photos/229/615",
        "status": "available",
        "create_at": "2025-02-20T23:18:37.623560Z",
        "update_at": "2025-02-20T23:18:37.623587Z",
        "photos": []
      },
      {
        "id": 4,
        "name": "Ryan",
        "age": 6,
        "size": "medium",
        "breed": "change",
        "health_status": "couple",
        "photo_cover": "https://dummyimage.com/354x670",
        "status": "available",
        "create_at": "2025-02-20T23:18:37.628448Z",
        "update_at": "2025-02-20T23:18:37.628465Z",
        "photos": []
      }
    ]
  }
}
```

### Citas

| Nombre | Método | URL | Descripción |
|:------ | :----- | :-- | :---------- |
| [Agendar citas](#agendar-citas) | `POST` | `/api/appointment/schedule` | Endpoint para agendar citas en la API. |
| [Aceptar o rechazar citas](#aceptar-o-rechazar-citas) | `POST` | `/api/appointment/{appointment_id}/status` | Endpoint para aceptar o rechazar citas en la API. |

#### Agendar Citas

##### Método HTTP

```http
POST api/appointment/schedule
```

##### Headers

| Header           | Tipo     | Descripción                |
| :--------------- | :------- | :------------------------- |
| `Authorization`  | `string` | **Requerido**. Token de autenticación del usuario |


##### Parámetros

| Parámetro | Tipo     | Descripción                |
| :-------- | :------- | :------------------------- |
| `datetime` | `datetime` | **Requerido**. Fecha para la cita |
| `user` | `int` | **Requerido**. ID del usuario que hace la cita |
| `pet` | `int` | **Requerido**. ID de la mascota por la que se hace la cita |

##### Ejemplo de solicitud

```http
Authorization: Token <your_token_key>
Content-Type: application/json

{
  "datetime": "2025-03-01T11:00:00Z",
  "user": 1,
  "pet": 1
}
```

##### Ejemplo de respuesta exitosa

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "status": "success",
  "message": "Appointment successfully scheduled."
}
```

### Usuarios

| Nombre | Metodo | URL | Descripci贸n |
|:------ | :----- | :-- | :---------- |
| [Registro de usuarios](#registro-usuarios) | `POST` | `/api/user/user_register` | Endpoint para el registro de usuarios. |

#### Registro de usuarios

##### Metodo HTTP

```http
POST /api/user/user_register/
```

##### Query Params

| Query Params     | Tipo     | Descripcion                |
| :--------------- | :------- | :------------------------- |
| `username`       | `string` | **Requerido**. Nombre del usuario |
| `email`       | `email` | **Requerido**. Email del usuario |
| `password`       | `string` | **Requerido**. Password del usuario |
| `first_name`       | `string` | **Opcional**. Nombre del usuario |
| `last_name`       | `string` | **Opcional**. Apellido del usuario |
| `is_active`     | `bol`    | **Opcional**. Estado del usuario |

##### Ejemplo de solicitud

```http
Content-Type: application/json
  
{
  "username": "pepito",
  "first_name": "pepe",
  "last_name": "pepito",
  "email": "pepito@pepito.com",
  "password": "pepito"
}
```

##### Ejemplo de respuesta exitosa

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "status": "success",
    "message": "User registered successfully.",
    "data": {
        "token": "99db769eaf1600fa0ea77e0549a32890f41eb67c",
        "user": {
            "id": 36,
            "username": "pepito",
            "first_name": "pepe",
            "last_name": "pepito",
            "email": "pepito@pepito.com",
            "password": "pepito",
            "is_active": true
        }
    }
}
```

| Nombre | M茅todo | URL | Descripcion |
|:------ | :----- | :-- | :---------- |
| [Login de usuarios](#login-usuarios) | `POST` | `/api/user/user_login` | Endpoint para el login de usuarios |

#### Login de usuarios

##### Metodo HTTP

```http
POST /api/user/user_login/
```

##### Query Params

| Query Params     | Tipo     | Descripcion                |
| :--------------- | :------- | :------------------------- |
| `email`       | `email` | **Requerido**. Email del usuario |
| `password`       | `string` | **Requerido**. Password del usuario |

##### Ejemplo de solicitud

```http
Content-Type: application/json

{
  "email": "pepito@pepito.com",
  "password": "pepito"
}
```

##### Ejemplo de respuesta exitosa

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "status": "success",
    "message": "User login successfully.",
    "data": {
        "token": "99db769eaf1600fa0ea77e0549a32890f41eb67c",
        "user": {
            "id": 36,
            "username": "pepito",
            "first_name": "pepe",
            "last_name": "pepito",
            "email": "pepito@pepito.com",
            "password": "pbkdf2_sha256$870000$yKoXvfAE4V5hF6bR1g0STy$sCMBsidoHQTLYU27c/+bBrOiBt2Jor2k/HLw7L3m7AA=",
            "is_active": true
        }
    }
}
```

| Nombre | Metodo | URL | Descripcion |
|:------ | :----- | :-- | :---------- |
| [Actualizacion datos de usuarios](#actualizacion-usuarios) | `POST` | `/api/user/user_update` | Endpoint para actualizar datos de usuario. |

#### Actualizacion datos de usuarios

##### M茅todo HTTP

```http
POST /api/user/user_update/
```

##### Query Params

| Query Params     | Tipo     | Descripcion                |
| :--------------- | :------- | :------------------------- |
| `username`       | `string` | **Opcional**. Nuevo nombre del usuario |
| `email`       | `email` | **Opcional**. Nuevo email del usuario |
| `password`       | `string` | **Opcional**. Nuevo password del usuario |
| `first_name`       | `string` | **Opcional**. Nuevo nombre del usuario |
| `last_name`       | `string` | **Opcional**. Nuevo apellido del usuario |
| `is_active`     | `bol`    | **Opcional**. Nuevo estado del usuario |
| `page_value`     | `int`    | **Opcional**. Nuevo valor de la pagina para navegar entre la paginacion |

##### Ejemplo de solicitud

```http
Authorization: Token <your_token_key>
Content-Type: application/json

{
  "username": "pepe2",
  "first_name": "pepito2",
  "last_name": "pepito"
}
```

##### Headers

| Header           | Tipo     | Descripcion                |
| :--------------- | :------- | :------------------------- |
| `Authorization`  | `string` | **Requerido**. Token de autenticacion del usuario |


##### Ejemplo de respuesta exitosa

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "status": "success",
    "message": "User update successfully.",
    "data": {
        "user": {
            "id": 36,
            "username": "pepe2",
            "first_name": "pepito2",
            "last_name": "pepito",
            "email": "pepito@pepito.com",
            "password": "pbkdf2_sha256$870000$yKoXvfAE4V5hF6bR1g0STy$sCMBsidoHQTLYU27c/+bBrOiBt2Jor2k/HLw7L3m7AA=",
            "is_active": true
        }
    }
}
```

| Nombre | Metodo | URL | Descripcion |
|:------ | :----- | :-- | :---------- |
| [Borrar usuarios](#borrar-usuarios) | `POST` | `/api/user/user_delete` | Endpoint para borrar usuario. |

#### Borrar usuarios

##### Metodo HTTP

```http
POST /api/user/user_delete/
```

##### Query Params

**NOTA**: Sin parametros, solo se envia el [headers]:

##### Ejemplo de solicitud

```http
Authorization: Token <your_token_key>
Content-Type: application/json
```
##### Headers

| Header           | Tipo     | Descripci贸n                |
| :--------------- | :------- | :------------------------- |
| `Authorization`  | `string` | **Requerido**. Token de autenticaci贸n del usuario |


##### Ejemplo de respuesta exitosa

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  'status':'success', 
  'message': 'User has been deleted.'
}
```