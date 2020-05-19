
# VEDR - A Fullstack Dynamic Rendering Boilerplate

<div align='center'>

[![VEDR](https://i.ibb.co/Kz5fczV/Yellow-Apps-and-Technology-Business-Advertising-Website.jpg)](.)

</div>

![release](https://badgen.net/github/release/burhanahmeed/VEDR)
![tags](https://badgen.net/github/tags/burhanahmeed/VEDR)
![node](https://badgen.net/badge/Node/v12.16.3/green)
![license](https://badgen.net/badge/license/MIT/blue)

VEDR is a fullstack boilerplate build on top of ExpressJS and VueJS. Basically it's a MEVN stack at its base, but you can add any other database like mySQL or Firebase. It will be customizable and we will make it simpler, so you only install as you need.


Latest update: on master branch.

## Project setup
Clone project from repository to your local development.
```
git clone https://github.com/burhanahmeed/vue-express-dynamic-rendering.git
```
Install dependencies
```
npm install
```
#### Before Running Project
- Copy `.env.example` file or just rename it to `.env.local`
- Make sure you have connected project with MongoDB, or you can remove a few code in `controller` if you would like to start without MongoDB.

## Development 
#### For Development
To run the project just use command
```
npm run serve
```
It will start vue-cli and ExpressJS server. Here we use universal mode.

Use `npm run vue-serve` to start client-side only app or `npm run dev` to start server only app (But you need a dist folder to render client).

## Production
Use this command to build VueJS project.
```
npm run build
```
and then run this command to start the app.
```
npm run start
```

## Project Structure
We are trying to standardise the project structure but don't worry, you can still experiment on this project structure.

#### VueJS
It is just a standard Vue CLI. We are still developing a new things here.
```
./src
./public
```

#### ExpressJS
Basically all of the Express logic stored in one folder.
```
./application
```
You can create `controllers`, `models`, or `routers` there. If you'd like to add a database the you can go to `./application/bootstrap/database.js`.

## __Have Fun!__

## Issue

If you find something wrong in this framework / boilerplate please submit [an issue](https://github.com/burhanahmeed/VEDR/issues).

## Contributing
We are welcome all kind of contribution. Submit an issue or pull request if any. Or simply just share, star, or fork this project will be mean for me.

## License
MIT License Copyright (c) 2020 Burhanuddin Ahmed