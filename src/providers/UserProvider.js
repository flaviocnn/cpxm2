import React, { useState, useEffect } from 'react';
import { db, auth } from '../config/firebase';

const UserContext = React.createContext();

const UserProvider = () => {

    const [registry, setRegistry] = useState('');
    const [subscription, setSubscription] = useState('');
    const [notifications, setNotifications] = useState('');
    const [promotions, setPromotions] = useState('');


    getUser(async () => {
        const snap = await db.collection('users').doc(auth.currentUser.uid).get();
        const user = snap.data();
        return user;
    })

    useEffect(() => {
        const {
            registry,
            subscription,
            notifications,
            promotions
        } = getUser();

        setRegistry(registry);
        setSubscription(subscription);
        setNotifications(notifications);
        setPromotions(promotions);
    })

    return (
        <UserContext.Provider
            value={{
                registry,
                setRegistry,
                subscription,
                setSubscription,
                notifications,
                setNotifications,
                promotions,
                setPromotions
            }}
        >

        </UserContext.Provider>
    );

}

export { UserContext, UserProvider };