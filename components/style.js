import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  buttonContainer: {
    paddingVertical: 15,
  },
  creatureRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  col: {
    padding: 10,
  },
  centeredRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centeredRowJustify: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
  biggerImage: {
    width: 100,
    height: 100,
  },
  itemName: {
    textTransform: 'capitalize',
  },
  purple: {
    color: '#3C1642',
  },
  blue: {
    color: '#086375',
  },
  green: {
    color: '#74A57F',
  },
  lightGreen: {
    color: '#9ECE9A',
  },
  sand: {
    color: '#E4C5AF',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  month: {
    flex: 0.16,
    padding: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: '#fff',
  },
  monthActive: {
    flex: 0.16,
    padding: 10,
    backgroundColor: '#9ECE9A',
    borderWidth: 1,
    borderColor: '#fff',
  },
  common: {
    color: '#c18760',
  },
  uncommon: {
    color: '#21ba43',
  },
  rare: {
    color: '#18b0C1',
  },
  ultrarare: {
    color: '#AC14B4',
  },
  commonDot: {
    backgroundColor: '#c18760',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  uncommonDot: {
    backgroundColor: '#21ba43',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  rareDot: {
    backgroundColor: '#18b0C1',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  ultrarareDot: {
    backgroundColor: '#AC14B4',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  newItem: {
    color: '#ff0000',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});
