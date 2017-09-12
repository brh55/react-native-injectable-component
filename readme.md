# react-native-custom-component [![Travis Build Status](https://img.shields.io/travis/brh55/react-native-custom-component.svg?style=flat-square)](https://travis-ci.org/brh55/react-native-custom-component) [![David](https://img.shields.io/david/dev/brh55/react-native-custom-component.svg?style=flat-square)](https://david-dm.org/brh55/react-native-custom-component?type=dev) [![npm](https://img.shields.io/npm/dt/react-native-custom-component.svg?style=flat-square)](https://www.npmjs.com/package/react-native-custom-component)

> My awesome component does a lot of cool stuff!

## Install
```bash
$ npm install react-native-custom-component --save
```

## Usage
1. Add an import to the top of yur file
    ```js
    import CustomComponent from 'react-native-custom-component';
    ```
2. Declare the component in the render method of your component
    ```jsx
    render() {
        return (
            <CustomComponent
              hello={'Hello world!'}
             />
        )
    }
    ```
3. Take a look at the [example app](/tree/master/example).

## Component Props
| Property | Type     | Description             | Example     |
|----------|----------|-------------------------|-------------|
| hello    | `string` | The hello world message | `Hello 🦄!` |

## License
MIT © [Brandon Him](https://github.com/brh55/react-native-custom-component)

---
# Generator Notes
👋🏽 Hello and thanks for using, [`generator-rnc`](https://github.com/brh55/generator-rnc)! <br>
Please feel free to report [bugs](https://github.com/brh55/generator-rnc/issues) or contribute useful features to the generator to help others.

Also, don't forget to include example an application for users to test out and use your component.

1. `react-native init example`

> 🗒 P.S: Don't forget to delete this note :)
