import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons

const IsVeg = ({type }) => {
  const iconSize = 20;
  const iconColor = type ? 'green' : 'red';
  const iconName =type ? 'check-circle' : 'times-circle'; // Using FontAwesome icons for this example

  return (
      <Icon name={iconName} size={iconSize} color={iconColor} />
  );
};

export default IsVeg;
