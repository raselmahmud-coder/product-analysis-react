import React, { useContext } from 'react';
import { Ringtext } from '../Pricing/Pricing';

const About = () => {
    const value = useContext(Ringtext);
    console.log(value);
    return (
        <div>
            <h3>Hello from About</h3>
        </div>
    );
};

export default About;