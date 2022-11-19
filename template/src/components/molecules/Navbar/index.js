import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconLeftRounded, IconReact } from '../../../assets'
import { COLOR, FONT } from '../../../theme'
import { goBack } from '../../../utils'
import { Gap } from '../../atoms'

const Navbar = ({ 
  title = '' /* Required|String */, 
  withBack = false /* Nullable|Boolean */
}) => {
  return (
    <View style={styles.titleWrapper}>
      {
        withBack &&
        <TouchableOpacity style={styles.backIcon} onPress={() => goBack()}>
          <IconLeftRounded />
        </TouchableOpacity>
      }
      <IconReact width={24} height={24} />
      <Gap width={10} />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  titleWrapper: {
    color: COLOR.TEXT.PRIMARY,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 20,
    flex: 1,
  },
  backIcon: {
    position: 'absolute',
    left: 20
  },
  title: {
    fontFamily: FONT[700],
    textAlign: 'center',
    fontSize: 16,
  },
})