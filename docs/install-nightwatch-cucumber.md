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

## Add script to `package.json`

```
"scripts": {
  ...
  "e2e-test": "nightwatch"
  ...
},
```

## Configure `nightwatch`

Create a `nightwatch.conf.js` in project root.

```
touch nightwatch.conf.js
```

Add `require('nightwatch-cucumber')` with `cucumberArgs`.

```
require('nightwatch-cucumber')({
  cucumberArgs: [ '--require-module', 'babel-core/register'
                , '--require', 'features/step_definitions'
                , '--format', 'json:reports/cucumber.json'
                , 'features'
                ]
});
```
