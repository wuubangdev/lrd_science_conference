import React, { useEffect, useState } from 'react';

interface ITimeElementProps {
    time?: string;
    label: string;
}

const TimeElement: React.FC<ITimeElementProps> = ({ time, label }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <div className='rounded-2xl bg-blue-500 md:text-5xl text-2xl text-center md:p-8 p-6 text-white md:min-w-[100px]'>
                {time ? time : '00'}
            </div>
            <div className='md:text-xl text-lg'>
                {label}
            </div>
        </div>
    );
};

const TimeCount: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const target = new Date('2025-06-20').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference <= 0) {
                setTimeLeft({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00',
                });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({
                days: String(days).padStart(2, '0'),
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0'),
            });
        };

        updateCountdown(); // cập nhật ban đầu

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval); // cleanup khi unmount
    }, []);

    return (
        <div className='my-container'>
            <div className='w-full flex flex-col md:flex-row items-center text-4xl py-11 gap-8 justify-between'>
                <div className='md:text-5xl text-4xl font-medium text-center gradient-text py-4'>Hội thảo khoa học quản lý đất đai năm 2025</div>
                <div className='flex flex-col gap-4 items-center'>
                    <h1 className='text-2xl font-medium'>Thời gian còn lại</h1>
                    <div className='flex items-center gap-2 leading-none'>
                        <TimeElement time={timeLeft.days} label='Days' />
                        <TimeElement time={timeLeft.hours} label='Hours' />
                        <TimeElement time={timeLeft.minutes} label='Minutes' />
                        <TimeElement time={timeLeft.seconds} label='Seconds' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeCount;
