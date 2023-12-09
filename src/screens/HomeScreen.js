import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
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
        <View style={styles.addContainer}>
          <View style={styles.addHeader}>

            <Text style={styles.headingText2}>Who you wan beg?</Text>
            <TouchableOpacity>
              <Text style={styles.supportingText2}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>

            <View style={styles.addBegger}>
              <View style={styles.begger}>
                <Image 
                  source={require('../../assets/addBeg.png')}
                  style={styles.picTool}
                />
                <Text>Add</Text>
              </View>
              <View style={styles.begger}>
                <Image 
                  source={require('../../assets/begger1.png')}
                  style={styles.picTool}
                />
                <Text>Altruistic</Text>
              </View>
              <View style={styles.begger}>
                <Image 
                  source={require('../../assets/begger2.png')}
                  style={styles.picTool}
                />
                <Text>Machina</Text>
              </View>
              <View style={styles.begger}>
                <Image 
                  source={require('../../assets/begger3.png')}
                  style={styles.picTool}
                />
                <Text>Aisha</Text>
              </View>
              <View style={styles.begger}>
                <Image 
                  source={require('../../assets/begger4.png')}
                  style={styles.picTool}
                />
                <Text>Edith</Text>
              </View>
              <View style={styles.begger}>
                <Image 
                  source={require('../../assets/begger5.png')}
                  style={styles.picTool}
                />
                <Text>Teeblx</Text>
              </View>
              <View style={styles.begger}>
                <Image 
                  source={require('../../assets/begger1.png')}
                  style={styles.picTool}
                />
                <Text>Ally</Text>
              </View>
              <View style={styles.begger}>
                <Image 
                  source={require('../../assets/begger2.png')}
                  style={styles.picTool}
                />
                <Text>Y.B</Text>
              </View>
              <View style={styles.begger}>
                <Image 
                  source={require('../../assets/begger3.png')}
                  style={styles.picTool}
                />
                <Text>Davido</Text>
              </View>
              <View style={styles.begger}>
                <Image 
                  source={require('../../assets/begger4.png')}
                  style={styles.picTool}
                />
                <Text>Ufot</Text>
              </View>
              <View style={styles.begger}>
                <Image 
                  source={require('../../assets/begger5.png')}
                  style={styles.picTool}
                />
                <Text>Ufot</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.addHeader}>

            <Text style={styles.headingText2}>Latest beggings</Text>
            <TouchableOpacity>
              <Text style={styles.supportingText2}>See all</Text>
            </TouchableOpacity>
          </View>
          <View  style={styles.beggingsContainer}>
            <View  style={styles.latestBeggings}>
              <View style={styles.beggingCard}>
                <Image 
                  source={require('../../assets/txn.png')}
                  style={styles.cardPic}
                />

                <View style={styles.cardText}>
                  <Text style={styles.cardHeading}>Nkechi</Text>
                  <Text style={styles.cardSupporting}>Use this one buy garri fes.</Text>
                </View>
                <Text style={styles.cardAmount}>N2,000 </Text>
              </View>
            </View>
          </View>
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
  },
  title:{
    flex: 4,
    marginHorizontal: 10,
    textAlign: 'justify',
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
    // height: 190,
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

  },
  addContainer:{
    flexDirection: 'column',
    marginHorizontal: 20,

  },
  addHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  headingText2:{
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  supportingText2:{
    color: '#03515E',
    fontSize: 15,
    fontWeight: 'bold',
    alignContent: 'center'
  },
  addBegger:{
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  
  },
  begger: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 80, 
  },
  mainContainer: {
    // backgroundColor: 'red',
    marginBottom: 70,
  },
  beggingsContainer:{
    flexDirection: 'column',
    height: 100,
    // marginVertical: 50,


  },
  latestBeggings:{

  },
  beggingCard:{
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    alignContent: 'center',
    alignItems: 'center',
    // paddingVertical: 3,
    // paddingHorizontal: 10
    justifyContent: 'space-evenly'


  },
  cardPic:{
    // paddingVertical: 20
  },
  cardText:{
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cardHeading:{
    fontWeight: '600',
    fontSize: 20
  },
  cardSupporting:{
    fontSize: 15,
  },
  cardAmount:{
    fontWeight: 'bold',
    fontSize: 22
  }
});