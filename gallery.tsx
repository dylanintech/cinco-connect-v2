// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Stack, Text } from '@tamagui/core'
import { Heading, Button, Avatar, Image, Input, Separator, ListItem, YGroup, ScrollView } from 'tamagui';
import { supabase } from './lib/supabase';
import { decode } from 'base64-arraybuffer'
import * as ImagePicker from 'expo-image-picker';
import { FileBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const Gallery = () => {
    const [image, setImage] = useState<string | null>('');
    const [fileName, setFileName] = useState<string | null | undefined>('');
    const [pics, setPics] = useState<any[] | null>([]);
    //notes list
    const [notes, setNotes] = useState<string[] | null>([]);
    const [message, setMessage] = useState<string | null>('');
    const [name, setName] = useState<string | null>('');
    const CDNurl = 'https://ktmgqhvolpskwpusskpe.supabase.co/storage/v1/object/public/cinco-pics/';

    
    useEffect(() => {
        const fetchImages = async () => {
            const { data, error } = await supabase
            .storage
            .from('cinco-pics')
            .list('folder', {
              limit: 100,
              offset: 0,
              sortBy: { column: 'name', order: 'asc' },
            })
    
            if (error) {
                console.log("fetchImages error", error);
            }
    
            if (data) {
                setPics(data);
            }
        }
        fetchImages();

    }, [])

    //function to get convert image string into filepath to pass to supabase
    const base64FileData = (filePath: string) => {
        const file = filePath;
        const fileData = file.split(',').pop();
        return fileData;
    }
    //pass filepath to supabase


    const uploadPicToDB = async () => {
        if (image !== null) {
            const fileName = image.split('/').pop();
            const { data, error } = await supabase
              .storage
              .from('cinco-pics')
              .upload('pics' + '/' + fileName, decode('base64FileData'), {
                contentType: 'image/png'
              })
            if (error) {
                console.log('uploadPicToDB error', error);
                console.log(image);
                console.log(fileName);
            }
            if (data) {
                console.log('uploadPicToDB data successfully uploaded')
            }

        }
    }
    // rewrite this function to upload the file correctly using the pathname

 



    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
            if (!result.cancelled) {
              const response = await fetch(result.assets[0].uri);
              const blob = await response.blob();
              const fileName = `${Date.now()}_${response.split('/').pop()}`;
              const { data, error } = await supabase
                .storage
                .from('cinco-pics')
                .upload('pics' + '/' + fileName, blob);
              if (error) throw error;
              return data;
            }
          } catch (error) {
            console.log(error);
          }
        // try {

        //     let result = await ImagePicker.launchImageLibraryAsync({
        //       mediaTypes: ImagePicker.MediaTypeOptions.All,
        //       allowsEditing: true,
        //       aspect: [4, 3],
        //       quality: 1,
        //     });
    
        //     console.log(result);
            
        //         const photo = {
        //             uri: result.assets[0].uri,
        //             type: result.assets[0].type,
        //             name: result.assets[0].fileName,
        //         }
        //           const formData = new FormData();
        //           formData.append('file', photo);

        //           const fileExt = result.assets[0].fileName.split('.').pop()
        //           const filePath = `${Math.random()}.${fileExt}`
                
        //           let { error } = await supabase.storage.from('cinco-pics').upload(filePath, formData)
    
        //           if (error) {
        //             throw error
        //           }
        //       setImage(result.assets[0].uri);
        //       //set file path to string of filepath
        //       setFileName(result.assets[0].fileName);
        //       alert('Thank you! Your image was successfully uploaded');
        // } catch (error) {
        //     if (result.cancelled) {
        //         console.log('user canceled');
        //     } else {
        //         throw error;
        //     }
        // }
        
        };

        const submitMessage = async () => {
            const { data, error } = await supabase
            .from('notes')
            .insert([
                { message: message, name: name }
            ])
            if (error) {
                console.log('submitMessage error', error);
            }
            if (data) {
                console.log('submitMessage data', data);
            }
        }

        //useEffect to fetch all notes and set them equal to notes array on page load
        useEffect(() => {
            const fetchNotes = async () => {
                const { data, error } = await supabase
                .from('notes')
                .select()
                if (error) {
                    console.log('fetchNotes error', error);
                }
                if (data) {
                    setNotes(data);
                }
            }
            fetchNotes();
        }, [])

    return (
        <Stack f={10} backgroundColor={'black'} gap={10} padding={5}  >
            <Heading marginTop={30} color={'whitesmoke'}>Share a note about crhs!</Heading>
            <Input 
            onChangeText={(text) => setMessage(text)}
            value={message}
            placeholder="crhs feels like home"
            size={'$4'}
            borderWidth={1}
            borderColor={'white'}
            backgroundColor={'grey'}
            cursorColor={'white'}
            color={'white'}
            />
            <Input 
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder='name'
            size={'$4'}
            borderWidth={1}
            borderColor={'white'}
            backgroundColor={'grey'}
            cursorColor={'white'}
            color={'white'}
            />
            <Button
            height={'$5'}
            onPress={submitMessage}
            >
                submit note
            </Button>
            {/* button that will allow user to upload a photo from their camera roll*/}
            {/* if notes is truthy, conditionally render map of notes to text with the message */}
            <Heading color={'whitesmoke'}>notes 📝</Heading>
            <ScrollView>
                <YGroup width={365} als="center" bordered w={240} size="$4" separator={<Separator />} >
                    {notes && notes.map((item) => {
                        return (
                            <YGroup.Item>
                                 <ListItem hoverTheme title={item.message} subTitle={item.name} />
                               </YGroup.Item>
                        )
                    })}
                </YGroup>
            </ScrollView>
            {/* {notes && notes.map((item) => {
                return (
                        <ScrollView>
                            <YGroup width={370} als="center" bordered w={240} size="$4" separator={<Separator />}>
                               <YGroup.Item>
                                 <ListItem hoverTheme title={item.message} subTitle={item.name} />
                               </YGroup.Item>
                           </YGroup>
                        </ScrollView>
                )
            })} */}

            {/* <Button color={'black'} onPress={() => pickImage()}>Choose a pic.</Button>
            {image && (
               <Image src={image} width={200} height={300} />
            )}
            {image && <Button onPress={() => uploadPicToDB()}>upload to the gallery?</Button>}
            {pics && pics.map((item) => {
                return (
                    <Avatar size={'$14'}>
                        <Avatar.Image src={CDNurl + item} />
                    </Avatar>
                )
            })} */}
        </Stack>
    )
}

export default Gallery;