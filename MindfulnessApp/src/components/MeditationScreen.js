import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const MeditationScreen = () => {
    const [recording, setRecording] = useState(null);
    const [audioData, setAudioData] = useState(null);

    const startRecording = async () => {
        try {
            const { granted } = await Audio.requestPermissionsAsync();
            if (!granted) return;

            const recording = new Audio.Recording();
            await recording.prepareToRecordAsync(
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );
            await recording.startAsync();
            setRecording(recording);
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    };

    const stopRecording = async () => {
        setRecording(null);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        setAudioData(uri);
        console.log('Recording finished', uri);
    };

    const submitAudioForAnalysis = async () => {
        if (!audioData) return;
        try {
            const response = await fetch('http://localhost:5000/api/analyze-voice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ audioData }),
            });
            const result = await response.json();
            console.log('Hume AI analysis:', result);
        } catch (error) {
            console.error('Error analyzing audio', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meditation Coach</Text>
            <Button
                title={recording ? 'Stop Recording' : 'Start Recording'}
                onPress={recording ? stopRecording : startRecording}
            />
            <Button title="Submit for Analysis" onPress={submitAudioForAnalysis} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});

export default MeditationScreen;
