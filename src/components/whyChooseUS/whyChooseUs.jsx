import React from 'react';
import "./whyChooseUs.css";

function WhyChooseUs() {
    const stats = [
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.488 21.754c.294.157.663.156.957-.001c8.012-4.304 8.581-12.713 8.574-15.104a.988.988 0 0 0-.596-.903l-8.05-3.566a1.005 1.005 0 0 0-.813.001L3.566 5.747a.99.99 0 0 0-.592.892c-.034 2.379.445 10.806 8.514 15.115zM8.674 10.293l2.293 2.293l4.293-4.293l1.414 1.414l-5.707 5.707l-3.707-3.707l1.414-1.414z" fill="#FFD700" />
                </svg>
            ),
            title: "10+ Years",
            description: "of Excellence in PDR"
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFD700" fillRule="evenodd" d="M1 11C.08 11-.352 9.863.336 9.253l9-8a1 1 0 0 1 1.328 0l9 8C20.352 9.863 19.92 11 19 11h-1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7zm6 6v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3v-7a1 1 0 0 1 .512-.873L10 3.337l-6.512 5.79A1 1 0 0 1 4 10v7zm2 0v-4h2v4z" clipRule="evenodd" />
                </svg>
            ),
            title: "Mobile Service",
            description: "Across UAE"
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#FFD700" strokeLinejoin="round">
                        <path d="M12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2C11.612 4.487 11.232 5.822 10 8C8.8 7.445 8.5 7 8 5.75C6 8 4 11 4 14C4 18.4183 7.58172 22 12 22Z" strokeWidth="1.5" />
                        <path d="M10 17L14 13" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M10.009 13H10" strokeWidth="2" strokeLinecap="round" />
                        <path d="M14 17H13.991" strokeWidth="2" strokeLinecap="round" />
                    </g>
                </svg>
            ),
            title: "Best Pricing",
            description: "Affordable & Transparent"
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFD700" d="M11 4a6 6 0 1 1-3.3 11.012V15h-.018A6 6 0 0 1 11 4M5.255 14q.377.54.846 1H1.5a.5.5 0 0 0 0 1h5.892a7 7 0 1 0 0-12H2.5a.5.5 0 0 0 0 1h3.601A6.98 6.98 0 0 0 4 10c0 1.074.242 2.09.674 3H3.5a.5.5 0 0 0 0 1zm2.942-6.096A3.5 3.5 0 0 0 7.5 10c0 .786.26 1.512.697 2.096l1.08-1.08A2 2 0 0 1 9 10c0-.37.101-.718.277-1.016zm.707-.707l1.08 1.08A2 2 0 0 1 11 8c.37 0 .718.101 1.016.277l1.08-1.08A3.5 3.5 0 0 0 11 6.5c-.786 0-1.512.26-2.096.697m4.9.707l-1.08 1.08a2 2 0 0 1-.001 2.032l1.08 1.08c.438-.584.697-1.31.697-2.096s-.26-1.512-.697-2.096m-.708 4.9l-1.08-1.08A2 2 0 0 1 11 12c-.37 0-.718-.101-1.016-.277l-1.08 1.08c.584.438 1.31.697 2.096.697s1.512-.26 2.096-.697M6.5 10a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0m3.5 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0" />
                </svg>
            ),
            title: "Fast & Reliable",
            description: "Same Day Service Available"
        }
    ];

    return (
        <div className="why-choose-us">
            <div className="why-header">
                <h2 className="why-h2">Why Choose Us?</h2>
            </div>
            <div className="why-stats">
                {stats.map((stat, index) => (
                    <div key={index} className="stat">
                        <div className="stat-icon">
                            {stat.icon}
                        </div>
                        <h3 className="stat-h3">{stat.title}</h3>
                        <p className="stat-p">{stat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyChooseUs;