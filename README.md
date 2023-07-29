STEPS TO REPRODUCE AN ADONISJS API TYPESCRIPT CORRECTLY WITH YARN INSTEAD OF NPM:

1 - yarn global add @adonisjs/cli
2 - yarn create adonis-ts-app api --api-only
3 - cd api (optionally)
4 - node ace serve --watch (optionally)
5 - yarn add @adonisjs/lucid // for database creation
6 - node ace configure @adonisjs/lucid // configuring database
7 - yarn add @adonisjs/auth@alpha // for the authentication
8 - node ace make:middleware Auth if it doesn't exist
9 - node ace invoke @adonisjs/auth // to configure Authentication: 
If the config file is missing, then create a new one manually and copy/paste the contents from the CORS stub .

config/cors.ts

{
  "enabled": true
}
10 - CORS is enabled inside the config/cors.ts file by setting the enabled property to true.
11 - node ace make:model Example --migration --controller
12 - Don't forget to copy .env file to build folder after yarn start build
