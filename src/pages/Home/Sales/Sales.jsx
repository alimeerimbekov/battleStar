import React from 'react';

const Sales = () => {
    return (
        <section className='sales'>
            <div className="container">
                <div className="sales__block">
                    <div className="sales__info">
                        <p className="sales__text">Акции и бонусы</p>
                        <h3 className="sales__title">
                            Пополни баланс  сегодня и получи
                            +200 BS в качестве бонуса
                        </h3>
                        <button className="adver__btn sales__btn">
                            Перейти в кошелёк
                        </button>
                    </div>
                    <span className='sales__icon'>
                        <svg width="330" height="373" viewBox="0 0 330 373" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_259_26083)">
<path d="M88.8726 41.4658L187.368 129.489L170.317 170.726L130.432 121.779L131.51 126.986L105.452 151.149L88.8726 41.4658Z" fill="#2604FA" fillOpacity="0.2"/>
<path d="M132.818 133.496L156.999 164.459L71.5713 259.143L0 259.535L132.818 133.496Z" fill="#2604FA" fillOpacity="0.2"/>
<path d="M201.599 115.249L191.1 124.85L165.966 101.57L273.515 0L140.082 373L116.401 218.499L143.248 190.294L151.898 231.435L201.599 115.249Z" fill="#2604FA" fillOpacity="0.2"/>
<path d="M223.597 163.216L206.006 212.934L243.428 258.502L329.99 258.608L223.597 163.216Z" fill="#2604FA" fillOpacity="0.2"/>
</g>
<defs>
<clipPath id="clip0_259_26083">
<rect width="330" height="373" fill="white"/>
</clipPath>
</defs>
</svg>

                    </span>
                </div>
            </div>
        </section>
    );
};

export default Sales;