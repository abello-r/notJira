# Instalación
Clona el proyecto con el siguiente comando:

```git clone https://github.com/abello-r/notJira```

# Dependencias
Para descargar las dependencias necesarias, ejecute el siguiente comando en la raíz del proyecto:

```npm install```

# Configuración de entorno
El proyecto requiere de un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

```
NEXTAUTH_URL= # http://localhost:3000
NEXTAUTH_SECRET= # openssl rand -base64 32
GITHUB_ID= # GitHub OAuth App ID
GITHUB_SECRET= # GitHub OAuth App Secret
MONGODB_URI= # MongoDB connection string
```

# Carga de datos
La aplicación incluye un script en la ruta /scripts/bulk-insert.ts que permite cargar datos de prueba en la base de datos. Puede ejecutar el script con el siguiente comando:

```npm run bulk```

# Ejecución
Finalmente, para ejecutar la aplicación en modo desarrollo, ejecute el siguiente comando:

```npm run dev```

# Soporte
Si encuentra algún problema o tiene alguna pregunta, no dude en abrir un issue en el repositorio de GitHub.
