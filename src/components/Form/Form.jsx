import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";



const Form = () => {

    const {active, setActive, setClose} = useContext(CustomContext)

    return (
        <div className='form'>
            <span className='form__close' onClick={() => setClose(false)}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
      fill="#F8F8F8"/>
</svg>

                </span>
            <span className="form__logo">
                    <svg width="143" height="153" viewBox="0 0 143 153" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_223_2522)">
<path d="M45.7852 14.0625L79.287 43.9148L73.4872 57.9L59.9208 41.3L60.2876 43.066L51.4246 51.2605L45.7852 14.0625Z"
      fill="#FAC704"/>
<path d="M60.7311 45.2744L68.9559 55.7753L39.8988 87.8863L15.5547 88.0198L60.7311 45.2744Z" fill="#FAC704"/>
<path
    d="M84.1273 39.0858L80.5563 42.3418L72.0074 34.4468L108.589 0L63.2031 126.5L55.1484 74.1025L64.2799 64.5365L67.2222 78.4895L84.1273 39.0858Z"
    fill="#FAC704"/>
<path d="M91.6079 55.3535L85.625 72.2145L98.3535 87.669L127.797 87.7045L91.6079 55.3535Z" fill="#FAC704"/>
<path
    d="M0.621094 150V138.678H11.9106L13.6266 140.37V150H0.621094ZM9.50818 145.914H4.52274V146.958H9.77913V141.72H4.50468V142.818H9.50818V145.914ZM14.8212 140.532V150H18.6867V145.914H23.6721V142.836H18.6867V141.72H23.9431V150H27.8086V140.532L25.9481 138.678H16.6817L14.8212 140.532ZM29.0035 140.442L30.8821 138.678H42.0451V141.72H37.5113V150H33.6458V141.72H29.0035V140.442ZM43.2389 140.442L45.1174 138.678H56.2803V141.72H51.7464V150H47.8811V141.72H43.2389V140.442ZM57.4739 138.678H61.3575V146.958H70.1181V150H59.3525L57.4739 148.236V138.678ZM71.3038 148.182L73.1282 150H84.3454V146.958H75.1874V145.86H80.1547V142.8H75.1874V141.72H84.3454V138.678H73.1824L71.3038 140.442V148.182ZM85.5391 145.914V140.514L87.3996 138.678H98.5807V141.72H89.4046V142.8H94.4261V145.914H85.5391ZM98.5807 148.182L96.7563 150H85.5391V146.958H94.6971V142.8H98.5807V148.182ZM99.7743 140.442L101.653 138.678H112.816V141.72H108.282V150H104.417V141.72H99.7743V140.442ZM114.01 140.532V150H117.875V145.914H122.861V142.836H117.875V141.72H123.132V150H126.997V140.532L125.137 138.678H115.87L114.01 140.532ZM128.192 138.678V150H132.058V145.914H137.061V142.818H132.076V141.72H137.332V145.716L138.994 150H142.878L141.198 145.5V140.37L139.482 138.678H128.192Z"
    fill="#FAC704"/>
</g>
<defs>
<filter id="filter0_i_223_2522" x="0" y="0" width="143" height="157" filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_223_2522"/>
</filter>
</defs>
</svg>

                </span>
            <div className="form__top">
                <div className={`form__border ${active ? 'active' : ''}`} onClick={() => setActive(true)}>
                    <h2 className={`form__title ${active ? 'active' : ''}`}>ВОЙТИ</h2>
                </div>
                <div className={`form__border ${!active ? 'active' : ''}`} onClick={() => setActive(false)}>
                    <h2 className={`form__title ${!active ? 'active' : ''}`}>СОЗДАТЬ АККАУНТ</h2>
                </div>
            </div>
            {
                active && <FormLogin/>
            }
            {
                !active && <FormRegister/>
            }

        </div>


    );
};

export default Form;