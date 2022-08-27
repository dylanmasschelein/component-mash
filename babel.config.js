module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
    ],
    "plugins": [
        ["babel-plugin-styled-components", {
            "namespace": "appname-",
            "displayName": false,
            "fileName": false
        }]
    ]
};