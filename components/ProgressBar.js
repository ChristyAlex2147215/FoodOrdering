import React, { useState, useCallback,useEffect } from 'react';
import { View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const labels = ["Placed", "Confirmed", "Cooking", "Serving", "Delivered"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: 'lightgreen',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: 'lightgreen',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: 'lightgreen',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: 'black',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: 'black',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
};

const ProgressBar = (props) => {
  const [currentPosition, setCurrentPosition] = useState(2);

  const onPageChange = useCallback((position) => {
    setCurrentPosition(position);
  }, []);
  // setCurrentPosition(props.currentStatus)
 
  useEffect(() => {
    setCurrentPosition(props.currentStatus);
  });

  return (
    <View style={{backgroundColor:"lightgrey",width:"100%",borderBottomRightRadius:15,borderBottomLeftRadius:15}}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
      />
      {/* You can add other components or UI elements here */}
    </View>
  );
};

export default ProgressBar;
