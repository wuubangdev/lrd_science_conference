import React from 'react'
import HeroSection from './home/hero/HeroSection';
import TimeCount from './home/time-count/TimeCount';
import Introduction from './home/introduction/Introduction';
import ConferenceTheme from './home/conference-theme/ConferenceTheme';
import HomeTimeline from './home/home-timeline/HomeTimeline';
import HomeGuideline from './home/guideline/HomeGuideline';

const Client: React.FC = () => {
    return (
        <div className='min-h-screen'>
            <HeroSection />
            <TimeCount />
            <Introduction />
            <ConferenceTheme />
            <HomeTimeline />
            <HomeGuideline />
        </div>
    )
}

export default Client;
