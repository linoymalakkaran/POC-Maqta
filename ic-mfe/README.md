# Micro-frontends Advanced Demo

This is a demo used as a proof of concept to build a micro-frontends architecture with [Angular 11](http://angular.io), [Nx Workspace](https://nx.dev/angular) and [Ngrx Store](http://ngrx.io).

Please check the Medium article [How to build a micro-frontends architecture, with Angular and Webpack Module Federation](https://medium.com/agorapulse-stories/building-a-micro-frontends-architecture-in-2021-with-angular-and-webpack-module-federation-50d073617645?source=friends_link&sk=ec61391b28ccd0d195e84b7dfd1a531c) to get more context about this demo.

The demo is based on two apps:
- a **counter-mfe** micro-app with a Counter module, which provides a working counter feature with it's own `counter` ngrx store (state and actions),
- a main **ic-app** app which provides the default home page, an authentication feature with it's own `auth` ngrx store (state and action) from an auth lib. 

Once authenticated on the ic-app app, it's possible to navigate to the counter feature and loads the remote Counter module from **counter-mfe** app.

![Apps diagram](mfe-demo-diagram.png)

Note: for a more basic demo, you might check [MFE basic demo](https://github.com/benorama/mfe-basic-demo), with a step-by-step guide to create and configure a micro-frontend workspace. 

Note 2: the initial workspace was created with Nx CLI.

```
npx create-nx-workspace@latest mfe-advanced-demo --preset="angular" --appName="ic-app" --style="scss"
ng g @nrwl/angular:app mfe1
```

## Running the demo apps

Run the **counter-mfe** micro-app and go to http://localhost:4300.

```
nx serve counter-mfe
```

![Counter MFE](mfe-counter.png)

Run the **ic-app** main app and go to http://localhost:4200.

```
nx serve ic-app
```

![Apps diagram](mfe-ic-app-home.png)

Login and navigate to Counter MFE, which will load the Counter module from the **counter-mfe** micro-app.

![Apps diagram](mfe-ic-app-counter.png)
