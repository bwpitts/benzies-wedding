import React from 'react';
import {
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    View,
    Text,
    Linking
} from 'react-native';

export default class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
  };

  constructor(props){
    super(props);

  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.header}>Date:</Text>
          <Text>August 16, 2019</Text>
          <Text>Ceremony 6:00 pm</Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.header}>Location:</Text>
            <Text>Chesapeake Bay Beach Club</Text>
            <TouchableOpacity
                onPress={()=> Linking.openURL("https://www.baybeachclub.com/reservations")}
            >
                <Image
                    source={require('../assets/images/Chesapeake-Bay-Beach-Club-Wedding.jpg')}
                    style={{width: 300, height: 200, borderWidth: .5, borderRadius: 10}}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Hotels:</Text>
          <Text>The Inn at the Chesapeake Bay Beach Club & Spa</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://www.baybeachclub.com/reservations')}>Check it out here</Text>
            <TouchableOpacity
                     onPress={()=> Linking.openURL("https://www.baybeachclub.com/reservations")}
            >
                <Image
                    source={require('../assets/images/The-Inn-At-CBBC.png')}
                    style={{width: 300, height: 200, borderWidth: .5, borderRadius: 10}}
                />
            </TouchableOpacity>
        </View>
      <View style={styles.section}>
          <Text>The Westin</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://www.reservationcounter.com/hotels/show/600b12e/the-westin-annapolis-annapolis-md/?cid=sem::TPRC::AW::::::the%20westin%20annapolis::e&creative=267122271763&device=c&AdPos=1t2&utm_source=google&utm_medium=cpc&utm_term=the%20westin%20annapolis&utm_campaign=&iv_=__iv_p_1_a_981240470_g_53297083125_w_kwd-302618507886_h_9007893_ii__d_c_v__n_g_c_267122271763_k_the%20westin%20annapolis_m_e_l__t__e__r_1t2_vi__')}>Check it out here</Text>
          <TouchableOpacity
              onPress={()=> Linking.openURL("https://www.reservationcounter.com/hotels/show/600b12e/the-westin-annapolis-annapolis-md/?cid=sem::TPRC::AW::::::the%20westin%20annapolis::e&creative=267122271763&device=c&AdPos=1t2&utm_source=google&utm_medium=cpc&utm_term=the%20westin%20annapolis&utm_campaign=&iv_=__iv_p_1_a_981240470_g_53297083125_w_kwd-302618507886_h_9007893_ii__d_c_v__n_g_c_267122271763_k_the%20westin%20annapolis_m_e_l__t__e__r_1t2_vi__")}
          >
              <Image
                  source={require('../assets/images/The-Westin.jpg')}
                  style={{width: 300, height: 200, borderWidth: .5, borderRadius: 10}}
              />
          </TouchableOpacity>
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
