# Using TypeScript with Architect

This project demonstrates a simple example of using Architect with TypeScript. See the `build` script in [`package.json`](/package.json) that automatically compiles the TypeScript code before running locally or deploying. See an example of writing a serverless lambda function with TypeScript at [`src/http/get-index/index.ts`](src/http/get-index/index.ts). Types for the [Architect runtime helpers for Node.js](https://www.npmjs.com/package/@architect/functions) are used from the [@types/architect\_\_functions](https://www.npmjs.com/package/@types/architect__functions) package.

More documentation on using TypeScript and Architect is available at https://arc.codes/docs/en/guides/developer-experience/using-typescript

## Local Development

```bash
npm start
```

## Deployment

```bash
npm run deploy
```
