import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import {styles} from './style';
import {getRarityDotStyle} from '../utils';

export default function Creature({creature, onPress, isNew}) {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(creature)}>
      <View style={styles.creatureRow}>
        <View style={styles.centeredRow}>
          <Image style={styles.itemImage} source={{uri: creature.iconImage}} />
          <Text style={styles.itemName}>{creature.name}</Text>
          <View style={getRarityDotStyle(creature.rarity)} />
          {isNew && <Text style={styles.newItem}>!</Text>}
        </View>
        <Text>{creature.sell}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
