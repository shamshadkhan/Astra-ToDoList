<p align="center"><img src="https://www.import.io/wp-content/uploads/2017/10/React-logo.png" width=100 height=50>
  <img src="https://user-images.githubusercontent.com/12265243/125605180-7260a070-ff8e-4c3c-9859-5c821524edc5.png" width=100 height=50></p>
  
<p align="center">
<a href="https://github.com/facebook/react/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Build Status"></a>
<a href="https://www.npmjs.com/package/react"><img src="https://circleci.com/gh/facebook/react.svg?style=shield&circle-token=:circle-token" alt="Total Downloads"></a>
<a href="https://circleci.com/gh/facebook/react"><img src="https://img.shields.io/npm/v/react.svg" alt="Latest Stable Version"></a>
<a href="https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="License"></a>
</p>

# TODO + Astra + Cassandra 📒

This is an example React To-Do application using a [DataStax Astra](https://dtsx.io/appdev-7-7) free tier database.
<!--- ENDEXCLUDE --->

![1](https://user-images.githubusercontent.com/12265243/125601578-480fa7a5-0e6d-4b09-8675-1866a79d34f7.PNG)
## 🎯 Objectives
* Create a "from scratch" **React** app using NPX
* Learn about **React** components and how they are used to dynamically update the DOM with new information
* Learn how **state** and **props** changes are used
* Learn how to use Swagger to interact with the database using a **REST** API 
* Leverage Netlify and DataStax Astra DB

-----------------------------------------
### 1. Login or Register to AstraDB and create database
![1](https://user-images.githubusercontent.com/12265243/124930324-e7031b00-e009-11eb-93ce-6c9cf3d405a9.PNG)
### 2. Create a security token
for privacy reasons the secure data are hidden
![2](https://user-images.githubusercontent.com/12265243/124930776-49f4b200-e00a-11eb-8423-4c783d07ca14.PNG)
### 3. Create a table with REST API using Swagger
for privacy reasons the secure data are hidden
![3](https://user-images.githubusercontent.com/12265243/124932386-b4f2b880-e00b-11eb-8195-95585c82ecee.PNG)
### 4. Insert data in the Table with the REST API using Swagger
for privacy reasons the secure data are hidden
![4](https://user-images.githubusercontent.com/12265243/124932645-ec616500-e00b-11eb-95c2-c6a7de39fd27.PNG)
### 5. Retrieving values
for privacy reasons the secure data are hidden
![5](https://user-images.githubusercontent.com/12265243/124933132-52e68300-e00c-11eb-9d83-4efd320c8ca8.PNG)

## Launch the TODO app

✅  **Step a:** Retrieve application token to securely connect to the database

Use the token you previously generated. 

✅  **Step b:** Configure Environment Variables and Install Dependencies

1. Create a `.env` file and fill it with values from the `.env.sample` file.

2. Make sure the package dependencies are installed
```sh
# install dependencies
npm install
```

3. Then, start the app in dev mode. Changes in the `src` or `functions` directories will trigger reloads.
```sh
# start in dev mode
npm run dev
