import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLOR, FONT } from '../../../theme'

const Button = ({ 
  title = '' /* Required: if !(icon button)|String */, 
  type = 'primary' /* Required|in ['primary', 'secondary'] */,
  isRounded = false /* Nullable|Boolean */,
  leftIcon = null /* Nullable|Type File ['png', 'jpg', 'jpeg'] */,
  rightIcon = null /* Nullable|Type File ['png', 'jpg', 'jpeg'] */,
  icon = null /* Nullable|Type File ['png', 'jpg', 'jpeg'] */,
  size = 20 /* Required: if (icon button) */,
  onPress = () => {} /* Required|Function */
 }) => {

  if (icon === null) {
    return (
      <TouchableOpacity style={styles.btnWrapper(type, isRounded)} onPress={onPress}>
        {(leftIcon !== null) && <Image source={leftIcon} style={styles.leftIcon} />}
        <Text style={styles.btnText(type)}>{title}</Text>
        {(rightIcon !== null) && <Image source={rightIcon} style={styles.rightIcon} />}
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity style={styles.btnWrapperIcon(type, size)} onPress={onPress}>
        <Image source={icon} style={styles.btnIcon(size)} />
      </TouchableOpacity>
    )
  }
}

export default Button

const styles = StyleSheet.create({
  btnWrapper: (type, isRounded) => ({
    backgroundColor: (type === 'primary') ? COLOR.BUTTON.PRIMARY : COLOR.BUTTON.SECONDARY,
    borderColor: (type === 'secondary') && COLOR.BUTTON.PRIMARY,
    borderWidth: (type === 'secondary') && 1,
    borderRadius: isRounded && 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
  }),
  btnText: (type) => ({
    color: (type === 'primary') ? COLOR.WHITE : COLOR.BUTTON.PRIMARY,
    fontFamily: FONT[500],
    fontSize: 14,
  }),
  leftIcon: {
    position: 'absolute',
    height: 20,
    width: 20,
    left: 20,
  },
  rightIcon: {
    position: 'absolute',
    height: 20,
    right: 20,
    width: 20,
  },
  btnWrapperIcon: (type, size) => ({
    backgroundColor: (type === 'primary') ? COLOR.BUTTON.PRIMARY : COLOR.BUTTON.SECONDARY,
    borderColor: (type === 'secondary') && COLOR.BUTTON.PRIMARY,
    borderWidth: (type === 'secondary') && 1,
    backgroundColor: COLOR.BUTTON.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    height: size,
    width: size,
  }),
  btnIcon: (size) => ({
    height: size - 10,
    width: size - 10,
  })
})