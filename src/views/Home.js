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
                        { day: 2, month: 12, year: 2020, link: '/day2', title: 'Day 2' }
                    ]}
                />
            </div>
        </section>
    )
};

export default Home;