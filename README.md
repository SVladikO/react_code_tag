## 1. Install:

`$ npm i react-code-tag` 
###### or
`$ yarn add react-code-tag`

## 2. Usage 
```xml
import CodeTag from "react-code-tag"

...

const yourCode = function () {
    console.log('hello')
}

render () {
   return <CodeTag code={yourCode} />
}
```
![example](https://github.com/SVladikO/react_code_tag/blob/master/src/react_code_tag_example.png?raw=true)

## 3. You can customize colors too:
```xml
const style = {
  codeColor: '#11fffb',
  borderColor: '#ff0303',
  backgroundColor: '#4f67d1',
  rowNumberColor: '#000',
}

render () {
   return <CodeTag code={/* your code */} style={style}/>
}
```
![example](https://github.com/SVladikO/react_code_tag/blob/master/src/react_code_tag_example_custom.png?raw=true)


## 4. Contribute:
4.1 ```git clone https://github.com/SVladikO/react-code-tag.git```
####
4.2 ```cd react-code-tag```
####
4.3 ```npm install```
####
4.4 ```npm run start```


