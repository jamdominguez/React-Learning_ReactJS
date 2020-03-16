# React-Learning_ReactJS
Introduction to React.

It is based in a Udemy course.

**Status: In develop**


  

<div align="center">

![Aprendiendo ReactJS](courseIcon.PNG)<br>
 [Aprendiendo ReactJS](https://www.udemy.com/course/aprendiendo-react/) for Miguel Ángel Durán García.

 </div>


### Personal Set Up
- CUP: i5-7600K@3.80GHz 
- RAM: 16GB RAM
- Environment: Windows 10
- Browser: Google Chrome (80)
- IDE: Visual Studio Code (1.43)
- IDE Extensions: Markdown all in one


## Table of contents
- [React-Learning_ReactJS](#react-learningreactjs)
    - [Personal Set Up](#personal-set-up)
  - [Table of contents](#table-of-contents)
- [1. Introduction](#1-introduction)
- [2. Enviroment set up](#2-enviroment-set-up)
  - [2.1. What we need?](#21-what-we-need)
  - [2.2. Install Node.js and NPM](#22-install-nodejs-and-npm)
  - [2.3. Install Create React App package](#23-install-create-react-app-package)
- [3. Basic Concepts](#3-basic-concepts)
- [4. Conditional Render and list](#4-conditional-render-and-list)
- [5. React Developer Tools](#5-react-developer-tools)
- [6. Events and Forms](#6-events-and-forms)
- [7. Children and Prototypes](#7-children-and-prototypes)
- [8. Components life cicle](#8-components-life-cicle)
- [9. Good Practices](#9-good-practices)
- [10. Project: Online film seeker](#10-project-online-film-seeker)
- [11. Redux: Application's Global Manager](#11-redux-applications-global-manager)


# 1. Introduction
- React was development by Facebook
- React is used by many relevant webs like LinkedIn, Airbnb, Twitter and fotocasa

# 2. Enviroment set up
## 2.1. What we need?
- It is necessary a IDE to develop the applications
- Node.js to use his dependencies manager (NPM) to install the needed libraries
- Create React App, is a Facebook tool let build a React app envorinment
- Inter, is a tool help to void errors and support the devlopment

## 2.2. Install Node.js and NPM
Node let us execute JavaScript code in the server side. Node can be dowloaded from the official web [Node](https://nodejs.org/es/), using the downloader and execute the file.

When the installation finish Node should be added to the user enviroment varaible PATH. To check it from a terminal console execute
```console
node -v
npm -v
```
If the command doesn't works, restart your machine to update the system changes.

For me are 12.16.1(Node) and 6.14.2(NPM).

## 2.3. Install Create React App package
- Access to https://github.com/facebook/create-react-app where the project are stored and check the readme file to verify you have the Node and NPM version required.
- Note that it is necesary **npx** tool. It makes easy to use CLI tools and other executables hosted on the registry.
- To use **npx** tool it is necessary npm **5.2 or higher** and **Node 8.16.0 or Node10.16.0 or later version**.
- To intall and create a applicaton execute the next command:
```console
npx create-react-app udemy-course
```
- Access into the application folder a check the strcuture project
- By default Create React App build a application structure and define several script to execute. Execute the next commad to see the scripts which can be executed (the scripts are defined into package.json)
```console
npm run
```
- To run the application in the local machine (localhost:3000) in development mode


# 3. Basic Concepts
# 4. Conditional Render and list
# 5. React Developer Tools
# 6. Events and Forms
# 7. Children and Prototypes
# 8. Components life cicle
# 9. Good Practices
# 10. Project: Online film seeker
# 11. Redux: Application's Global Manager