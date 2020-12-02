import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; 
require('datejs');

const Calendar = ({ month, year, events }) => {
    const [calendar, setCalendar] = useState(null);

    const getCalendar = () => {
        var calendarArray = [];
        var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
        
        // calculate the number of days this month and the day at which the first falls on
        var daysInThisMonth = new Date(year, month, 0).getDate();
        var dayAtStartOfMonth = Date.parse(`${month} ${year}`).toString('dddd');
        var indexOfDayAtStartOfMonth = daysOfWeek.indexOf(dayAtStartOfMonth);

        // work backwards to fill out the previous days in the top row
        if (indexOfDayAtStartOfMonth > 0) {
            var previousYear = year;
            var previousMonth = month - 1;
            if (previousMonth <= 0) {
                previousMonth = 12;
                previousYear = year - 1;   
            }

            var daysInPreviousMonth = new Date(previousYear, previousMonth, 0).getDate();
            for (var i = indexOfDayAtStartOfMonth - 1; i > 0; i--) {
                calendarArray.push({
                    day: daysInPreviousMonth,
                    month: previousMonth,
                    year: previousYear,
                    events: getCalendarEvents(daysInPreviousMonth, previousMonth, previousYear)
                });

                daysInPreviousMonth--;
            }
        }

        // populate the current selected months records
        for (var i = 1; i <= daysInThisMonth; i++) {
            calendarArray.push({
                day: i,
                month: month,
                year: year,
                events: getCalendarEvents(i, month, year)
            });
        }

        // check if we need to pad out the end of the calendar with the following months data
        if (calendarArray.length < 35) {
            var nextYear = year;
            var nextMonth = month + 1;
            if (nextMonth > 12) {
                nextMonth = 1;
                nextYear = year + 1;
            }

            var dayInNextMonth = 1;
            for (var i = calendarArray.length; i < 35; i++) {
                calendarArray.push({
                    day: dayInNextMonth,
                    month: nextMonth,
                    year: nextYear,
                    events: getCalendarEvents(dayInNextMonth, nextMonth, nextYear)
                });

                dayInNextMonth++;
            }
        }

        // return a 2D array that maps each row of objects in the calendar
        return [0, 1, 2, 3, 4].map(i => {
            return calendarArray.slice(i * 7, (i * 7) + 7);
        });
    };

    const getCalendarEvents = (day, month, year) => {
        var eventsOnDate = events.filter(el => el.day === day && el.month === month && el.year === year);
        if (eventsOnDate.length === 0) {
            return [];
        }
        else{
            return eventsOnDate;
        }
    };

    useEffect(() => {
        setCalendar(getCalendar());
    }, [ month, year, events ]);

    return (
        <div className="calendar">
            <div className="calendar-header">
                <div className="calendar-row">
                    <div className="calendar-item">Sun</div>
                    <div className="calendar-item">Mon</div>
                    <div className="calendar-item">Tue</div>
                    <div className="calendar-item">Wed</div>
                    <div className="calendar-item">Thu</div>
                    <div className="calendar-item">Fri</div>
                    <div className="calendar-item">Sat</div>
                </div>
            </div>
            <div className="calendar-body">
                {getCalendar().map((array, index) => (
                    <div key={index} className="calendar-row">
                        {array.map(el => (
                            <div key={`${index}-${el.day}`} className={(el.month !== month ? "calendar-item is-not-active-month" : "calendar-item")}>
                                <div className="calendar-item-date">
                                    {el.day}
                                </div>
                                {el.events.map((ev, eIndex) => (
                                    <Link key={`${index}-${eIndex}`} to={ev.link} className="calendar-item-link has-text-success">
                                        <FontAwesomeIcon icon={faCheck} size="4x" />
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;