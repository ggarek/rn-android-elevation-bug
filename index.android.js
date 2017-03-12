import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

class RNAndroidElevationBug extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
            animating
            size="large"
            style={styles.indicator}
          />
          <ActivityIndicator
            animating
            size="large"
            style={[styles.indicator, { elevation: 3 }]}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'red',
  },
});

AppRegistry.registerComponent('RNAndroidElevationBug', () => RNAndroidElevationBug);
