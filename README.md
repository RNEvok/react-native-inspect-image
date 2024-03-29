# React Native Inspect Image

Image inspection modal component for react native.

![Gif_1](https://github.com/RNEvok/react-native-inspect-image/blob/main/gif1.gif?raw=true)

### Prerequisites

If you want to use this library, you also need to install:

```
react-native-reanimated
react-native-redash
react-native-gesture-handler
```

## Installing

Using npm:

```
npm install react-native-inspect-image
```

Using yarn:

```
yarn add react-native-inspect-image
```

## Usage example

```javascript
import { InspectionModal } from 'react-native-inspect-image';

...
const [inspectionModalOpened, setInspectionModalOpened] = useState(false);

<InspectionModal 
  visible={inspectionModalOpened}
  imgSource={source}
  onClose={() => setInspectionModalOpened(false)}
  bgColor={'#000'}
/>
...
```

## Props


```
visible: boolean;
```
'visible' prop for native modal

```
imgSource: ImageSourcePropType;
```
Source of your image

```
bgColor?: string;
```
Background color of modal

```
showClose?: boolean;
```
Display close button

```
closeIconColor?: string;
```
Color of close icon

```
onClose: () => void;
```
Modal's onRequestClose callback

## Built With

* [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated)
* [react-native-redash](https://www.npmjs.com/package/react-native-redash)
* [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler)


## Authors

* **Me** - *Initial work* - [Profile](https://github.com/RNEvok)

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) for details
