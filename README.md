# Acro-machines

**Acro-machines** es una aplicación desarrollada en React JS utilizando Vite para mostrar información de una API.


## Instrucciones para clonar el repositorio y ejecutar la aplicación

### Clonación del Repositorio

1. Copie el enlace del repositorio: [https://github.com/agustinlevental/Acro-machines.git](https://github.com/agustinlevental/Acro-machines.git)
2. Cree una carpeta en su sistema donde desee clonar el repositorio.
3. Abra una terminal o línea de comandos y navegue al directorio de la carpeta creada.
4. Ejecute el siguiente comando para clonar el repositorio:

    ```bash
    git clone https://github.com/agustinlevental/Acro-machines.git
    ```

### Configuración del Frontend

1. Abra **Visual Studio Code** (VS Code) y abra la carpeta donde se clonó el repositorio.
2. En la terminal integrada de VS Code, navegue a la carpeta `Acronex`:

    ```bash
    cd Acronex
    ```

3. Instale las dependencias del proyecto utilizando npm:

    ```bash
    npm install
    ```

4. Inicie la aplicación en modo de desarrollo:

    ```bash
    npm run dev
    ```

**Nota Importante:** Al ejecutar el comando `npm run dev`, se proporcionará una URL para abrir la aplicación, que podría ser algo como `http://localhost:5173/` o `http://127.0.0.1:5173`. Para evitar problemas de CORS al consumir la API, asegúrese de abrir la aplicación utilizando la URL `http://localhost:5173/`.

### Configuración del Backend

1. Navegue a la carpeta `Backend\Machines`:

    ```bash
    cd Backend\Machines
    ```

2. Abra el archivo de solución `Machines.sln` en **Visual Studio**.
3. Ejecute la solución utilizando el botón "Play" verde en la opción **IIS Express** para iniciar el backend.

## Estructura del Proyecto

- **Acronex**: Contiene la aplicación frontend desarrollada en React JS.
- **Backend**: Contiene el backend de la API, que debe ser ejecutado en Visual Studio.
- **Machines**: Subcarpeta dentro de `Backend` que incluye la solución de la API.


