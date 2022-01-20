/*global System */
'use strict';

System.config({
    transpiler: 'plugin-babel',
    babelOptions: {
        sourceMaps: false,
        stage0: true,
        react: true
    },
    meta: { },
    paths: {
      'npm:': 'https://unpkg.com/'
    },
    map: {
      // our app is within the app folder
      app: 'app/index.js', 
      
      "plugin-babel": 'https://unpkg.com/systemjs-plugin-babel@0.0.25/plugin-babel.js',
      "systemjs-babel-build": 'https://unpkg.com/systemjs-plugin-babel@0/systemjs-babel-browser.js',
      
      "react": "npm:react@16/umd/react.development.js",
      "react-dom": "npm:react-dom@16/umd/react-dom.development.js",
      "font-awesome": "npm:font-awesome@4.7.0",
      "react-scripts": "npm:react-scripts@1.0.11",
      "primereact": "npm:primereact@1.0.1/"

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      'https://unpkg.com/' : { defaultExtension: false },
    }
});
 
System.import('app');