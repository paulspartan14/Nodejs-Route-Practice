# API validator

This api performs a few validations towards a POST request on a specific path.

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

To run this project, it is necessary to install the dependencies, create the .env with the environment variables and run the following commands.

```
npm install
npm start
```

## Container :package:

to run the project directly from the container created locally you can run: (don't forget to create the .env and replace $ {PORT}
by the port you will use)

```
docker build -t api-students:v1.0 . 
docker run -d -p 3300:${PORT} --name api-students api-students:v1.0
```

create your docker image and publish it, first run:
```
docker login
```

Next, you need to add a tag to your created image:

```
docker tag api-students:v1.0 paulspartan/api-students:v1.0
```

Once the repository tag is linked with the current image, we execute:

```
docker push paulspartan/api-students:v1.0
```
Run container directly from image stored in docker hub

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
