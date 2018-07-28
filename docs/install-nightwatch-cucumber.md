# Install nightwatch cucumber

[http://mucsi96.github.io/nightwatch-cucumber/](http://mucsi96.github.io/nightwatch-cucumber/)

## Install `nightwatch` and `cucumber`

```
npm i -D nightwatch cucumber
```
## Install `nightwatch-cucumber`

```
npm i -D nightwatch-cucumber
```

## Install `selenium-server`

```
npm i -D selenium-server
```

## Install `chromedriver`

```
npm i -D chromedriver
```

## Create the feature folder

```
mkdir features
```

## Add script to [`package.json`](../package.json)

```
"scripts": {
  "e2e-test": "nightwatch"
},
```

## Add `babel`

```
npm install babel-core babel-polyfill babel-preset-env --save-dev
```

Add [`.babelrc`]('../.batchrc')


## Add reporting

Install the floowing dependencies :
```
npm i -D cucumber-html-reporter
npm i -D npm-run-all
```
Complete [`package.json`](../package.json) with the flowing scripts :

```
"scripts": {
  "e2e": "npm-run-all e2e-test e2e-report --continue-on-error",
  "e2e-test": "nightwatch",
  "e2e-report": "node create-html-report.js"
},
```

Create the script [`create-html-report.js`](../create-html-report.js)

## Configure `nightwatch`

Create a [`nightwatch.conf.js`](../nightwatch.conf.js) in project root.
