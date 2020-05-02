import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-community/picker';

import {Text, View, FlatList, Switch} from 'react-native';

import {styles} from '../style';

import bugsData from '../../data/bugs.json';
import Creature from '../creature';
import CreatureModal from '../creature-modal';
import { isNewItem } from '../../utils';

function sortData(sortBy, hemisphere, available, month) {
  var newData = [].concat(bugsData);
  if (available) {
    newData = newData.filter(item =>
      item.activeMonths[hemisphere].includes(month + 1),
    );
  }

  switch (sortBy) {
    case 'sell':
      newData.sort((a, b) => {
        return b.sell - a.sell;
      });
      break;
    default:
      newData.sort((a, b) => {
        return a.name - b.name;
      });
      break;
  }
  return newData;
}

export default function BugsScreen({navigation}) {
  const month = new Date().getMonth();
  const [sortBy, setSortBy] = useState('name');
  const [hemisphere, setHemisphere] = useState('northern');
  const [isAvailable, setIsAvailable] = useState(true);
  const toggleAvailable = () => setIsAvailable(previousState => !previousState);
  const [listData, setListData] = useState(bugsData);

  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const showCreature = creature => {
    setSelected(creature);
    setShowModal(true);
  };

  useEffect(() => {
    setListData(sortData(sortBy, hemisphere, isAvailable, month));
  }, [sortBy, hemisphere, isAvailable, month]);

  const renderItem = ({item}) => (
    <Creature creature={item} onPress={showCreature} isNew={isNewItem(item, hemisphere, month)} />
  );

  return (
    <>
      <CreatureModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        creature={selected}
        hemisphere={hemisphere}
      />
      <View style={styles.container}>
        <View style={{flexBasis: 75}}>
          <View style={styles.centeredRow}>
            <View>
              <Text>Sort by:</Text>
              <Picker
                selectedValue={sortBy}
                style={{height: 50, width: 150}}
                onValueChange={(itemValue, itemIndex) => setSortBy(itemValue)}>
                <Picker.Item label="Name" value="name" />
                <Picker.Item label="Price" value="sell" />
              </Picker>
            </View>
            <View>
              <Text>Hemisphere:</Text>
              <Picker
                selectedValue={hemisphere}
                style={{height: 50, width: 150}}
                onValueChange={(itemValue, itemIndex) =>
                  setHemisphere(itemValue)
                }>
                <Picker.Item label="Northern" value="northern" />
                <Picker.Item label="Southern" value="southern" />
              </Picker>
            </View>
            <View>
              <Text>Available:</Text>
              <Switch
                trackColor={{false: '#767577', true: styles.green.color}}
                thumbColor={isAvailable ? styles.lightGreen.color : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleAvailable}
                value={isAvailable}
              />
            </View>
          </View>
        </View>
        <FlatList
          data={listData}
          renderItem={renderItem}
          keyExtractor={item => item.uniqueEntryId}
          extraData={sortBy}
          contentContainerStyle={{flexGrow: 1}}
        />
      </View>
    </>
  );
}
