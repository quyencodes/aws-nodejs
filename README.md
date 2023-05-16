# Deploy Node.js Application with AWS EC2 Instance

## About
Deploy a simple node.js application over to the cloud, we'll be using an AWS EC2 instance:

<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black"></img>
<img src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white"></img>
<img src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white"></img>
<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black"></img>
<img src="https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white"></img>


For this exercise, we'll just be deploying a simple Node.js application up to the cloud and testing if our routes work. Please follow the steps below, step-by-step, to setup the appropriate packages in order to get a running application up locally. Afterwards, we'll deploy using an AWS EC2 instance and seeing if our application still works over the cloud.

## Table of Contents
- [Deploy Node.js Application with AWS EC2 Instance](#deploy-nodejs-application-with-aws-ec2-instance)
  - [About](#about)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Setting up our repository](#setting-up-our-repository)
    - [Testing with an API platform](#testing-with-an-api-platform)
    - [Getting our AWS EC2 Instance ready](#getting-our-aws-ec2-instance-ready)
  - [Contributors](#contributors)

Create a new git repository and begin following the instructions below.

## Getting Started

### Setting up our repository

1. To create <a href="https://blog.ezekielekunola.com/understanding-the-package.json-file">package.json</a> and skip <a href="https://docs.npmjs.com/cli/v9/commands/npm-init">the questionnaire altogether</a>, open VS code terminal with `ctrl + backtick mark` and write in the terminal the following command:

```bash
npm init -y
```

2. Open the terminal again and please run the following commands below. Also, please make sure you have Postman installed or an API platform of your choice.

```bash
npm i express dotenv
```

3. Now in our repository, create a new folder called server and a file called index.js. Please create an express application with the following http requests: `get`, `post`, `put`, `delete` requests. If you're struggling at this stage, feel free to refer to the source code <a ref="https://github.com/quyencodes/aws-nodejs/tree/main/server" target="_blank" rel="noreferrer noopener">here</a> and try to replicate it yourself.

4. Navigate into package.json and add a script such as below. If you decided to go with a different folder or file name, please update the server script line.

```json
"scripts": {
  "server": "node server/index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

5. Open up your terminal and write the following command:

```bash
npm run server
```

<b>Checkpoint</b>: At this point, you should be error free and the terminal should have a message something like:

```
Server is listening on port XXXX
```

Please revisit the prior steps if your application is not displaying something similar. It's okay to mess up, let's take the time to debug our code.

### Testing with an API platform

1. For this tutorial I will be using Postman to test our http requests. Please open up a Postman workbench and include the following API address to begin testing our routes:

|Navigating Postman |
:-:
<img src="https://github.com/quyencodes/v1/assets/104607182/75b028fe-52bb-4a38-bff6-c1acd2470911"/>

```bash
http://localhost:${PORT}
```

The port will default to 8080 if you have not specified any enviornment variables. If you have specified environment variables, please enter the number you set after the colon.

Please take the time here to test the express application we created with the following http requests: `get`, `post`, `put`, `delete`.

<details>
  <summary> Get Solution </summary>

  Please run the following commands with the appropriate API tabs:

  <b>Important</b>: In this solution, I use port 8000. If you are using a different port please specify accordingly.

  `GET /`

  ```
  http://localhost:8000
  ```

  Reponse:\
  `Status: 200 OK`\
  `"This test route is working just fine"`
</details>

<details>
  <summary> Post Solution </summary>

  `POST /`

  ```
  http://localhost:8000
  ```

  Here's a screenshot below if you're unfamiliar with setting a JSON body in the request.

  | Post Checkpoint
  :-:
<img src="https://github.com/quyencodes/v1/assets/104607182/57460aee-722e-4ce0-b4be-0102f627cfa5">|

  `JSON Body`
  ```json
  {
    "user": "quyencodes"
  }
  ```

  Reponse:\
  `Status: 201 OK`\
  `"Request to create quyencodes successful"`
</details>
<details>
  <summary>Put Solution</summary>

  `PUT /:id`

  ```
  http://localhost:8000/id
  ```

  Parameters

| Parameter  | Type    | Description        |
| ---------- | ------- | ------------------ |
| id | string / int | Required ID requested |

  Response:\
  `Status: 200 OK`\
  `"Request to update :id successful"`
</details>
<details>
<summary>Delete Solution</summary>

  `DELETE /:id`

  ```
  http://localhost:8000/id
  ```

  Parameters

| Parameter  | Type    | Description        |
| ---------- | ------- | ------------------ |
| id | string / int | Required ID requested |

  Response:\
  `Status: 200 OK`\
  `"Request to delete :id successful"`

</details>\

At this point we've tested all of our routes locally. This checkpoint is essential because we have to make sure our application works locally before shipping to the cloud.

### Getting our AWS EC2 Instance ready

Please navigate to .




You've now completed the basic set up for a simple Node.js application deploying with AWS EC2.

Thank you for following my tutorial and I'm happy to answer any questions, comments, or feedback to make this repo better and more beginner friendly.

## Contributors
**Quyen Hoang**\
<img src="https://user-images.githubusercontent.com/104607182/198861294-a3c1a341-0f11-4cdd-bba1-c4a254c40fc6.png" alt="Quyen Hoang" width="72">\
[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/quyenduhoang/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/quyencodes/)

