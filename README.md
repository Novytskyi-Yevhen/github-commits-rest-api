<p align="center">
  <a href="https://quiet-badlands-07168.herokuapp.com/commits" align="center">github-commits-rest-api</a>
    <p align="center">
</p>

## Description

Github-commits-rest-api is a back-end application, TypeScript and Nest.js-powered.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Tech

## Installation

Github-commits-rest-api requires [Node.js](https://nodejs.org/) v14.7+ to run.

Clone the repo
```sh
gh repo clone Novytskyi-Yevhen/github-commits-rest-api
```
Create .env file into the root folder with two parameters
```sh
PORT=3000
GITHUB_TOKEN ='' // your github token 
```

## Dependencies

Github-commits-rest-api is currently dependencies with the following plugins.

| Dependencies | Where is used |
| ------ | ------ |
| [Octokit](https://www.npmjs.com/package/@octokit/core)| Extendable client for GitHub's REST & GraphQL APIs | 
| [dotenv](https://www.npmjs.com/package/dotenv)| For use environment variables | 
| [Nest](https://www.npmjs.com/package/express) | To create and start the server  | 
| [typescript](https://www.npmjs.com/package/typescript) | For development with using types| 

## How it works
# /commits - get method will be return commits

Query params
| Params name | Params type | Required |
| ------ | ------ | ------ |
| owner - name of owner repository | string | Not required. Default - "nodejs" |
| repo - name of repo | string | Not required. Default - "node" |
| per_page - count of commits return | number | Not required. Max value - 100. Default - 25 |
| sha - SHA or branch to start listing commits from. Default: the repository’s default branch (usually master) | string | Not required. Default - "master" |
| filter | string | Not required. Works with only one of the parameters - "messages" or "hashes". If you have not set this option, all data for each commit will be returned. |
| page | number | Not required. Page number of the results to fetch. Default - 1 |

![](https://i.ibb.co/HTjvzcx/first.png)
![](https://i.ibb.co/QPXWPKZ/first.png)
![](https://i.ibb.co/5rVrzL6/first.png)
