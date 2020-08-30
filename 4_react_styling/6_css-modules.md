in order to set up css-modules we need to eject react config (this is for CRA older projects, newer ones have another way of doing this)

npm run eject

Now we have access to webpack settings

## moding webpack.config.dev.js

We have to mod how our css is processed

Original

```javascript
      {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
```

After changes

```javascript
{
    options: {
        importLoaders: 1,
        modules: true, // enables css modules feature
        locationIdentName: "[name]__[local]__[hash:base64:5]", //used to create dynamic css class names
    },
}

```

Same two lines need to be add to webpack.config.prod.js file

```javascript

    options: {
    importLoaders: 1,
    minimize: true,
    sourceMap: shouldUseSourceMap,
    modules: true,
    locationIdentName: "[name]__[local]__[hash:base64:5]",
    },
```

## using css-modules

On top of the .js file:

```javascript
import classes from "./App.css";
```

Now our react app allows us to import all class in this way from css files on a object

This is how we add individual classes on jsx

```javascript
<div className={classes.red}>Test</div>
```

object classes was imported from css file and has properties that are css classes.

css modules is applied by build process. It transforms class names into unique ones. Those are mapped to our classnames.

## css modules in newer react version

in newer react versions we dont have to to change much when it comes to CRA we just need to name the modules:
name.module.css
and Import it to our component

import classes from 'name.module.css'
