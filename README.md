# Why I forked this

Forked from [https://github.com/chgc/angular-nx-wallaby](https://github.com/chgc/angular-nx-wallaby)

Wallaby wasn't happy with the provided wallaby.js config (from the repo above) after Nrwl Nx Release 6.1.0

so I've created this new version.

...Wallaby now runs! @ArtemGovorov updated the wallaby.js config for new pattern for e2e tests to exclude them correctly. Thanks Artem.

# To Use Wallaby in your Nrwl Nx project...

1. Run this command:
   npm i electron wallaby-webpack angular2-template-loader --save-dev

2. Put the wallaby.js and wallabyTest.ts in this repo in your root workspace folder.

3. Edit wallaby.js at line 6 & 7 to suit your folder names

```javascript
require('./apps/myapp/tsconfig.spec.json').compilerOptions,
  require('./libs/mylib/tsconfig.spec.json').compilerOptions;
```

4. Edit wallaby.js at line 46 to suit your Alias(es) (see [App Aliases and Wallaby.js #30](https://github.com/wallabyjs/ngCliWebpackSample/issues/30))

```javascript
      alias: {
        '@myworkspacename/mylib': path.join(
          wallaby.projectCacheDir,
          'libs/mylib/src/index.ts'
        )
      }
```

# Steps I used to create this:

ng new myworkspacename --collection=@nrwl/schematics

npm i electron wallaby-webpack angular2-template-loader --save-dev

ng generate lib mylib

cd libs/mylib/src/lib

ng g c lib-test

...then added <myworkspacename-lib-test></myworkspacename-lib-test> to app.component.html, and wired up the dependencies to app.module and app.component.spec

ng test myapp # passes

ng test mylib # passes

npm install --save-dev css-loader

...added alias to wallaby.js (as per [App Aliases and Wallaby.js #30](https://github.com/wallabyjs/ngCliWebpackSample/issues/30))
alias: {
'@myworkspacename/mylib': path.join(
wallaby.projectCacheDir,
'libs/mylib/src/index.ts'
)
}

My post: [Cannot find module "./browser/algorithms.json"​​ #1749](https://github.com/wallabyjs/public/issues/1749)
Other references: [Angular NX config? #1347](https://github.com/wallabyjs/public/issues/1347)

# Myworkspacename

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

## Nrwl Extensions for Angular (Nx)

<a href="https://nrwl.io/nx"><img src="https://preview.ibb.co/mW6sdw/nx_logo.png"></a>

Nx is an open source toolkit for enterprise Angular applications.

Nx is designed to help you create and build enterprise grade Angular applications. It provides an opinionated approach to application project structure and patterns.

## Development server

Run `ng serve --app=myapp` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
