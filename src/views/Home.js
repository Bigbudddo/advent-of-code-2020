import React from 'react';
import Calendar from '../components/Calendar';

const Home = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Advent of Code 2020</h1>
                <h2 className="subtitle">Solutions to the AOC Challenge 2020 in React!</h2>
                <Calendar
                    month={12}
                    year={2020}
                    events={[
                        { day: 1, month: 12, year: 2020, link: '/day1', title: 'Day 1' },
                        { day: 2, month: 12, year: 2020, link: '/day2', title: 'Day 2' },
                        { day: 3, month: 12, year: 2020, link: '/day3', title: 'Day 3' },
                        { day: 4, month: 12, year: 2020, link: '/day4', title: 'Day 4' }
                    ]}
                />
            </div>
        </section>
    )
};

export default Home;