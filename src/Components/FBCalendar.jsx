import React from "react";
import Event from "./Event";
import { useState } from "react";

function FBCalendar ()  {
  //tip being use matrix structure
  const [calendar,setcalendar]=useState([
    {day:"monday",
      event:[{time:"9:am",event:"",description:""},
      {time:"9am",event:"",description:""}]
  },
  {day:"tuesday",
      event:[{time:"9:am",event:"",description:""},
      {time:"9am",event:"",description:""}]
  },
  ])

    return (
      <div className="Calendar">
        <table>
          <thead>
            <tr>
              <th className="none_row"></th>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
        </table>
        <tbody>
          <tr className="">
            <td className="time">8am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="body-row">
            <td className="time">9 am</td>
            <Event
              description="🐾"
              event="The Penn State Coaches Show"
              location="Lionvision"
            />
            <td></td>
            <td></td>
            <Event
              description="📺"
              event="Unrival Weekly Peview Show"
              location="Loinvision"
            />
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event
              description="📺"
              event="Penn State Sports Football KickOff"
              location="Loinvision/Penn State UP"
            />
          </tr>
          <tr>
            <td className="time">11am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12pm</td>
            <Event 
            description="🎙️" 
            event="Unrivaled Posted Show
            (presented By PPGF)" 
            location="Penn State UP/Lionvision" />
            <td></td>
            <Event
              description="🏈"
              event="Coach Franklin Weekly Press Conference"
              location="Penn State UP/lionsvision"
            />
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3pm</td>
            <Event
              description="🎙️"
              event="KickOff-Beat Indiana(Behind The Mic)"
              location="ABC tv"
            />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event
              description="📻"
              event="TailGate Radio Show"
              location="Weis"
            />
          </tr>
          <tr>
            <td className="time">4pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </div>
    );
};

export default FBCalendar;