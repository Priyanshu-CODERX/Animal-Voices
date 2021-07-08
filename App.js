import * as React from 'react'
import { StyleSheet, Text, View, ScrollView, Button, SafeAreaView } from 'react-native'
import CustomCard from './components/AudioCard'
import { StatusBar } from 'expo-status-bar';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="light" /> */}
      <Text style={styles.text}>Animal Sounds</Text>
      <ScrollView style={styles.scroll}>
        <CustomCard bg="#212121" text="Monkey" soundUrl="http://www.externalharddrive.com/waves/animal/monkey.wav" />
        <CustomCard bg="#212121" text="Lion" soundUrl="http://cd.textfiles.com/10000gp2/500SNDS/9_52.WAV" />
        <CustomCard bg="#212121" text="Bear" soundUrl="http://egyptiancastle.com/community/kids/learn/sounds/Bear.wav" />
        <CustomCard bg="#212121" text="Squirrel" soundUrl="http://www.naturesongs.com/var%20squirrel1.wav" />
        <CustomCard bg="#212121" text="Cow" soundUrl="http://archive.patteroast.net/aud/frishycow.wav" />
        <CustomCard bg="#212121" text="Crow" soundUrl="http://scifimoviezone.com/castle/pirates/trail/crow.wav" />
        <CustomCard bg="#212121" text="Humming Bird" soundUrl="http://northwestbirding.com/BirdSongs/Recordings/annas_hummingbird_coopers_hawk_fledgling_07-31-13.mp3" />
        <CustomCard bg="#212121" text="Sandgrouse" soundUrl="http://www.vogelstimmen.info/Vogelstimmen_GRATIS/Spiessflughuhn_Pterocles_alchata_R_AMPLE-E0406.mp3" />
        <CustomCard bg="#212121" text="Avocet" soundUrl="http://www.birding.dk/galleri/stemmermp3/Recurvirostra%20avosetta%201.mp3" />
        <CustomCard bg="#212121" text="Tiger" soundUrl="http://cd.textfiles.com/999wavs/WAVS_T/TIGER.WAV" />
        <CustomCard bg="#212121" text="Cheetah" soundUrl="https://www.koedoeberg.co.za/wp-content/uploads/2013/01/Cheetah-SoundBible.com-17422469.mp3" />
        <CustomCard bg="#212121" text="Whale" soundUrl="http://www.dolphinear.com/wpsounds/de600-samples-humpback.wav" />
        <CustomCard bg="#212121" text="Dolphin" soundUrl="https://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Dolphin%20Sounds-6609-Free-Loops.com.mp3" />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },

  scroll: {
    marginTop: 10,
    marginBottom: 30,
  },

  text: {
    marginTop: 40,
    fontSize: 40,
    fontWeight: "bold"
  }

})
