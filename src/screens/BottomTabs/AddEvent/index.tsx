import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  Alert,
  Linking,
} from 'react-native';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import moment, {Moment} from 'moment';
import {useSelector} from 'react-redux';

import {getEvents} from '../../../redux/slices/EventSlice';

import Appbar from '../../../components/Appbar';
import BackgroundText from '../../../components/BackgroundText';
import DescriptionText from '../../../components/DescriptionText';
import BulletText from '../../../components/BulletText';
import AvatarRow from '../../../components/AvatarRow';
import CategoryView from '../../../components/CategoryView';
import CustomButton from '../../../components/CustomButton';
import IconButton from '../../../components/IconButton';
import SocietyProfile from '../../../components/cards/SocietyProfile';
import EventLocation from '../../../components/cards/EventLocation';
import CalendarComponent from '../../../components/CalendarComponent';

import BackgroundEventImage from '../../../assets/images/event.png';
import CalendarIcon from '../../../assets/icons/calendar.png';
import Society from '../../../assets/images/society.png';

import User1 from '../../../assets/images/user1.jpg';
import User2 from '../../../assets/images/user2.jpg';
import User3 from '../../../assets/images/user3.jpg';
import User4 from '../../../assets/images/user4.jpg';

import {colors} from '../../../utils/colors';
import styles from './styles';
import {utcDateToString} from '../../../utils';

export default function () {
  /** Component States */
  const [selectedDate, setSelectedDate] = useState<Moment>(moment.utc());
  const [isCalendarVisible, setIsCalendarVisible] = useState<boolean>(false);

  /** Redux States */
  const eventsJson = useSelector(getEvents)[0];

  /** FUnctions */
  const handleAddEvent = (date: string) => {
    setSelectedDate(moment.utc(date));
    setIsCalendarVisible(false);
    const eventConfig: AddCalendarEvent.CreateOptions = {
      title: eventsJson.title,
      allDay: eventsJson.allDay,
      startDate: utcDateToString(selectedDate),
      endDate: utcDateToString(selectedDate.add(1, 'hours')),

      notes: eventsJson.description,
      location: eventsJson.location,
      navigationBarIOS: {
        translucent: false,
        tintColor: 'orange',
        backgroundColor: colors.white,
        titleColor: colors.secondary,
        barTintColor: colors.secondary,
      },
    };

    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then(eventInfo => {
        // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
        // These are two different identifiers on iOS.
        // On Android, where they are both equal and represent the event id, also strings.
        // when { action: 'CANCELED' } is returned, the dialog was dismissed
        if (eventInfo.action === 'SAVED')
          Alert.alert(eventInfo.action, 'Event Added to Your Calendar');
        else Alert.alert(eventInfo.action, 'Adding Event Canceled');
      })
      .catch((error: string) => {
        // handle error such as when user rejected permissions
        Alert.alert('Error', error);
      });
  };

  const openCalendar = () => {
    setIsCalendarVisible(true);
  };

  const closeCalendar = () => {
    setIsCalendarVisible(false);
  };

  const handleGetDirections = () => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${eventsJson.lat},${eventsJson.lng}&travelmode=driving`;

    // Open the Google Maps app using the Linking component
    Linking.openURL(mapsUrl).catch(error => {
      console.error('Error opening Google Maps:', error);
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={BackgroundEventImage}
          imageStyle={styles.eventBanner}
          style={styles.backgroundStyle}>
          <Appbar onBackPress={() => {}} />
          <BackgroundText
            text={eventsJson.isSold ? 'SOLD OUT!!!' : 'AVAILABLE'}
            background={eventsJson.isSold ? colors.pink : 'green'}
          />
        </ImageBackground>
        <BackgroundText
          text={`FROM ${eventsJson.initialTicketPrice}`}
          background={colors.secondary}
        />
        <View style={styles.contentView}>
          <Text style={styles.title}>{eventsJson.title}</Text>
          <DescriptionText description={eventsJson.description} />
          <View style={styles.bulletsView}>
            <BulletText text={'Participants'} />
            <AvatarRow
              avatarImages={[User1, User2, User3, User4]}
              remainingUsersCount={'12K'}
            />
          </View>
          <View style={styles.bulletsView}>
            <BulletText text={'Categories'} />
            <View style={styles.categoriesView}>
              {eventsJson.categories.map((cat, index) => {
                return <CategoryView key={index} categoryName={cat} />;
              })}
            </View>

            <View style={styles.bookTicketView}>
              <IconButton icon={CalendarIcon} onPress={openCalendar} />
              <CustomButton
                disabled={true}
                onPress={() => {}}
                text={`Tickets go live 23:59, 17/05/23`}
                background={colors.button}
              />
            </View>
          </View>

          <View style={styles.bulletsView}>
            <BulletText text={'Date & Time'} />
            <View style={styles.dateRow}>
              <Text style={styles.dateText}>{`Wed, Mar 29`}</Text>
              <View style={styles.seperator} />
              <Text style={styles.dateText}>{`19:00 - 20:00`}</Text>
            </View>
          </View>

          <View style={styles.bulletsView}>
            <BulletText text={'Location'} />
            <EventLocation
              address={eventsJson.location}
              latitude={eventsJson.lat}
              longitude={eventsJson.lng}
              onDirection={handleGetDirections}
            />
          </View>
          <View style={styles.bulletsView}>
            <BulletText text={'Organized By'} />
            <SocietyProfile
              image={Society}
              organizer={eventsJson.organizedBy}
            />
          </View>
        </View>

        <CalendarComponent
          selectedDate={selectedDate}
          onDateChange={handleAddEvent}
          onClose={closeCalendar}
          isVisible={isCalendarVisible}
        />
      </ScrollView>
    </View>
  );
}
