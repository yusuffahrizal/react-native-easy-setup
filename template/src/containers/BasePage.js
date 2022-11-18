import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const BasePage = props => {
  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.safeAreaBottom}>
        <View style={styles.viewContent}>
          { props.children }
        </View>
      </SafeAreaView>
    </Fragment>
  )
}

export default BasePage

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
  },
  safeAreaBottom: {
    flex: 1,
  },
  viewContent: {
    flex: 1,
  }
})