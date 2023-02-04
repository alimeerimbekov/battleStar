import React from 'react';

const WhoPlay = () => {
    return (
        <section className='whoPlay'>
            <div className="container">
                <h3 className="whoPlay__title">
                    Как играть
                </h3>
                <div className="whoPlay__queue">
                    <div className="whoPlay__link">
                        <span className="whoPlay__num">1</span>
                        <p className="whoPlay__answer">Регистрируй аккаунт</p>
                    </div>
                    <div className="whoPlay__link">
                        <span className="whoPlay__num">2</span>
                        <p className="whoPlay__answer">Пополняй счёт</p>
                    </div>
                    <div className="whoPlay__link">
                        <span className="whoPlay__num">3</span>
                        <p className="whoPlay__answer">Подключайся к матчу <br/> или создавай свой</p>
                    </div>
                    <div className="whoPlay__link">
                        <span className="whoPlay__num">4</span>
                        <p className="whoPlay__answer">Играй и побеждай</p>
                    </div>
                    <div className="whoPlay__link">
                        <span className="whoPlay__num">5</span>
                        <p className="whoPlay__answer">Легко выводи выигрыш</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoPlay;