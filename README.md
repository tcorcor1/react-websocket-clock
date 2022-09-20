# react-websocket-clock

### Summary

The purpose of this project is to utilize websocket protocol and provide real-time communication between client and server to implement a simple clock.

### Technologies

- React
- Node
- TypeScript
- Nodemon / ts-node
- [ws - npm](https://www.npmjs.com/package/ws)
- [winston - npm](https://www.npmjs.com/package/winston)
- [applicationinsights - npm](https://www.npmjs.com/package/applicationinsights)

### Running the project

Add a .env file to root of api project and add environment variable for Azure Application Insights.

```shell
cd src/api
npm i
npm start

cd src/app
npm i
npm start
```

### Demo

<div>
  <img align="center" src="./docs/img/react_websocket_clock.gif" />
</div>
