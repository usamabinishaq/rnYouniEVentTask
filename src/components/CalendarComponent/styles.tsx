import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  calendarView: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  monthYearText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dayContainer: {
    marginTop: 20,
  },
  dayText: {
    color: 'white',
    fontSize: 16,
  },
  selectedDayText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
