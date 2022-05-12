function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
const STEP_STATUS = {
  CURRENT: 'current',
  FINISHED: 'finished',
  UNFINISHED: 'unfinished'
};
const defaultStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  separatorStrokeUnfinishedWidth: 0,
  separatorStrokeFinishedWidth: 0,
  currentStepStrokeWidth: 5,
  stepStrokeWidth: 0,
  stepStrokeCurrentColor: '#4aae4f',
  stepStrokeFinishedColor: '#4aae4f',
  stepStrokeUnFinishedColor: '#4aae4f',
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: '#a4d4a5',
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#a4d4a5',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#000000',
  labelSize: 13,
  labelAlign: 'center',
  currentStepLabelColor: '#4aae4f'
};

const StepIndicator = ({
  currentPosition = 0,
  stepCount = 5,
  direction = 'horizontal',
  customStyles: customStylesFromProps = defaultStyles,
  labels = [],
  onPress,
  renderStepIndicator: renderCustomStepIndicator,
  renderLabel
}) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [progressBarSize, setProgressBarSize] = React.useState(0);
  const [customStyles, setCustomStyles] = React.useState(_objectSpread(_objectSpread({}, defaultStyles), customStylesFromProps));
  const progressAnim = React.useRef(new Animated.Value(0)).current;
  const sizeAnim = React.useRef(new Animated.Value(customStyles.stepIndicatorSize)).current;
  const staleSizeAnim = React.useRef(new Animated.Value(customStyles.stepIndicatorSize)).current;
  const borderRadiusAnim = React.useRef(new Animated.Value(customStyles.stepIndicatorSize / 2)).current;

  const stepPressed = position => {
    if (onPress) {
      onPress(position);
    }
  };

  const effectCustomStyles = () => {
    setCustomStyles(_objectSpread(_objectSpread({}, customStyles), customStylesFromProps));
  };

  React.useEffect(effectCustomStyles, [customStylesFromProps]);

  const effectCurrentPosition = () => {
    onCurrentPositionChanged(currentPosition);
  };

  React.useEffect(effectCurrentPosition, [currentPosition, progressBarSize]);

  const renderProgressBarBackground = () => {
    let progressBarBackgroundStyle = {
      backgroundColor: customStyles.separatorUnFinishedColor,
      position: 'absolute'
    };

    if (direction === 'vertical') {
      progressBarBackgroundStyle = _objectSpread(_objectSpread({}, progressBarBackgroundStyle), {}, {
        left: (width - customStyles.separatorStrokeWidth) / 2,
        top: height / (2 * stepCount),
        bottom: height / (2 * stepCount),
        width: customStyles.separatorStrokeUnfinishedWidth === 0 ? customStyles.separatorStrokeWidth : customStyles.separatorStrokeUnfinishedWidth
      });
    } else {
      progressBarBackgroundStyle = _objectSpread(_objectSpread({}, progressBarBackgroundStyle), {}, {
        top: (height - customStyles.separatorStrokeWidth) / 2,
        left: width / (2 * stepCount),
        right: width / (2 * stepCount),
        height: customStyles.separatorStrokeUnfinishedWidth === 0 ? customStyles.separatorStrokeWidth : customStyles.separatorStrokeUnfinishedWidth
      });
    }

    return /*#__PURE__*/React.createElement(View, {
      onLayout: event => {
        if (direction === 'vertical') {
          setProgressBarSize(event.nativeEvent.layout.height);
        } else {
          setProgressBarSize(event.nativeEvent.layout.width);
        }
      },
      style: progressBarBackgroundStyle
    });
  };

  const renderProgressBar = () => {
    let progressBarStyle = {
      backgroundColor: customStyles.separatorFinishedColor,
      position: 'absolute'
    };

    if (direction === 'vertical') {
      progressBarStyle = _objectSpread(_objectSpread({}, progressBarStyle), {}, {
        left: (width - customStyles.separatorStrokeWidth) / 2,
        top: height / (2 * stepCount),
        bottom: height / (2 * stepCount),
        width: customStyles.separatorStrokeFinishedWidth === 0 ? customStyles.separatorStrokeWidth : customStyles.separatorStrokeFinishedWidth,
        height: progressAnim
      });
    } else {
      progressBarStyle = _objectSpread(_objectSpread({}, progressBarStyle), {}, {
        top: (height - customStyles.separatorStrokeWidth) / 2,
        left: width / (2 * stepCount),
        right: width / (2 * stepCount),
        height: customStyles.separatorStrokeFinishedWidth === 0 ? customStyles.separatorStrokeWidth : customStyles.separatorStrokeFinishedWidth,
        width: progressAnim
      });
    }

    return /*#__PURE__*/React.createElement(Animated.View, {
      style: progressBarStyle
    });
  };

  const renderStepIndicator = () => {
    let steps = [];

    for (let position = 0; position < stepCount; position++) {
      steps.push( /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
        key: position,
        onPress: () => stepPressed(position)
      }, /*#__PURE__*/React.createElement(View, {
        style: [styles.stepContainer, direction === 'vertical' ? {
          flexDirection: 'column'
        } : {
          flexDirection: 'row'
        }]
      }, renderStep(position))));
    }

    return /*#__PURE__*/React.createElement(View, {
      onLayout: event => {
        setWidth(event.nativeEvent.layout.width);
        setHeight(event.nativeEvent.layout.height);
      },
      style: [styles.stepIndicatorContainer, direction === 'vertical' ? {
        flexDirection: 'column',
        width: customStyles.currentStepIndicatorSize
      } : {
        flexDirection: 'row',
        height: customStyles.currentStepIndicatorSize
      }]
    }, steps);
  };

  const renderStepLabels = () => {
    if (!labels || labels.length === 0) {
      return;
    }

    var labelViews = labels.map((label, index) => {
      const selectedStepLabelStyle = index === currentPosition ? {
        color: customStyles.currentStepLabelColor
      } : {
        color: customStyles.labelColor
      };
      return /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
        style: styles.stepLabelItem,
        key: index,
        onPress: () => stepPressed(index)
      }, /*#__PURE__*/React.createElement(View, {
        style: styles.stepLabelItem
      }, renderLabel ? renderLabel({
        position: index,
        stepStatus: getStepStatus(index),
        label,
        currentPosition
      }) : /*#__PURE__*/React.createElement(Text, {
        style: [styles.stepLabel, selectedStepLabelStyle, {
          fontSize: customStyles.labelSize,
          fontFamily: customStyles.labelFontFamily
        }]
      }, label)));
    });
    return /*#__PURE__*/React.createElement(View, {
      style: [styles.stepLabelsContainer, direction === 'vertical' ? {
        flexDirection: 'column',
        paddingHorizontal: 4
      } : {
        flexDirection: 'row',
        paddingVertical: 4
      }, {
        alignItems: customStyles.labelAlign
      }]
    }, labelViews);
  };

  const renderStep = position => {
    let stepStyle;
    let indicatorLabelStyle = {};

    switch (getStepStatus(position)) {
      case STEP_STATUS.CURRENT:
        {
          stepStyle = {
            backgroundColor: customStyles.stepIndicatorCurrentColor,
            borderWidth: customStyles.currentStepStrokeWidth,
            borderColor: customStyles.stepStrokeCurrentColor,
            height: sizeAnim,
            width: sizeAnim,
            borderRadius: borderRadiusAnim,
            overflow: 'hidden'
          };
          indicatorLabelStyle = {
            overflow: 'hidden',
            fontSize: customStyles.currentStepIndicatorLabelFontSize,
            color: customStyles.stepIndicatorLabelCurrentColor
          };
          break;
        }

      case STEP_STATUS.FINISHED:
        {
          stepStyle = {
            backgroundColor: customStyles.stepIndicatorFinishedColor,
            borderWidth: customStyles.stepStrokeWidth,
            borderColor: customStyles.stepStrokeFinishedColor,
            height: staleSizeAnim,
            width: staleSizeAnim,
            borderRadius: customStyles.stepIndicatorSize / 2,
            overflow: 'hidden'
          };
          indicatorLabelStyle = {
            overflow: 'hidden',
            fontSize: customStyles.stepIndicatorLabelFontSize,
            color: customStyles.stepIndicatorLabelFinishedColor
          };
          break;
        }

      case STEP_STATUS.UNFINISHED:
        {
          stepStyle = {
            backgroundColor: customStyles.stepIndicatorUnFinishedColor,
            borderWidth: customStyles.stepStrokeWidth,
            borderColor: customStyles.stepStrokeUnFinishedColor,
            height: staleSizeAnim,
            width: staleSizeAnim,
            borderRadius: customStyles.stepIndicatorSize / 2,
            overflow: 'hidden'
          };
          indicatorLabelStyle = {
            overflow: 'hidden',
            fontSize: customStyles.stepIndicatorLabelFontSize,
            color: customStyles.stepIndicatorLabelUnFinishedColor
          };
          break;
        }

      default:
    }

    return /*#__PURE__*/React.createElement(Animated.View, {
      key: 'step-indicator',
      style: [styles.step, stepStyle]
    }, renderCustomStepIndicator ? renderCustomStepIndicator({
      position,
      stepStatus: getStepStatus(position)
    }) : /*#__PURE__*/React.createElement(Text, {
      style: indicatorLabelStyle
    }, "".concat(position + 1)));
  };

  const getStepStatus = stepPosition => {
    if (stepPosition === currentPosition) {
      return STEP_STATUS.CURRENT;
    } else if (stepPosition < currentPosition) {
      return STEP_STATUS.FINISHED;
    } else {
      return STEP_STATUS.UNFINISHED;
    }
  };

  const onCurrentPositionChanged = position => {
    if (position > stepCount - 1) {
      position = stepCount - 1;
    }

    const animateToPosition = progressBarSize / (stepCount - 1) * position;
    sizeAnim.setValue(customStyles.stepIndicatorSize);
    staleSizeAnim.setValue(customStyles.stepIndicatorSize);
    borderRadiusAnim.setValue(customStyles.stepIndicatorSize / 2);
    Animated.sequence([Animated.timing(progressAnim, {
      toValue: isNaN(animateToPosition) ? 0 : animateToPosition,
      duration: 200,
      useNativeDriver: false
    }), Animated.parallel([Animated.timing(sizeAnim, {
      toValue: customStyles.currentStepIndicatorSize,
      duration: 100,
      useNativeDriver: false
    }), Animated.timing(borderRadiusAnim, {
      toValue: customStyles.currentStepIndicatorSize / 2,
      duration: 100,
      useNativeDriver: false
    })])]).start();
  };

  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, direction === 'vertical' ? {
      flexDirection: 'row',
      flex: 1
    } : {
      flexDirection: 'column'
    }]
  }, width !== 0 && /*#__PURE__*/React.createElement(React.Fragment, null, renderProgressBarBackground(), renderProgressBar()), renderStepIndicator(), labels && renderStepLabels());
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(1,0,0,0)'
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(1,0,0,0)'
  },
  stepLabelsContainer: {
    justifyContent: 'space-around'
  },
  step: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
  },
  stepContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500'
  },
  stepLabelItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default React.memo(StepIndicator);
//# sourceMappingURL=index.js.map