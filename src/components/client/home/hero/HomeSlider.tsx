import Slider, { CustomArrowProps } from "react-slick";

const banners: string[] = [
    "/slide-bg.png",
    "/hoitruong.jpg",
]
const NextArrow = (props: CustomArrowProps) => {
    return (
        <button
            onClick={props.onClick}
            style={{
                position: 'absolute',
                left: 0,
                top: "50%",
                transform: 'translate(32px,-50%)',
                zIndex: 2,
                width: '5rem',
                height: '5rem',
                borderRadius: '61px',
                background: 'rgba(19, 30, 41, 0.30)',
                display: 'flex',
                flexDirection: 'column-reverse',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            }}
            className="hover:bg-blue-500 hover:opacity-100 opacity-50 duration-300 cursor-pointer"
        >
            <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2060_992)">
                    <path
                        d="M0.231857 9.93218V11.0994L9.63249 20.5L10.705 19.3959L2.69242 11.4306V11.2886L18 11.2886V9.71136L2.69242 9.71136V9.58517L10.705 1.6041L9.63249 0.5L0.231857 9.93218Z"
                        fill="#FCFCFC" />
                </g>
                <defs>
                    <clipPath id="clip0_2060_992">
                        <rect width="28" height="20" fill="white" transform="matrix(-1 0 0 1 28 0.5)" />
                    </clipPath>
                </defs>
            </svg>
        </button>
    )
}
const PrevArrow = (props: CustomArrowProps) => {
    return (
        <button
            onClick={props.onClick}
            style={{
                position: 'absolute',
                right: 0,
                top: "50%",
                transform: 'translate(-32px,-50%)',
                zIndex: 2,
                width: '5rem',
                height: '5rem',
                borderRadius: '61px',
                background: 'rgba(19, 30, 41, 0.30)',
                display: 'flex',
                flexDirection: 'column-reverse',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            }}
            className="hover:bg-blue-500 hover:opacity-100 opacity-50 duration-300 cursor-pointer"
        >
            <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2060_996)">
                    <path
                        d="M27.7681 9.93218V11.0994L18.3675 20.5L17.295 19.3959L25.3076 11.4306V11.2886L10 11.2886V9.71136L25.3076 9.71136V9.58517L17.295 1.6041L18.3675 0.5L27.7681 9.93218Z"
                        fill="#FCFCFC" />
                </g>
                <defs>
                    <clipPath id="clip0_2060_996">
                        <rect width="28" height="20" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                </defs>
            </svg>
        </button>
    )
}

export default function HomeSlider() {
    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <Slider {...settings} className="w-full h-[90vh] overflow-hidden">
            {banners.map((item, index) => (
                <div key={index} className="w-full h-full relative">
                    <img src={item} alt="banner" className="object-cover" />
                </div>
            ))}
        </Slider>
    );
}