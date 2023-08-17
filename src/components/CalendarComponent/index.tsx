import React from 'react';
import {View, Modal} from 'react-native';
import {Calendar} from 'react-native-calendars';
import styles from './styles';
import MonthComponent from './MonthComponent';
import {colors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {FontFamily} from '../../constants/Strings';
import {Moment} from 'moment';
interface Props {
  selectedDate: Moment;
  onDateChange: (date: string) => void;
  onClose: () => void;
  isVisible: boolean;
}
export default function ({
  selectedDate,
  onDateChange,
  onClose,
  isVisible,
}: Props) {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <IonIcon
            onPress={onClose}
            style={{position: 'absolute', top: '2.5%', right: '5%'}}
            name={'close'}
            color={colors.white}
            size={24}
          />
          <Calendar
            disableAllTouchEventsForInactiveDays
            onDayPress={day => onDateChange(day.dateString)}
            markedDates={{
              [selectedDate.toString()]: {selected: true},
            }}
            initialDate={new Date().toDateString()}
            style={styles.calendarView}
            theme={{
              calendarBackground: colors.black,
              textDisabledColor: colors.lightGray,
              dayTextColor: colors.white,
              monthTextColor: colors.white,
              textSectionTitleColor: colors.white,
              todayTextColor: colors.secondary,
              disabledArrowColor: colors.lightGray,
              selectedDayBackgroundColor: colors.pink,
              selectedDayTextColor: colors.black,

              textMonthFontFamily: FontFamily.SEMIBOLD,
              textDayFontFamily: FontFamily.REGULAR,

              textMonthFontSize: 14,
              textDayFontSize: 14,
            }}
            minDate={new Date().toDateString()}
            renderArrow={direction => <Arrow direction={direction} />}
          />
        </View>
      </View>
    </Modal>
  );
}

export function Arrow(props: any) {
  return props.direction == 'left' ? (
    <Icon name={'long-arrow-alt-left'} size={15} color={colors.white} />
  ) : (
    <Icon name={'long-arrow-alt-right'} size={15} color={colors.white} />
  );
}
