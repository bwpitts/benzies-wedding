import React from 'react';
import { ScrollView, StyleSheet, View, Text, Linking} from 'react-native';
import CountDownComponent from "../components/Countdown"
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';

export default class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
  };

  constructor(props){
    super(props);
    this.state= {
      currentUser: null
    };
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.header}>Date:</Text>
          <Text>August 16, 2019</Text>
          <Text>Ceremony starting at 6:30 pm</Text>
          <CountDownComponent/>
        </View>
        <View style={styles.section}>
            <Text style={styles.header}>Location:</Text>
            <Text>Chesapeake Bay Beach Club</Text>
            <MapView style={{width: 300, height: 200, borderWidth: .5, borderRadius: 10}}
            initialRegion={{
                latitude: 38.9781,
                longitude: -76.3337,
                latitudeDelta: .03,
                longitudeDelta: .03
            }}
            onPress={()=> Linking.openURL("https://goo.gl/maps/Y34xRmzRyMG2")}
            >
                <MapView.Marker
                    coordinate={{
                        latitude:38.9781,
                        longitude:-76.3337
                    }}/>
            </MapView>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Hotels:</Text>
          <Text>The Inn at the Chesapeake Bay Beach Club & Spa</Text>
          <Text>$199 a night</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://www.baybeachclub.com/reservations')}>Check it out here</Text>
            <MapView style={{width: 300, height: 200, borderWidth: .5, borderRadius: 10}}
                     initialRegion={{
                         latitude: 38.9792,
                         longitude: -76.3279,
                         latitudeDelta: 0.03,
                         longitudeDelta: 0.03
                     }}
                     onPress={()=> Linking.openURL("https://goo.gl/maps/Gt7fpvLVJEG2")}
            >
                <MapView.Marker
                    coordinate={{
                        latitude:38.9792,
                        longitude:-76.3279
                    }}/>
            </MapView>
        </View>
      <View style={styles.section}>
          <Text>Hampton Inn & Suites</Text>
          <Text>$100 a night</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://hamptoninn3.hilton.com/en/hotels/virginia/hampton-inn-and-suites-leesburg-WASLBHX/index.html')}>Check it out here</Text>
          <MapView style={{width: 300, height: 200, borderWidth: .5, borderRadius: 10}}
                   initialRegion={{
                       latitude: 39.1078603,
                       longitude: -77.5433514,
                       latitudeDelta: 0.03,
                       longitudeDelta: 0.03
                   }}
                   onPress={()=> Linking.openURL("https://goo.gl/maps/mixbU2YdFM92")}
          >
              <MapView.Marker
                  coordinate={{
                      latitude:39.1078603,
                      longitude:-77.5433514
                  }}/>
          </MapView>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#eee',
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black"
  },
  link: {
    color: "#0000EE"
  },
  section: {
    flexDirection: "column",
    alignItems: "center",
    margin: 10
  },
});
