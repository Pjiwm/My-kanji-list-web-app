

# AngularSandbox


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

<div align="center">
  <img src="https://img.shields.io/website?down_color=red&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Fangular-sandbox-avans.web.app%2F"/>
  <img src="https://img.shields.io/github/workflow/status/Pjiwm/angular-sandbox/ci-cd" />
  <img src="https://img.shields.io/github/commit-activity/m/pjiwm/angular-sandbox" />
  <img src="https://img.shields.io/github/last-commit/pjiwm/angular-sandbox" />
  <img src="https://img.shields.io/github/languages/code-size/Pjiwm/angular-sandbox" />
  <img src="https://img.shields.io/github/forks/Pjiwm/angular-sandbox?style=social"/>
  <br/>
   <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
   <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
   <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
   <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"/>
  <br/>
  <br/>
   <a href="https://angular-sandbox-avans.web.app/">Webapp - on firebase<a/>


</div>
<hr/>



## Docker

Using docker is completely optional, the dockerfile script however installs an instance of chrome which is used for both unit and e2e tests in code.

Required vscode plugin:
Run to build and run container:
[Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

Run to build container:
```
docker-compose up
```

press f1 in vscode and run `>Remote-Containers: Open folder in Container..` and select the work directory.
You now have access to the container via the terminal.


## Development server

Run `npm start` (Or press f5 when using remote-containers) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
If you just wanna use the workflow make sure the karma `karma.conf.js` has the same values, otherwise chrome cannot be opened, or the test will run infinitely.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests.
We use protractor in this case. The default browser that's being used is google-chrome, if e2e testing does not work check the `protractor.conf.js` file in `/e2e/src`
If you just wanna use the workflow and haven't set-up e2e yet you can use: [How to use Protractor with Angular 12](https://danielk.tech/home/angular-12-and-protractor)

## deployment
For deploying to firebase you can use this tutorial: [AUTOMATE your code deploys: Firebase Hosting & Github Actions](https://www.youtube.com/watch?v=PUuyqbVtQTQ)

Make sure that firebase directs to `dist/your-app-name` in `firebase.json` which is in our case `dist/angular-sandbox`


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
