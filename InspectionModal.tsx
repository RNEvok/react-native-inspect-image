import React, { memo } from 'react';
import { Modal, View, ImageSourcePropType, Dimensions, TouchableOpacity } from 'react-native';
import { createStyle } from './InspectionModalStyles';
import { PinchGestureHandler, PinchGestureHandlerGestureEvent, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useVector } from 'react-native-redash';
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated';
import CloseIcon from './close';

// Global constants
const { height, width } = Dimensions.get('window');
const DEFAULT_SCALE = 1;
const HALF_HEIGHT = height / 2;
const HALF_WIDTH = width / 2;
const MINUS_HALF_HEIGHT = -HALF_HEIGHT;
const MINUS_HALF_WIDTH = -HALF_WIDTH;

export type InspectionModalProps = {
  visible: boolean;
  imgSource: ImageSourcePropType;
  bgColor?: string;
  closeIconColor?: string;
  showClose?: boolean;
  onClose: () => void;
};

const InspectionModal: React.FC<InspectionModalProps> = ({
  visible,
  imgSource,
  showClose,
  bgColor,
  closeIconColor,
  onClose
}) => {
  
  const s = createStyle();

  const gestureScale = useSharedValue(DEFAULT_SCALE);
  const focal = useVector(0, 0);
  const origin = useVector(0, 0);
  const adjustedFocalX = useDerivedValue(() => MINUS_HALF_WIDTH + focal.x.value, [focal]);
  const adjustedFocalY = useDerivedValue(() => MINUS_HALF_HEIGHT + focal.y.value, [focal]);

  const transformStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: origin.x.value },
      { translateY: origin.y.value },
      { scale: gestureScale.value },
      { translateX: -origin.x.value },
      { translateY: -origin.y.value },
    ]
  }));

  const pinchHandler = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
    onActive: (event) => {
      focal.x.value = event.focalX;
      focal.y.value = event.focalY;

      origin.x.value = adjustedFocalX.value;
      origin.y.value = adjustedFocalY.value;

      gestureScale.value = event.scale;
    },
    onEnd: (e) => {
      gestureScale.value = withTiming(DEFAULT_SCALE);
    },
    onCancel: (e) => {
      gestureScale.value = withTiming(DEFAULT_SCALE);
    },
    onFail: (e) => {
      gestureScale.value = withTiming(DEFAULT_SCALE);
    } 
  });
  
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      onRequestClose={() => onClose()}
      {...{visible}}
    >
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={s?.modalCont}>
          <View style={[s?.main, {backgroundColor: bgColor}]}>
            {showClose &&
              <TouchableOpacity 
                onPress={() => onClose()}
                style={s?.closeBtn}
              >
                <CloseIcon color={closeIconColor}/>
              </TouchableOpacity>
            }
            <PinchGestureHandler onGestureEvent={pinchHandler}>
              <Animated.View style={[s?.animatedImgCont]}>
                <Animated.Image 
                  source={imgSource} 
                  style={[s?.imgModal, transformStyle]}
                />
              </Animated.View>
            </PinchGestureHandler>
          </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
  
};

InspectionModal.defaultProps={
  bgColor: '#fff',
  closeIconColor: '#000',
  showClose: true
}

const MemorizedComponent = memo(InspectionModal);
export { MemorizedComponent as InspectionModal };