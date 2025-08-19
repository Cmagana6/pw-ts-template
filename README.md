# pw-ts-template

## Reporisotry to serve as a quick guide to install playwright and run your tests

### Tools that you will need to install:

- NodeJS
- VSCode

#### note: remember to install npm and npx

### Now check that you have successfully installed NodeJS

``` 
Open a cmd and type the following command

node -v

If node was correctly installed you will see the version

Same for npm

npm -v

if correctly installed the version will show up

````

## Install playwright

### Steps:

1.run command in terminal 

```
npm init playwright@latest
```

#### After the command is running just hit enter in all the upcoming options to make default configuration

### You will see the following items were created in your root folder:

- gitignore
- package-lock.json
- package.json
-playwright.config.ts
- test folder
- test-examples folder

## Extensions in VSCode for playwright

### Why we need them?
#### There are powerful extensions that are going to help us code faster and run specific tests

### Which ones?

#### I recommend the following ones:
- Playwright Test Snippets by Mark Skelton
- Playwright Test for VSCode by Microsoft
- Playwright Snippets by Nitay Neeman
- Playwright Runner by KOUSHIK

## And just with that can we run pw?

#### As you already said we are ready to run pw in vscode so easy fast and reliable.

## How?

### Ways to run pw test:

- By running in the terminal:

```
npx playwright test
```

#### This will run all the test under the sample project that live inside the tests folder

- By using the extensions that we just installed
> 1. Go to the tests folder 
> 2. Click on home.spect.ts
> 3. You will see the play button at the left on the line count
> 4. Click on play on the desired test
> 5. Test will start run

## How we check the execution?

### As easy as typing

```
npx playwirght show-report
```

