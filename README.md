<h1 align="center">FullStack Todo app</h1>
<div align="center">
  <h3>
    <a href="https://p4th4k.github.io/FullStackTODOApp/" color="white">
      Live
    </a>
    <span> | </span>
    <a href="https://github.com/p4th4k/FullStackTODOApp">
      Solution
    </a>
   <span> | </span>
    <a href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW">
      Challenge
    </a>
  </h3>
</div>
<div align="center">
   Solution for a challenge from  <a href="https://www.frontendmentor.io/" target="_blank">frontendmentor.io</a>.
</div>
<br/>
<br/>
<div align="center"><img src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/llcq9eiv3ney5tkxgdtu.jpg"></img></div>
<br/>
<br/>

Introducing FullStack todo app. It is the classical todo app but with new functionalities such as theme switcher, drag and drop todos, todo sorting etc. and an minimal yet aesthetic UI.

## Table Of Contents
1. [Technologies used](#technologies-used)
2. [Features](#features)
3. [Usage](#usage)
4. [Learnings](#learnings)
5. [Improvements](#improvements)
6. [Contribution](#contribution)
7. [License](#license)

## Technologies used: 

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"> <img src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue">

- [x] ReactJS
- [x] ExpressJS
- [x] NodeJS
- [x] MongoDB
- [x] FramerMotion

## Features:

- [x] Create, Read, Update, Delete TODOS
- [x] Drag and Drop to arrange TODOS
- [x] Sorting of TODOS on the basis of status
- [x] Dark and Light theme

## Usage: 
To setup the project locally, with backend support:

1. Clone the repository:
```console
$ git clone https://github.com/p4th4k/FullStackTODOApp.git
```

2. Install dependencies:
```console
FullStackTODOApp/frontend$ npm install
FullStackTODOApp/backend$ npm install 
```
<b>NOTE:</b> To demo only the frontend, skip the backend part.

3. Setup backend:
Create .env in the ``` FullStackTODOApp/backend ``` directory
```txt
PORT=3000
MONGODB_URL="YOUR_MONGODB_URL"
```

4. Configure frontend:
In ``` FullStackTODOApp/frontend/src/main.jsx ```, the mode variable dictates the behaviour of frontend:
-  If mode variable is set to ```DEMO```, it will use sample data for frontend and skip the backend operations.
- If mode variable is set to ```PROD```, it will take backend into use.

5. Run the project:
```console
FullStackTODOApp/frontend$ npm run dev
FullStackTODOApp/backend$ node index.js
```

By default the frontend will run at [localhost:5173](localhost:5173)

## Learnings:

- Using ReactJS to create frontend
  - Making use of react components.
  - useState and useEffect hook.
  - Using props for transferring state
  - Integrating frontend with backend

- Using MongoDB
    - Using monogodb to store data
    - perform CURD operations on database

- Using ExpressJS with Database
    - Using expressjs to create api
    - Performing CURD operations on database via api calls

## Improvements:
- Improving the responsiveness
- Checking for duplicate todos in frontend as well as backend

## Contribution:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
