# react-responsive-font-size
Set the font-size responsively according to the parent element height.

## Get the package
**npm**
```
npm install react-responsive-font-size
```

**yarn**
```
yarn add react-responsive-font-size
```

## Usage
This package contains two methods for setting your font-size according to the parent element height. 

### Provider
The easiest and prefered way is to use `ResponsiveFontSize` as a **provider**.
```JavaScript
import { ResponsiveFontSize } from 'react-responsive-font-size'

function MyComponent() {
  return (
    <div style={{height: 400px}}>
      <ResponsiveFontSize ratio={0.5} optionsObject={{ setFontSize: true, globalVariableName: '--my-variable', lockFontSize: false }}>
        The font-size is now set to 50% the height of the parent element (200px)
      </ResponsiveFontSize>
    </div>
  )
}
```

### Hook
The second way is to use the **hook**, which is used by the provider as well.
```JavaScript
import { useResponsiveFontSize } from 'react-responsive-font-size'

function MyComponent() {
  const myRef = useResponsiveFontSize(0.5, { setFontSize: true, globalVariableName: '--my-variable', lockFontSize: false })

  return (
    <div style={{height: 400px}}>
      <div ref={myRef}>
        The font-size is now set to 50% the height of the parent element (200px)
      </div>
    </div>
  )
}
```

### Options
You have a few options for adjusting the behavior of you font-size.

- `ratio`: A number value between 0 and 1. This value is multiplied by the height of the parent container which is then set as the new font-size.

- `optionsObject`: Optional settings for modifying the behavior. 
  - `setFontSize`: *Boolean*. Actually set the font-size for child elements. Default: `true` 
  - `globalVariableNam`: *String*. Set a global css variable with the name you gave it. Default: `null` 
  - `lockFontSize`: *Boolean*. Lock the current font-size. Disables responive behavior. Default: `false`


## Contributing
Feel free to open issues or pull requests in the GitHub repository.
