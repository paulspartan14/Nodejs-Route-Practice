# API validator

Esta api realiza unas cuantas validaciones hacia una peticion POST en una ruta especifica.

```
http://localhost:3300/api/students POST GET
```

```
{
    "name": "Paul",
    "lastName": "Mena",
    "Age": "23",
    "semester": "8",
    "career": "sistemas computacionales"
}
```

### Prerequisites :clipboard:

Para correr este proyecto, es necesario instalar las dependencias y correr los siguientes comandos.

```
npm install
npm start
```

## Container :package:

Para poder correr el proyecto directamente desde el contenedor creado localmente puedes ejecutar:

```
docker build -t api-students:v1.0 . 
docker run -d -p 3300:3300 --name api-students api-students:v1.0
```

Para poder crear tu imagen de docker y publicarla, primero ingresa un 
```
docker login
```

Luego necesitas agregarle un tag a tu imagen creada

```
docker tag api-students:v1.0 paulspartan/api-students:v1.0
```

Una vez vinculado el tag del repositorio con la imagen actual ejecutamos:

```
docker push paulspartan/api-students:v1.0
```
Para ejecutar el contenedor directamente desde la imagen almacenada en docker hub, ejecutar:

```
docker run -d -p 3300:3300 -n api-students paulspartan/api-students:v1.0
```

## Built With :hammer_and_wrench:

* [Node](https://nodejs.org/es/) - The server used
* [Docker](https://www.docker.com/) - Containers used


## Contributing :family_man_man_boy:

Please read [CONTRIBUTING.md](https://www.aaaimx.org/cod) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning :triangular_flag_on_post:

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Contributors :family_man_man_boy:

- **Paul Mena** - _Initial work_ - [@paulspartan14](https://github.com/paulspartan14)

## License :page_facing_up:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

Made with ❤️ by [Paul Mena](https://github.com/paulspartan14) 

Can you give me a ⭐ or a [coffee ☕](https://www.paypal.com/donate?hosted_button_id=UB7C36H6WY6Q4) 
