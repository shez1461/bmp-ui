# BMP-UI Demo
[![BMP Demo](https://img.youtube.com/vi/EHg6HqbTcQo/0.jpg)](https://youtu.be/EHg6HqbTcQo)

# Bamboo Monitoring/Management Portal

This repo provides a front-end user experience by using one of many dependencies such as nodejs, npm etc.

**Quick summary**
Provides developer to access list of front-end template ready to be installed on server.
Version - `v0.0.1`

### How do I get set up? ###

* Summary of set up - `Linux OS [Ubuntu-18.04 LTS]` with `build-essential`.
* Configuration - N/A
* Dependencies - `NodeJS, Node, NPM, AngularJS`
* Database configuration - N/A
* How to run tests - `npm run test`
* Deployment instructions - N/A

### Install - Template ngx-admin

To install `ngx-admin` on your machine you need to have the following tools installed:

`Node.js` - https://nodejs.org. Please note the version should be `>=8`
`Npm` - Node.js package manager, comes with Node.js. Please make sure npm version is `>=5`

You might also need some specific native packages depending on your operating system like `build-essential` on Ubuntu.

**WARNING!**
*Please note that **it is not possible** to build ngx-admin **without these tools** and it will not be possible because of the way how Angular is built.*

After clone is completed, you need to install npm modules:

**Install Dependencies**

  `sudo apt update && sudo apt install -y curl`

  `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`
  
  `nvm install node`

  `npm install -g @angular/cli`

  `nvm install --lts`

**To Install**:

  `cd ngx-admin && npm i`

Follow the installation instructions prompted required & After installation is complete without any errors, run or serve the app.

**To start http serve**:

  `npm run start`

