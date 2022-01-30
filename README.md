# React Native Strobe

Image inspection modal component for react native.

![Gif_1](./gif1.gif)

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
import { InspectionModal } from '~/ui/components/InspectionModal';

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
