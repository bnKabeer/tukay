import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView>
        <View style={styles.headerContainer}>
          <View style={styles.profilePic}>
            <Image 
              source={require('../../assets/pic.png')}
              style={styles.pic}
            />
          </View>
          <View style={styles.title}>
            <Text style={styles.headingText}>Hi Oracle,</Text>
            <Text style={styles.SupportingText}>Beg for urgent tukay today!</Text>
          </View>
          <View style={styles.notification}>
            <Image 
              source={require('../../assets/notification.png')}
              style={styles.pic}
            />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Image 
            source={require('../../assets/card.png')}
            style={styles.pic}
          />
        </View>
        <View style={styles.tools}>

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    // backgroundColor: 'lightblue',
    paddingTop: 42,
    paddingLeft: 4,
    paddingRight: 24,
    alignItems: 'center',
  },
  profilePic:{
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 20,
  },
  title:{
    flex: 4,
    paddingHorizontal: 25,

  },
  headingText:{
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  SupportingText:{
    fontSize: 14,
  },
  notification:{
    flex: 1,
    alignItems: 'center',
  },
  cardContainer:{
    alignItems: 'center',
    alignContent: 'center',
  },
  tools:{
    backgroundColor:  'red,'
  }


});