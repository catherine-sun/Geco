import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon, {renderIcon} from 'react-native-vector-icons/FontAwesome6';
import {router} from 'expo-router';
import { LogBox } from 'react-native';

function DisplayButtons({currentPath}) {

    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])

    const buttonProps = {
        'Homepage': {
            color: '#01144d',
            title: 'Home Page',
            icon: 'house',
        },
        'Scanner': {
            color: '#015092',
            title: 'AI Scanner',
            icon: 'camera',
        },
        'Inventory': {
            color: '#029fda',
            title: 'Inventory',
            icon: 'list-check',
        },
        'ManualInput': {
            color: '#02dad3',
            title: 'Add Bags Manually',
            icon: 'add',
        },
        'Links': {
            color: '#02da7b',
            title: 'Informative Links',
            icon: 'link',
        },
        'About': {
            color: '#07ca04',
            title: 'About Us',
            icon: 'dragon',
        }
      }
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>

            <ActionButton buttonColor='#014927'
                renderIcon={() => <Icon name={'bars'}
                style={styles.actionButtonIcon}/>}>
                {Object.keys(buttonProps).filter((path) => path !== currentPath).map((path) =>
                    <ActionButton.Item
                        buttonColor={buttonProps[path].color}
                        title={buttonProps[path].title}
                        onPress={() => router.replace(`./${path}`)}>
                        <Icon name={buttonProps[path].icon} style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                )}
            </ActionButton>
        </View>
        </SafeAreaView>
    );
};

export default DisplayButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // padding: 10,
    position: 'absolute',
    width: 200,
    bottom: '15%',
    right: '1%'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});