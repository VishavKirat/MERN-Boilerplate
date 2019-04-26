module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
        "node": true
    },
    "extends": ["eslint:recommended","plugin:react/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        index:['error',2,{SwitchCase:1}],
        "linebreak-style":['error','unix'],
        quotes:['error','single'],
        semi:['error','always'],
        'no-console':['warn',{allow:['clear','info','erorr','dir','trace']}]
    },
};
