import React, { Component, useContext, useState } from 'react';

import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    Text,
    Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CategoryCard from '../components/CategoryCard';
import ServiceCard from '../components/ServiceCard';


import { withFirebaseHOC } from "../../../services/GlobalContext";
import { ScrollView } from 'react-native-gesture-handler';

const sports = "https://www.quibrescia.it/photogallery_new/images/2020/03/desenzano-rubano-al-centro-tennis-chiuso-tre-arrestati-549510.660x368.jpg";
const menHaircut = "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
const uomanHaircut = "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1235&q=80";
const health = "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80";
const beautician = "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
const fun = "https://images.unsplash.com/photo-1538511059256-46e76f13f071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
const cretaRossa = "https://images.unsplash.com/photo-1516676324900-a8c0c01caa33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";


function Home(props) {

    return (
        <KeyboardAvoidingView //non funziona credo
            enabled={true}
            style={styles.container}>
            <ScrollView>
                <View style={{ paddingTop: 20 }}>

                    <View style={styles.searchBar}>
                        <MaterialIcons name="search" color='#323232' size={30} />
                        <TextInput style={{ width: Dimensions.get('window').width - 40 }} />
                    </View>

                </View>

                <View style={{ alignItems: 'baseline', marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'normal' }}>{'Categorie'}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'normal' }}>{'Vedi Altro  >'}</Text>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <View>
                        <View style={styles.categoryRow}>
                            <CategoryCard imageUrl={menHaircut} title='Taglio Uomo' page='Fitness 2000' />
                            <CategoryCard imageUrl={uomanHaircut} title='Taglio Donna' page='Fitness 2000' />
                        </View>
                    </View>

                </View>
                <View style={{ paddingTop: 10 }}>
                    <View>
                        <View style={styles.categoryRow}>
                            <CategoryCard imageUrl={sports} title='Centri Sportivi' page='Fitness 2000' />
                            <CategoryCard imageUrl={beautician} title='Cura Personale' page='Fitness 2000' />
                        </View>
                    </View>

                </View>
                <View style={{ paddingTop: 10 }}>
                    <View>
                        <View style={styles.categoryRow}>
                            <CategoryCard imageUrl={health} title='Visite Mediche' page='Fitness 2000' />
                            <CategoryCard imageUrl={fun} title='Svago' page='Fitness 2000' />
                        </View>
                    </View>

                </View>
                <View style={{ alignItems: 'baseline', marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'normal' }}>{'Best Sellers'}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'normal' }}>{'Vedi Altro  >'}</Text>
                </View>

                <View style={{ paddingTop: 20 }}>
                    <View>
                        <View style={styles.categoryRow}>
                            <ServiceCard imageUrl={cretaRossa} title='Centro sportivo creta rossa' page='Fitness 2000' />
                            <ServiceCard imageUrl={cretaRossa} title='Centro sportivo creta rossa' page='Fitness 2000' />
                        </View>
                    </View>

                </View>

                <View style={{}}>

                </View>
                <View style={{}}>

                </View>
            </ScrollView>

        </KeyboardAvoidingView>

    )
}

export default withFirebaseHOC(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchBar: {
        borderColor: '#000',
        backgroundColor: '#fff',
        borderRadius: 30,
        elevation: 6,
        height: 40,
        width: Dimensions.get('window').width - 40,
        paddingTop: 2,
        paddingHorizontal: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginHorizontal: 20,
    }
});


