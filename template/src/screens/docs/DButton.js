import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Navbar } from '../../components'
import { IconRight, IconSearch } from '../../assets'
import { COLOR, FONT } from '../../theme'

const DButton = () => {
  return (
    <ScrollView style={styles.page}>
      <Navbar title="Button" withBack />
      
      {/* Standart Button */}
      <View style={styles.cardWrapper}>
        <Text style={styles.cardLabel}>Standart Button</Text>
        <Gap height={15} />
        <Text style={styles.cardContent}>Primary</Text>
        <Gap height={5} />
        <Button title='Click Here!' />
        <Gap height={10} />
        <Text style={styles.cardContent}>Secondary</Text>
        <Gap height={5} />
        <Button title='Click Here!' type='secondary' />
        <Gap height={10} />
      </View>
      {/* End of Standart Button */}

      {/* Rounded Button */}
      <View style={styles.cardWrapper}>
        <Text style={styles.cardLabel}>Rounded Button</Text>
        <Gap height={15} />
        <Text style={styles.cardContent}>Primary</Text>
        <Gap height={5} />
        <Button title='Click Here!' isRounded />
        <Gap height={10} />
        <Text style={styles.cardContent}>Secondary</Text>
        <Gap height={5} />
        <Button title='Click Here!' type='secondary' isRounded />
        <Gap height={10} />
      </View>
      {/* End of Rounded Button */}

      {/* Button With Icon */}
      <View style={styles.cardWrapper}>
        <Text style={styles.cardLabel}>Button With Icon</Text>
        <Gap height={15} />
        <Text style={styles.cardContent}>Primary</Text>
        <Gap height={5} />
        <Button title='Click Here!' leftIcon={IconSearch} rightIcon={IconRight} />
        <Gap height={10} />
        <Text style={styles.cardContent}>Secondary</Text>
        <Gap height={5} />
        <Button title='Click Here!' type='secondary' leftIcon={IconSearch} rightIcon={IconRight} />
        <Gap height={10} />
      </View>
      {/* End of Button With Icon */}

      {/* Icon Button */}
      <View style={styles.cardWrapper}>
        <Text style={styles.cardLabel}>Icon Button</Text>
        <Gap height={15} />
        <Text style={styles.cardContent}>Primary</Text>
        <Gap height={5} />
        <Button title='Click Here!' icon={IconSearch} size={32} />
        <Gap height={10} />
        <Text style={styles.cardContent}>Secondary</Text>
        <Gap height={5} />
        <Button title='Click Here!' type='secondary' icon={IconSearch} size={32} />
        <Gap height={10} />
      </View>
      {/* End of Icon Button */}

    </ScrollView>
  )
}

export default DButton

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cardWrapper: {
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 5,
    borderRadius: 5,
    elevation: 1,
  },
  cardLabel: {
    color: COLOR.TEXT.PRIMARY,
    fontFamily: FONT[700],
    fontSize: 12,
  },
  cardContent: {
    color: COLOR.TEXT.PRIMARY,
    fontFamily: FONT.NORMAL,
    fontSize: 12,
  }
})