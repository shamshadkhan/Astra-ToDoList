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

Demo: https://astra-todolist.netlify.app
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
### 6. Deploy to Netlify
  [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](app.netlify.com/start/deploy?repository=your_new_git_repo_url)
  
This will take a few minutes.

  * Click on `Site deploy in progress` within the Netlify UI, 
  * Click the top deploy link to see the build process.
  * Wait until the build complete `Netlify Build Complete`,  **When you see Pushing to repository** you're ready to move on.
  * Scroll up to the top and click on the site name (it'll be after {yourlogin}'s Team next to the Netlify button).
### 7. Access YOUR GitHub repository

  * Click on the `GitHub` in `Deploys from GitHub` to get back to your new repository.

### 8. Launch GitPod IDE
- Click the button to launch the GitPod IDE from **YOUR** repository.
  [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#/your_new_git_repo_url/)
* From your GitPod terminal execute the following command
```
git remote -v
```
#### WAIT! Before moving on ensure you are working out of YOUR new created repository.

### 9. Install the Netlify CLI (Command Line Interface)
 * In the directory run the following command to install the netlify-cli
 ```
 npm install -g netlify-cli
```

### 10. Configure and connect database
 * In the repository directory run the following command to set up your Astra DB environment. This will verify the database you created earlier or create a new one for you if it can't find your database.
 ```
 npm exec astra-setup todos_workshop_db todos
```
### 11. Launch your app
  * Run the application 
  ```
  netlify dev
  ```
  * The application should automatically launch in the GitPod preview pane

### 9. Connect Netlify to your site
Execute each of the commands below to link your code to your Netlify deployment.
  * First thing, we'll need to **STOP** the `netlify dev` command we issued a moment ago. In the terminal where you executed the netlify command issue a `CTRL-C` (control key + the C key) in order to stop the process.
  * Then continue with the following commands
  * This will pop up a browser to authenticate with netlify
  ```
  netlify login
  ```
  _Note, when using GitPod the preview pane will not display this properly. You must click the "open in a new window" button in the very top right of the preview pane._

  * This will link your workspace to the associated site
  ```
  netlify link
  ```

  * This will take the .env file created by astra-setup and upload it to netlify
  ```
  netlify env:import .env
  ```

<!--
  * Will be used to allow you to execute `netlify open`
  ```
  netlify sites:list
  ```
-->

### 10. Deploy to production
Now that you've hooked everything up, time to deplpoy to production.

  * Run
  ```
  netlify build
  ```

  * Then run
  ```
  netlify deploy --prod
  ```

  * Then finally run
  ```
  netlify open:site
  ```
  
  You've deployed your app to Netlify!

