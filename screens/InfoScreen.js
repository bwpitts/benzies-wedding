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
          <Text>September 24, 2019</Text>
          <Text>Ceremony starting at 6:00 pm</Text>
          <CountDownComponent/>
        </View>
        <View style={styles.section}>
            <Text style={styles.header}>Location:</Text>
            <Text>Stone Tower Winery</Text>
            <MapView style={{width: 300, height: 200, borderWidth: .5, borderRadius: 10}}
            initialRegion={{
                latitude: 39.0644,
                longitude: -77.6361,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            }}
            onPress={()=> Linking.openURL("https://goo.gl/maps/qpBjXgxriAB2")}
            >
                <MapView.Marker
                    coordinate={{
                        latitude:39.0644,
                        longitude:-77.6361
                    }}/>
            </MapView>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Hotel:</Text>
          <Text>Hampton Inn & Suites</Text>
          <Text>$100 a night</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://hamptoninn3.hilton.com/en/hotels/virginia/hampton-inn-and-suites-leesburg-WASLBHX/index.html')}>Check it out here</Text>
            <MapView style={{width: 300, height: 200, borderWidth: .5, borderRadius: 10}}
                     initialRegion={{
                         latitude: 39.1078603,
                         longitude: -77.5433514,
                         latitudeDelta: 0.05,
                         longitudeDelta: 0.05
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
