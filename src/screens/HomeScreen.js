import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

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
          <TouchableOpacity style={styles.toolContainer}>
            <Image 
              source={require('../../assets/send2k.png')}
              style={styles.picTool}
            />
            <Text>Send 2k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolContainer}>
            <Image 
              source={require('../../assets/beg2k.png')}
              style={styles.picTool}
            />
            <Text>Beg for 2k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolContainer}>
            <Image 
              source={require('../../assets/borrow2k.png')}
              style={styles.picTool}
            />
            <Text>Borrow 2k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolContainer}>
            <Image 
              source={require('../../assets/find2k.png')}
              style={styles.picTool}
            />
            <Text>Find 2k</Text> 
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
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
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10
  },
  toolContainer:{
    flexDirection:  'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  picTool:{
    // flex: 1,
    // alignItems: 'center'

  }


});