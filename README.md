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
  [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](app.netlify.com/start/deploy?repository=https://github.com/shamshadkhan/ToDoList)
This will take a few minutes.

  * Click on `Site deploy in progress` within the Netlify UI, 
    <details>
    <summary>Show me! </summary>
    <img src="tutorial/images/deploy-1.png" />
    </details>

  * Click the top deploy link to see the build process.
    <details>
    <summary>Show me! </summary>
    <img src="tutorial/images/deploy-2.png" />
    </details>

  * Wait until the build complete `Netlify Build Complete`,  **When you see Pushing to repository** you're ready to move on.
    <details>
    <summary>Show me! </summary>
    <img src="tutorial/images/deploy-3.png" />
    </details>

  * Scroll up to the top and click on the site name (it'll be after {yourlogin}'s Team next to the Netlify button).
    <details>
    <summary>Show me! </summary>
    <img src="tutorial/images/deploy-4.png" />
    </details>

### 3. Access YOUR GitHub repository

  * Click on the `GitHub` in `Deploys from GitHub` to get back to your new repository.  Scroll to where you were in the README.
    <details>
    <summary>Show me! </summary>
    <img src="tutorial/images/deploy-5.png" />
    </details>

### 4. Launch GitPod IDE
- Click the button to launch the GitPod IDE from **YOUR** repository.

* _Supported by <img src="tutorial/images/chrome-logo.svg" height="20"/> Chrome and <img src="tutorial/images/firefox-logo.svg" height="20"/> Firefox_

#### WAIT! Before moving on ensure you are working out of YOUR repository, not the datastaxdevs repository.

![correct notcorrect](tutorial/images/correct-not-correct.png?raw=true)

If you are still using the `datastaxdevs` repo please ensure to follow the previous step, [step3](#3-clone-your-github-repository) to get to your repo.

 * Ok, I've got it, just give me the button already
 * <details>
     <summary>CLICK HERE to launch GitPod</summary>

     [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)
   </details>
   
#### WAIT! Before moving on ensure you are working out of YOUR repository, not the datastaxdevs repository.
* From your GitPod terminal execute the following command
```
git remote -v
```

If the result returned from the command displays **`datastaxdevs`** then you are not in the correct repository. If this is the case please [repeat step 3 above](#3-access-your-github-repository), otherwise just move on to the next step.

### 5. Install the Netlify CLI (Command Line Interface)
 * In the `workshop-astra-tik-tok` directory run the following command to install the netlify-cli
 ```
 npm install -g netlify-cli
```
 * <details><summary>Show me!</summary>
    <img src="tutorial/images/netlify-install-cli.png?raw=true" />
    </details>

### 6. Generate application token to securely connect to the database

Following the [Documentation](https://docs.datastax.com/en/astra/docs/manage-application-tokens.html) create a token with `Database Admnistrator` roles.

- Go the `Organization Settings`

- Go to `Token Management`

- Pick the role `Database Admnistrator` on the select box

- Click Generate token

 * <details><summary>Show me!</summary>
    <img src="tutorial/images/astra-create-token.gif?raw=true" />
    </details>

This is what the token page looks like. 
 * Click the **`Download CSV`** button. You are going to need these values here in a moment.

![image](tutorial/images/astra-token.png?raw=true)

Notice the clipboard icon at the end of each value.

- `Client ID:` We will *not* use this during this workshop

- `Client Secret:` We will *not* use this during this workshop

- `Token:` *This is your token!* We will use it as a api Key to interact with APIS

To know more about roles of each token you can have a look to [this video.](https://www.youtube.com/watch?v=nRqu44W-bMU)

### 7. Configure and connect database
 * In the repository directory run the following command to set up your Astra DB environment. This will verify the database you created earlier or create a new one for you if it can't find your database.
 ```
 npm exec astra-setup tiktok_workshop_db tiktok_keyspace
```

<details>
<summary>What does astra-setup do?</summary>
    To setup your ASTRA instance, you want to run `npm exec astra-setup`

    This will do the following:
    * Have you go to your [Astra DB instance](https://datastx.io/workshops) to register or login. There is no credit card required to sign up. The 'Pay as you go' option gives you a huge amount of transactions for free:
        * 30 million reads
        * 5 million writes
        * 40 gigabytes of storage
    * Give steps to grab a Database Administrator Token and paste it into the input field
    * Ask you what database you want to use (default, existing, create)
    * Create or access the database
    * Create/update an .env file in the project root
    * Create/update an .astrarc file in your home directory
        * This can be used by httpie-astra `pip3 install httpie-astra`
        * It can also be used by the @astra/collections and @astra/rest node modules

    ## Specify the database and keyspace
    You can run the script and tell it which database/keyspace to use by using:
    `npm exec astra-setup databasename keyspacename`
</details>

### 8. Launch your app
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
  ![Netlify Setup Example](./tutorial/images/netlify-livesite.png?raw=true)

app.netlify.com/start/deploy?repository=https://github.com/shamshadkhan/ToDoList
gitpod.io//#/https://github.com/shamshadkhan/Astra-ToDoList
## Launch the TODO app

✅  **Step a:** Retrieve application token to securely connect to the database

Use the token you previously generated. 

✅  **Step b:** Configure Environment Variables and Install Dependencies

1. Create a `.env` file and fill it with values from the `.env.sample` file.
```sh
# configure enviroment
npm exec astra-setup todos_workshop_db todos
```
2. Make sure the package dependencies are installed
```sh
# install dependencies
npm install
```

3. Then, start the app in dev mode. Changes in the `src` or `functions` directories will trigger reloads.
```sh
# start in dev mode
npm run dev
