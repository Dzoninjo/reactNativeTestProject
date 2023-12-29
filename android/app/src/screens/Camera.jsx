import React from "react";
import{ View,StyleSheet,} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import CustomButton from '../utils/CustomButton';
import RNFS from 'react-native-fs';

export default function Camera(){

    const [{ cameraRef }, { takePicture }] = useCamera(null);

    const captureHandle = async()=>{
        try{
            const data = await takePicture();
            console.log(data.uri);
            const filePath = data.uri;
            const newFilePath = RNFS.ExternalCachesDirectoryPath + '/MyTest.jpg';
            RFNS.moveFile(filePath, newFilePath)
            .then(() =>{
               console.log("Pomerena slika", filePath, '--u--', newFilePath); 
            })
            .catch(error=>{
                console.log(error);
            })
        }
        catch (error){
            console.log(error)
        }
    }

        return(
            <View style = {styles.body}>
                <RNCamera
                ref={cameraRef}
                type = {RNCamera.Constants.Type.back}
                style = {styles.preview}>
                    <CustomButton
                    title = 'Slikaj'
                    onPressFunction = {() => captureHandle()}></CustomButton>
                </RNCamera>
            </View>
        );
    } 

    const styles = StyleSheet.create({
        body : {
          flex: 1,
         },
      preview : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'flex-end'
      }
      });