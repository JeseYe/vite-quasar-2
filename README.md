## `Vite 2.x + Vue 3.x + quasar 2.x starter ⚡`

This starter template also includes:

- [Vue Router 4.x](https://github.com/vuejs/vue-router-next)
- [quasar 2.x](https://github.com/quasarframework/quasar)
- [vite 2.x](https://github.com/vitejs/vite)
- [axios 0.21.x](https://github.com/axios/axios)

## api modules based on axios and vue-router

## Broken install binary on macOS #462

% cat node_modules/esbuild/bin/esbuild
#!/usr/bin/env node
throw new Error(`esbuild: Failed to install correctly`);


```shell
npm i
node node_modules/esbuild/install.js

npm run dev
```
