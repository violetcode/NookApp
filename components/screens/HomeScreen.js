import React from 'react';
import {Button, View} from 'react-native';

import {styles} from '../style';
import {ScrollView} from 'react-native-gesture-handler';

export default function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Bugs"
          onPress={() => navigation.navigate('Bugs')}
          color={styles.green.color}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Fish"
          onPress={() => navigation.navigate('Fish')}
          color={styles.blue.color}
        />
      </View>
    </ScrollView>
  );
}
