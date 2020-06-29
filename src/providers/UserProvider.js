import React, { useState, useEffect } from 'react';
import { db, auth } from '../config/firebase';

const UserContext = React.createContext();

const UserProvider = (props) => {

    const [registry, setRegistry] = useState('');
    const [subscription, setSubscription] = useState('');
    const [notifications, setNotifications] = useState('');
    const [promotions, setPromotions] = useState('');

    useEffect(() => {
        (async () => {
            const snap = await db.collection('users').doc('8UT523BQcNnDz0NjSzma').get();
            const user = snap.data();
            const {
                registry,
                subscription,
                notifications,
                promotions
            } = user
            setRegistry(registry);
            setSubscription(subscription);
            setNotifications(notifications);
            setPromotions(promotions);
        })()

    }, [])

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
            {props.children}
        </UserContext.Provider>
    );

}

export { UserContext, UserProvider };