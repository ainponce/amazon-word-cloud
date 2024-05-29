# Amazon Word Cloud Challenge

## Descripción

Este proyecto contiene los archivos correspondientes del proyecto y un script de bash que envía múltiples solicitudes POST a un servidor especificado con parámetros que incluyen enlaces a productos de Amazon. 
El script está diseñado para automatizar el proceso de envío de estas solicitudes con un tiempo de espera configurable entre cada solicitud.

## Requisitos

- Node.js y npm instalados en tu sistema.
- Redis instalado y corriendo.
- Redis Commander para administrar Redis.

## Instalación

### Clonar el Repositorio

1. Clona este repositorio en tu máquina local:
    ```sh
    git clone https://github.com/ainponce/amazon-word-cloud.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd amazon-word-cloud
    ```

### Instalar Dependencias

3. Instala las dependencias usando npm:
    ```sh
    npm install
    ```

## Uso

### Levantar el Proyecto

Para levantar el servidor en modo desarrollo, usa el siguiente comando:

  ```sh
  npm run dev
  ```
### Levantar Redis Commander
  ```sh
  redis-commander
  ```
### Correr Script
  ```sh
  cd script
  ./simulateRequest.sh localhost 8080 url 1
  ```
