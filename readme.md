## Request-Header-Parser-Microservice

### Deployed on Heroku [DEMO](https://headerParser-yuchiu.herokuapp.com/)

### User Story

-  I can get the IP address, language and operating system for my browser.

#### Example output:

```

{
    "ipaddress": {
        "clientIp": "::1",
        "clientIpRoutable": false
    },
    "language": "en-US",
    "software": "Windows NT 10.0; Win64; x64"
}

``` 

*****************************************************

### Local Usage 
#### 1. First install package cross-env globally(Optional)

```
npm i -g cross-env

```
Ensure npm scripts work properly across Linux, Windows, and all environments.

#### 2. install everything else

```
npm install

```

#### 3a. run on localhost

```
npm start

```
Server will be running on http://localhost:3000