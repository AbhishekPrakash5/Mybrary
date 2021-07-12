
# Mybrary

This is a Website where we can add/delete/edit Authors and Books written by them.
This project uses MongoDB atlas for storing data, Express.js and Node.js for backend implementation. I have used FilePond for image preview, resizing and 
encoding. This project is deployed on Heroku.

# Tech Stack

**Front-End** - HTML, CSS, JavaScript

**Back-End** - Node.js, Express.js and MongoDB

## Demo

[Visit the Website here](https://mybrary-project-abhi.herokuapp.com/)

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/AbhishekPrakash5/Mybrary.git
```

Go to the project directory

```bash
  cd Mybrary
```

Install dependencies

```bash
  npm install
```
Make a .env file in Mybrary directory and add this in it

```bash
  DATABASE_URL=<your url here>
```

Start the server

```bash
  npm run start
```
Start the server using developer options

```bash
  npm run devStart
```
Now go to `http://localhost:3000/`