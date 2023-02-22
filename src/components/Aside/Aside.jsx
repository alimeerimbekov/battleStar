import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";

const Aside = () => {

    const location = useLocation()



    const [active,setActive] = useState(0)

    return (
        <div className='aside'>
            <div className="aside__column">
                <Link to={'/'} className="header__logo aside__link">
                    <svg width="65" height="69" viewBox="0 0 65 69" fill="#FAC704"
                         xmlns="http://www.w3.org/2000/svg">
<path
    d="M20.8105 6.3418L36.0387 19.8046L33.4024 26.1117L27.2358 18.6254L27.4026 19.4218L23.3739 23.1174L20.8105 6.3418Z"
    fill="#FAC704"/>
<path d="M27.6048 20.418L31.3434 25.1536L18.1356 39.6351L7.07007 39.6953L27.6048 20.418Z" fill="#FAC704"/>
<path
    d="M38.2388 17.627L36.6157 19.0953L32.7298 15.5349L49.3577 0L28.7279 57.049L25.0667 33.4188L29.2173 29.1047L30.5547 35.3972L38.2388 17.627Z"
    fill="#FAC704"/>
<path d="M41.6397 24.9639L38.9202 32.5678L44.7059 39.5375L58.0892 39.5535L41.6397 24.9639Z" fill="#FAC704"/>
<path
    d="M0.281738 67.647V62.541H5.41332L6.19332 63.3041V67.647H0.281738ZM4.32132 65.8043H2.05521V66.2751H4.44448V63.9129H2.047V64.4081H4.32132V65.8043ZM6.73631 63.3771V67.647H8.49337V65.8043H10.7595V64.4162H8.49337V63.9129H10.8826V67.647H12.6397V63.3771L11.794 62.541H7.582L6.73631 63.3771ZM13.1829 63.3365L14.0367 62.541H19.1109V63.9129H17.05V67.647H15.293V63.9129H13.1829V63.3365ZM19.6535 63.3365L20.5073 62.541H25.5814V63.9129H23.5205V67.647H21.7636V63.9129H19.6535V63.3365ZM26.1239 62.541H27.8892V66.2751H31.8713V67.647H26.9778L26.1239 66.8515V62.541ZM32.4102 66.8271L33.2395 67.647H38.3382V66.2751H34.1755V65.78H36.4334V64.4H34.1755V63.9129H38.3382V62.541H33.2641L32.4102 63.3365V66.8271ZM38.8808 65.8043V63.369L39.7265 62.541H44.8088V63.9129H40.6379V64.4H42.9204V65.8043H38.8808ZM44.8088 66.8271L43.9796 67.647H38.8808V66.2751H43.0436V64.4H44.8088V66.8271ZM45.3514 63.3365L46.2053 62.541H51.2794V63.9129H49.2186V67.647H47.4615V63.9129H45.3514V63.3365ZM51.822 63.3771V67.647H53.579V65.8043H55.8451V64.4162H53.579V63.9129H55.9683V67.647H57.7253V63.3771L56.8797 62.541H52.6677L51.822 63.3771ZM58.2686 62.541V67.647H60.0257V65.8043H62.3V64.4081H60.0339V63.9129H62.4231V65.715L63.1785 67.647H64.9438L64.1802 65.6176V63.3041L63.4002 62.541H58.2686Z"/>
</svg>
                    </Link>
                <Link to={"/"}>
                    <div onClick={() => setActive(1)} className={`aside__link ${active === 1 ? "active" : ""}`}>
                    <span className="aside__icon">
                        <svg width="30" height="28" viewBox="0 0 30 28" fill="#606060"
                             xmlns="http://www.w3.org/2000/svg">
<path
    d="M27 3.5V24.5H3V3.5H27ZM27 0.5H3C1.335 0.5 0 1.835 0 3.5V24.5C0 26.165 1.335 27.5 3 27.5H27C28.665 27.5 30 26.165 30 24.5V3.5C30 1.835 28.665 0.5 27 0.5ZM24 18.5H6V21.5H24V18.5ZM12 6.5H6V15.5H12V6.5ZM15 9.5H24V6.5H15V9.5ZM24 12.5H15V15.5H24V12.5Z"/>
</svg>
                    </span>
                        <p className="aside__title">ГЛАВНАЯ</p>
                    </div>
                </Link>

                <Link to={"/streams"}>
                    <div onClick={() => setActive(2)} className={`aside__link ${active === 2 ? "active" : ""}`}>
                    <span className="aside__icon">
                        <svg width="30" height="21" viewBox="0 0 30 21" fill="#606060"
                             xmlns="http://www.w3.org/2000/svg">
<path
    d="M8.955 15L4.5 19.5C4.005 19.95 3.345 20.25 2.625 20.25C1.92881 20.25 1.26113 19.9734 0.768845 19.4812C0.276562 18.9889 0 18.3212 0 17.625V17.25L1.5 6.18C1.65121 4.49345 2.42751 2.92436 3.67644 1.7809C4.92537 0.637433 6.55668 0.00221784 8.25 0H21.75C25.29 0 28.185 2.715 28.5 6.18L30 17.25V17.625C30 18.3212 29.7234 18.9889 29.2312 19.4812C28.7389 19.9734 28.0712 20.25 27.375 20.25C26.655 20.25 25.995 19.95 25.5 19.5L21.045 15H8.955ZM7.5 3V6H4.5V7.5H7.5V10.5H9V7.5H12V6H9V3H7.5ZM21.75 3C21.4516 3 21.1655 3.11853 20.9545 3.32951C20.7435 3.54048 20.625 3.82663 20.625 4.125C20.625 4.42337 20.7435 4.70952 20.9545 4.92049C21.1655 5.13147 21.4516 5.25 21.75 5.25C22.0484 5.25 22.3345 5.13147 22.5455 4.92049C22.7565 4.70952 22.875 4.42337 22.875 4.125C22.875 3.82663 22.7565 3.54048 22.5455 3.32951C22.3345 3.11853 22.0484 3 21.75 3ZM19.125 5.625C18.8266 5.625 18.5405 5.74353 18.3295 5.95451C18.1185 6.16548 18 6.45163 18 6.75C18 7.04837 18.1185 7.33452 18.3295 7.54549C18.5405 7.75647 18.8266 7.875 19.125 7.875C19.4234 7.875 19.7095 7.75647 19.9205 7.54549C20.1315 7.33452 20.25 7.04837 20.25 6.75C20.25 6.45163 20.1315 6.16548 19.9205 5.95451C19.7095 5.74353 19.4234 5.625 19.125 5.625ZM24.375 5.625C24.0766 5.625 23.7905 5.74353 23.5795 5.95451C23.3685 6.16548 23.25 6.45163 23.25 6.75C23.25 7.04837 23.3685 7.33452 23.5795 7.54549C23.7905 7.75647 24.0766 7.875 24.375 7.875C24.6734 7.875 24.9595 7.75647 25.1705 7.54549C25.3815 7.33452 25.5 7.04837 25.5 6.75C25.5 6.45163 25.3815 6.16548 25.1705 5.95451C24.9595 5.74353 24.6734 5.625 24.375 5.625ZM21.75 8.25C21.4516 8.25 21.1655 8.36853 20.9545 8.57951C20.7435 8.79048 20.625 9.07663 20.625 9.375C20.625 9.67337 20.7435 9.95952 20.9545 10.1705C21.1655 10.3815 21.4516 10.5 21.75 10.5C22.0484 10.5 22.3345 10.3815 22.5455 10.1705C22.7565 9.95952 22.875 9.67337 22.875 9.375C22.875 9.07663 22.7565 8.79048 22.5455 8.57951C22.3345 8.36853 22.0484 8.25 21.75 8.25Z"/>
</svg>

                    </span>
                        <p className="aside__title">МАТЧИ</p>
                    </div>
                    <div onClick={() => setActive(3)} className={`aside__link ${active === 3 ? "active" : ""}`}>
                    <span className="aside__icon">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="#606060"
                             xmlns="http://www.w3.org/2000/svg">
<path
    d="M24.5 3.5H21.5V2C21.5 1.175 20.825 0.5 20 0.5H8C7.175 0.5 6.5 1.175 6.5 2V3.5H3.5C1.85 3.5 0.5 4.85 0.5 6.5V8C0.5 11.825 3.38 14.945 7.085 15.41C7.55938 16.534 8.3003 17.5257 9.24375 18.2993C10.1872 19.0728 11.3048 19.6051 12.5 19.85V24.5H8C7.175 24.5 6.5 25.175 6.5 26C6.5 26.825 7.175 27.5 8 27.5H20C20.825 27.5 21.5 26.825 21.5 26C21.5 25.175 20.825 24.5 20 24.5H15.5V19.85C16.6952 19.6051 17.8128 19.0728 18.7563 18.2993C19.6997 17.5257 20.4406 16.534 20.915 15.41C24.62 14.945 27.5 11.825 27.5 8V6.5C27.5 4.85 26.15 3.5 24.5 3.5ZM3.5 8V6.5H6.5V12.23C4.76 11.6 3.5 9.95 3.5 8ZM24.5 8C24.5 9.95 23.24 11.6 21.5 12.23V6.5H24.5V8Z"/>
</svg>

                    </span>
                        <p className="aside__title">ТУРНИРЫ</p>
                    </div>
                </Link>

                {
                    location.pathname === ('/cabinet') ? ''
                        :
                        <Link to={'/teams'}>
                            <div onClick={() => setActive(5)} className={`aside__link ${active === 5 ? "active" : ""}`}>
                    <span className="aside__icon">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="#606060"
                             xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd"
      d="M25.0049 19.6953C27.0599 21.0903 28.4999 22.9803 28.4999 25.5003V30.0003H32.9999C33.8249 30.0003 34.4999 29.3253 34.4999 28.5003V25.5003C34.4999 22.2303 29.1449 20.2953 25.0049 19.6953Z"
      fill="#606060"/>
<path
    d="M13.5 18C16.8137 18 19.5 15.3137 19.5 12C19.5 8.68629 16.8137 6 13.5 6C10.1863 6 7.5 8.68629 7.5 12C7.5 15.3137 10.1863 18 13.5 18Z"/>
<path fillRule="evenodd" clipRule="evenodd"
      d="M22.5 18C25.815 18 28.5 15.315 28.5 12C28.5 8.685 25.815 6 22.5 6C21.795 6 21.135 6.15 20.505 6.36C21.7958 7.95633 22.5 9.9471 22.5 12C22.5 14.0529 21.7958 16.0437 20.505 17.64C21.135 17.85 21.795 18 22.5 18ZM13.5 19.5C9.495 19.5 1.5 21.51 1.5 25.5V28.5C1.5 29.325 2.175 30 3 30H24C24.825 30 25.5 29.325 25.5 28.5V25.5C25.5 21.51 17.505 19.5 13.5 19.5Z"/>
</svg>

                    </span>
                                <p className="aside__title">КОМАНДЫ</p>
                            </div>
                            <div onClick={() => setActive(6)} className={`aside__link ${active === 6 ? "active" : ""}`}>
                    <span className="aside__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#606060"
                             xmlns="http://www.w3.org/2000/svg">
<path
    d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V22.5C0 23.325 0.675 24 1.5 24H22.5C23.325 24 24 23.325 24 22.5V21C24 17.01 16.005 15 12 15Z"/>
</svg>
                    </span>
                                <p className="aside__title">ДРУЗЬЯ</p>
                                <span className="aside__link-count">3</span>
                            </div>
                        </Link>
                }


            </div>
        </div>);
};

export default Aside;