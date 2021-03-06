const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, '../../tsconfig.base.json'),
    [/* mapped paths to share */]);

module.exports = {
    output: {
        uniqueName: "header-mfe"
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    plugins: [
        new ModuleFederationPlugin({

            name: "header",
            filename: "headerRemoteEntry.js",
            exposes: {
                './header-route.module': './apps/header-mfe/src/app/header/header-route.module.ts'
            },

            shared: {
                "@angular/core": {singleton: true, strictVersion: false},
                "@angular/common": {singleton: true, strictVersion: false},
                "@angular/router": {singleton: true, strictVersion: true},
                "@ngrx/effects": {singleton: true, strictVersion: true},
                "@ngrx/router-store": {singleton: true, strictVersion: true},
                "@ngrx/store": {singleton: true, strictVersion: true},

                // @ben Disabled, does not work (build step stuck)
                // ...sharedMappings.getDescriptors()
            }

        }),
        sharedMappings.getPlugin(),
    ],
};
