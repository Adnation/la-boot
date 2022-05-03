import configs from '../configs'
import React, { useEffect, useState } from 'react'


export default function Home(props) {
    
    const [events, setEvents] = useState([])
    
    useEffect(() => {
        // fetch(`${configs.API_BASE_URL}/events`)
        
        fetch(`https://api.lohanadfw.org/events`)
        .then(res => res.json())
        .then(
            (Revents) => {
                setEvents(Revents);
            }
        )
        .catch(
            (error) => {
            console.log("Failed to load upcoming events");
            console.log(error);
            }
        )
      }, [])

    return <div className="text-justify">
            <div >&nbsp;</div>
            <div><h5 className="text-center">Upcoming events</h5></div>

            <div className="list-group">
                {events.map((event, index) => (
                    <a href="/events" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-">{event.name}</h5>
                        <small>{event.date}</small>
                        </div>
                        <p className="mb-1">{event.summary}</p>
                    </a>
                ))}
            </div>
            
            {/* <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Event Heading 1</h5>
                    <small>3 days to go</small>
                    </div>
                    <p className="mb-1">Sample event description</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Event Heading 2</h5>
                    <small>15 days to go</small>
                    </div>
                    <p className="mb-1">Sample event description</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Event Heading 3</h5>
                    <small>20 days to go</small>
                    </div>
                    <p className="mb-1">Sample event description</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Event Heading 4</h5>
                    <small>20 days to go</small>
                    </div>
                    <p className="mb-1">Sample event description</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Event Heading 5</h5>
                    <small>20 days to go</small>
                    </div>
                    <p className="mb-1">Sample event description</p>
                </a>
                <a href="/events" className="list-group-item list-group-item-action flex-column align-items-start">
                    <small className="yellow-font">View All</small>
                </a>
            </div> */}
        </div> 
    }