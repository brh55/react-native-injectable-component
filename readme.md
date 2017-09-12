# react-native-injectable-component
[![Travis Build Status](https://img.shields.io/travis/brh55/react-native-injectable-component.svg?style=flat-square)](https://travis-ci.org/brh55/react-native-injectable-component) [![David](https://img.shields.io/david/dev/brh55/react-native-injectable-component.svg?style=flat-square)](https://david-dm.org/brh55/react-native-injectable-component?type=dev) [![npm](https://img.shields.io/npm/dt/react-native-injectable-component.svg?style=flat-square)](https://www.npmjs.com/package/react-native-injectable-component)

> 🛠 A "injectable" react-native component that allows an external component to be injected during run-time with fallback to a default component

##### What
The core of `react-native-injectable-component` is rather small and simple. It's sole purpose is to simplify the need of passing along an external component to override the default internal component.

##### Why
This mainly rised from the issue of developing open-source components, where vast users have different preferred components. The result is the typical "rubber duck" problem, different implementations but is essentially a duck 🦆 at it's core. 

Thus, this component is essentially a high-order component with a [strategy pattern](https://en.wikipedia.org/wiki/Strategy_pattern) in mind. Therefore, as long as the injected *(passed)* component implements the same core interface, things will render visually identical and we can pass along particular props for added flexibility. 

##### When
Use `react-native-injectable-component` for building components where there is a strong indication where you suspect the component maybe replaced in the future. In addition, where you want to give users greater flexibility without having to touch the core code of your components.

## Install
```bash
$ npm install react-native-injectable-component --save
```

## Usage
1. Add an import to the top of your file
    ```js
    import Injectable from 'react-native-injectable-component';
    ```
2. Declare the component in the render method of your component
    ```jsx
    const imageProps = {
        source: {
            uri: "https://test.com/image1.jpeg"
        },
        resizeMode: "contain"
    };
    
    render() {
        return (
            <Injectable
              defaultComponent={Image}
              defaultProps={imageProps}
              injector={props.customComponent}
              injectorProps={props.customComponetProps}
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
