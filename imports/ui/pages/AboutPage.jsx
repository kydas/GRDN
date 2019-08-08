import React, {Component} from 'react';

export default class About extends Component {

    render() {
        return (
            <div className="container">
                <main>
                    <h1>What is GRDN?</h1>
                    <p>
                        GRDN is an app for gardeners. Whether you are buying your first plant,
                        or manage 10 gardens, GRDN aims to help you garden better.
                        GRDN offers detailed plant information so that you can better understand
                        your plants to help them grow and thrive. You can use GRDN's search functionality
                        to find your plants and get information about them, or help decide on a new addition
                        to your garden. GRDN also gives you helpful weather information specific to your location
                        so that you know exactly which plants need water, and which might need some help to get through
                        a particularly cold night. Even if you have a few potted plants in your apartment,
                        GRDN can remind you to water them. GRDN: stop worrying, start GRDNing!
                    </p>

                    <p>
                        Built by Joshua Cassidy and Kyle da Silva.
                    </p>

                    <p>
                        Notice a bug or issue with GRDN? Let us know on <a
                        href="https://github.com/dasilvar93/GRDN/issues">GitHub</a>!

                    </p>
                </main>
            </div>
        )
    }
}