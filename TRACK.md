- pnpm init

## Mongo / Mongoose
- pnpm install mongoose

## TS setup
- pnpm install --save-dev typescript
- npx tsc --init
- tsconfig file generated
- pnpm add --save-dev @types/node
- pnpm add --save-dev eslint eslint-plugin-import nodemon ts-node
- in package.json
```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node --inspect=5858 -r ts-node/register ./server/index.ts",
    "start:watch": "nodemon",
    "build": "tsc"
  },
"nodemonConfig": {
    "ignore": [
      "**/*.test.ts",
      "**/*.spec.ts",
      ".git",
      "node_modules"
    ],
    "watch": [
      "server"
    ],
    "exec": "npm start",
    "ext": "ts"
  }
```

## Express
- pnpm add express
- pnpm add --save-dev @types/express


## DOTENV
- pnpm add dotenv --save
