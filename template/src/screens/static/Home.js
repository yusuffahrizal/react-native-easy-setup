import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ROUTES from '../../constants/routes'
import { COLOR, FONT } from '../../theme'
import { Navbar } from '../../components'
import { IconRight } from '../../assets'
import { navigate } from '../../utils'

const Home = () => {

  const Card = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.cardWrapper} onPress={onPress}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Image source={IconRight} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView style={styles.page}>
      <Navbar title='Documentations' />
      <Card title="Button" onPress={() => navigate(ROUTES.DOC_BUTTON)} />
      <Card title="Input Text" onPress={() => navigate(ROUTES.DOC_BUTTON)} />
      <Card title="Dropdown" onPress={() => navigate(ROUTES.DOC_BUTTON)} />
      <Card title="Carousel" onPress={() => navigate(ROUTES.DOC_BUTTON)} />
      <Card title="Example Bottom Navigation" onPress={() => navigate(ROUTES.DOC_BUTTON)} />
      <Card title="Example Stack Navigation" onPress={() => navigate(ROUTES.DOC_BUTTON)} />
      <Card title="Example Drawer Navigation" onPress={() => navigate(ROUTES.DOC_BUTTON)} />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  cardWrapper: {
    justifyContent: 'space-between',
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 5,
    elevation: 1,
  },
  cardTitle: {
    fontFamily: FONT.NORMAL,
    fontSize: 14
  }
})