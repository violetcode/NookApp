import React from 'react';

import {Text, View, Modal, Button, Image} from 'react-native';
import {styles} from './style';
import {MONTH_NAMES_SHORT, formatHour, getRarityStyle} from '../utils';

function Month({month, active}) {
  let month_style = active ? styles.monthActive : styles.month;
  return (
    <View style={month_style}>
      <Text style={{textAlign: 'center'}}>{MONTH_NAMES_SHORT[month]}</Text>
    </View>
  );
}

export default function CreatureModal({
  showModal,
  onClose,
  creature,
  hemisphere,
}) {
  const getAvailability = () => {
    let result = '';
    if (creature.startTime == null) {
      return 'All Day';
    }
    const startHour = creature.startTime[0];
    const endHour = creature.endTime[0];
    result = `${formatHour(startHour)}-${formatHour(endHour)}`;
    return result;
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        onClose();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {creature && (
            <>
              <View style={{marginBottom: 15, justifyContent: 'center'}}>
                <Image
                  style={styles.biggerImage}
                  source={{uri: creature.iconImage}}
                />
                <Text
                  style={{
                    ...styles.itemName,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {creature.name}
                </Text>
              </View>
              <View style={styles.row}>
                <View style={styles.col}>
                  <Text>
                    Rarity:{' '}
                    <Text style={getRarityStyle(creature.rarity)}>
                      {creature.rarity}
                    </Text>
                  </Text>
                  <Text>
                    Sell: {creature.sell} ({creature.specialSell})
                  </Text>
                </View>
                <View style={styles.col}>
                  <Text>Active: {getAvailability()}</Text>
                  <Text>Where: {creature.whereHow}</Text>
                  {creature.rainSnowCatchUp && <Text>Weather: Rain/Snow</Text>}
                </View>
              </View>
              <View style={styles.row}>
                {[0, 1, 2, 3, 4, 5].map(i => (
                  <Month
                    month={i}
                    active={creature.activeMonths[hemisphere].includes(i)}
                    key={`month-${i}`}
                  />
                ))}
              </View>
              <View style={styles.row}>
                {[6, 7, 8, 9, 10, 11].map(i => (
                  <Month
                    month={i}
                    active={creature.activeMonths[hemisphere].includes(i)}
                    key={`month-${i}`}
                  />
                ))}
              </View>
            </>
          )}
          <View style={styles.buttonContainer}>
            <Button
              title={'Close'}
              onPress={() => {
                onClose();
              }}
              color={styles.blue.color}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
