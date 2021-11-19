
# Install Based on Starter Kit

Starting Nebular from  [ngx-admin](https://github.com/akveo/ngx-admin/)  starter kit is the easiest way to run your first Nebular application.

Please note, that  **ngx-admin**  is just a frontend application. Backend integration can be done relatively simple, but you should be aware that all the data is mocked using JavaScript objects. If you want the data to be dynamic, you should consider developing a backend integration separately. The Nebular team doesn't consider providing generic integration layer as a part of this project because every backend API has a distinct structure in terms of data format and URLs.

## Install tools

To install ngx-admin on your machine you need to have the following tools installed:

-   Git -  [https://git-scm.com](https://git-scm.com/)
-   Node.js -  [https://nodejs.org](https://nodejs.org/). Please note the  **version**  should be  **>=8**
-   Npm - Node.js package manager, comes with Node.js. Please make sure npm  **version**  is  **>=5**
-   You might also need some specific native packages depending on your operating system like  `build-essential`  on Ubuntu

WARNING!

Please note that  **it is not possible**  to build ngx-admin  **without these tools**  and it will not be possible because of the way how Angular is built.

## Download the code

When you completed the tools setup, you need to download the code of ngx-admin application. The easiest way to do that is to clone GitHub repository:

```
git clone https://github.com/akveo/ngx-admin.git

```

After clone is completed, you need to install npm modules:

```
cd ngx-admin && npm i

```

WARNING!

Please make sure that installation process successfully completed without errors.

## Run a local copy

To run a local copy in development mode, execute:

```
npm start

```

Go to  [http://0.0.0.0:4200](http://0.0.0.0:4200/)  or  [http://localhost:4200](http://localhost:4200/)  in your browser.

## Production bundle

To create a bundle in production mode, execute:

```
npm run build:prod

```

This will clear up your  `dist`  folder (where release files are located) and generate a release build. Now you can copy the sources from the  `dist`  folder and use it with any backend framework or simply  [put it under a web server](https://akveo.github.io/nebular/docs/guides/server-deployment).