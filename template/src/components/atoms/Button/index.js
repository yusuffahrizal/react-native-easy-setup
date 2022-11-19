import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLOR, FONT } from '../../../theme'

const Button = ({ 
  title = '' /* Required|String */, 
  type = 'primary' /* Required|in ['primary', 'secondary'] */,
  isRounded = false /* Nullable|Boolean */,
  isIconBtn = false /* Nullable|Boolean */,
  onPress = () => {} /* Required|Function */
 }) => {

  return (
    <TouchableOpacity style={styles.btnWrapper(type, isRounded)} onPress={test}>
      <Text style={styles.btnText(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  btnWrapper: (type, isRounded) => ({
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: (type === 'primary') ? COLOR.BUTTON.PRIMARY : COLOR.BUTTON.SECONDARY,
    borderRadius: isRounded && 25,
    elevation: 1,
    borderWidth: (type === 'secondary') && 1,
    borderColor: (type === 'secondary') && COLOR.TEXT.PRIMARY
  }),
  btnText: (type) => ({
    fontFamily: FONT.NORMAL,
    color: COLOR.TEXT.PRIMARY
  })
})