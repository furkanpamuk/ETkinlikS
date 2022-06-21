import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";

const EventsContext = createContext();

const EventsProvider = ({ children }) => {
    const [events, setEvents] = useState({})
    const [selectEvent, setSelectEvent] = useState({})

    const getEvents = async () => {
        const data = await axios("https://etstur-804bc-default-rtdb.firebaseio.com/.json")
        console.log(data.data);
        setEvents(data.data)
    }

    useEffect(() => {
        getEvents()
    }, [])

    const data = {
        events,
        setEvents,

        selectEvent,
        setSelectEvent
    }

    return (
        <EventsContext.Provider value={data}>
            {children}
        </EventsContext.Provider>
    )
}

function useEventsData() {
    return useContext(EventsContext);
}

export { EventsProvider, EventsContext, useEventsData }