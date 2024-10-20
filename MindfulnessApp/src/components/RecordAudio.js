import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const RecordAudio = () => {
  const [isRecording, setIsRecording] = useState(false);
  const audioRecorderPlayer = new AudioRecorderPlayer();

  const startRecording = async () => {
    setIsRecording(true);
    await audioRecorderPlayer.startRecorder();
  };

  const stopRecording = async () => {
    setIsRecording(false);
    const result = await audioRecorderPlayer.stopRecorder();
    console.log(result);
    // Send recorded audio to backend here
  };

  return (
    <View>
      <Text>Record your voice for stress analysis</Text>
      <Button
        title={isRecording ? "Stop Recording" : "Start Recording"}
        onPress={isRecording ? stopRecording : startRecording}
      />
    </View>
  );
};

export default RecordAudio;
