import React from 'react';
import {Switch, FormControl, FormLabel, SimpleGrid} from '@chakra-ui/react'

const UserOptions = () => {
    return (
        <div className='userOpt'>
            <div className="userOpt__content">
                <h3 className="userOpt__title" id='margin'>Уведомления</h3>
                <FormControl className="userOpt__column" as={SimpleGrid} columns={{base: 2, lg: 1}}>
                    <div className="userOpt__row">
                        <Switch id='isChecked' isChecked colorScheme='yellow'/>
                        <FormLabel htmlFor='isChecked'/>
                        <p className="userOpt__text">Новости платформы</p>
                    </div>
                    <div className="userOpt__row">
                        <Switch id='isChecked' isChecked colorScheme='yellow'/>
                        <FormLabel htmlFor='isChecked'/>
                        <p className="userOpt__text">Новые турниры</p>

                    </div>
                    <div className="userOpt__row">
                        <Switch colorScheme='yellow'/>
                        <FormLabel/>
                        <p className="userOpt__text">Входящие сообщения</p>

                    </div>
                    <div className="userOpt__row">
                        <Switch colorScheme='yellow'/>
                        <FormLabel/>
                        <p className="userOpt__text">Приглашения в команду</p>

                    </div>
                    <div className="userOpt__row">
                        <Switch id='isChecked' isChecked colorScheme='yellow'/>
                        <FormLabel htmlFor='isChecked'/>
                        <p className="userOpt__text">Запросы в друзья</p>

                    </div>
                </FormControl>

                <div className="userOpt__border">
                    <h3 className="userOpt__title">Приглашения в команду</h3>
                    <div className="userOpt__row">
                        <Switch id='isChecked' isChecked colorScheme='yellow'/>
                        <FormLabel htmlFor='isChecked'/>
                        <p className="userOpt__text">Разрешить только от друзей</p>
                    </div>
                </div>
                <div className="userOpt__border">
                    <h3 className="userOpt__title">Язык интерфейса</h3>
                    <div className="userOpt__rowBot">
                        <p className="userOpt__shadow">Язык</p>
                        <select className="userOpt__select">
                            <option value="">Русский</option>
                            <option value="">English</option>
                        </select>
                    </div>
                </div>
                <div className="userOpt__border">
                    <h3 className="userOpt__title">Регион</h3>
                    <div className="userOpt__rowBot">
                        <p className="userOpt__shadow">Регион</p>
                        <select className="userOpt__select">
                            <option value="">Россия</option>
                            <option value="">Америка</option>
                            <option value="">Кыргызстан</option>
                            <option value="">Казахстан</option>
                        </select>
                    </div>
                </div>
                <div className="userOpt__border">
                    <h3 className="userOpt__title">Привязать аккаунт</h3>
                    <div className="userOpt__colGap">
                        <div className="userOpt__rowBot">
                            <p className="userOpt__shadow">Steam</p>
                            <div className="userOpt__acc">
                                <span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
<path
    d="M13.168 9.83317H4.83464V8.1665H13.168V9.83317ZM9.0013 0.666504C7.90695 0.666504 6.82332 0.882052 5.81227 1.30084C4.80123 1.71963 3.88257 2.33346 3.10875 3.10728C1.54594 4.67008 0.667969 6.7897 0.667969 8.99984C0.667969 11.21 1.54594 13.3296 3.10875 14.8924C3.88257 15.6662 4.80123 16.28 5.81227 16.6988C6.82332 17.1176 7.90695 17.3332 9.0013 17.3332C11.2114 17.3332 13.3311 16.4552 14.8939 14.8924C16.4567 13.3296 17.3346 11.21 17.3346 8.99984C17.3346 7.90549 17.1191 6.82186 16.7003 5.81081C16.2815 4.79976 15.6677 3.8811 14.8939 3.10728C14.12 2.33346 13.2014 1.71963 12.1903 1.30084C11.1793 0.882052 10.0957 0.666504 9.0013 0.666504Z"
    fill="#F13939"/>
</svg>

                                </span>
                                <p className="userOpt__steam">VERITA_Luts</p>
                            </div>
                        </div>
                        <div className="userOpt__rowBot">
                            <p className="userOpt__shadow">Google</p>
                            <div className="userOpt__acc">
                                <span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
<path
    d="M13.168 9.83317H4.83464V8.1665H13.168V9.83317ZM9.0013 0.666504C7.90695 0.666504 6.82332 0.882052 5.81227 1.30084C4.80123 1.71963 3.88257 2.33346 3.10875 3.10728C1.54594 4.67008 0.667969 6.7897 0.667969 8.99984C0.667969 11.21 1.54594 13.3296 3.10875 14.8924C3.88257 15.6662 4.80123 16.28 5.81227 16.6988C6.82332 17.1176 7.90695 17.3332 9.0013 17.3332C11.2114 17.3332 13.3311 16.4552 14.8939 14.8924C16.4567 13.3296 17.3346 11.21 17.3346 8.99984C17.3346 7.90549 17.1191 6.82186 16.7003 5.81081C16.2815 4.79976 15.6677 3.8811 14.8939 3.10728C14.12 2.33346 13.2014 1.71963 12.1903 1.30084C11.1793 0.882052 10.0957 0.666504 9.0013 0.666504Z"
    fill="#F13939"/>
</svg>

                                </span>
                                <p className="userOpt__steam">Example@mail.com</p>
                            </div>
                        </div>
                        <div className="userOpt__rowBot">
                            <p className="userOpt__shadow">Facebook</p>
                            <div className="userOpt__acc">
                                <p className="userOpt__yellow">Привязать</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="userOpt__border">
                    <h3 className="userOpt__title">Изменить пароль</h3>
                    <div className="userOpt__rowBot">
                        <p className="userOpt__yellow">Изменить</p>
                    </div>
                </div>
                <div className="userOpt__border">
                        <div className="userOpt__btns">
                            <span className="userOpt__icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
<path
    d="M2 18L16 18C17.11 18 18 17.11 18 16L18 12L16 12L16 16L2 16L2 2L16 2L16 6L18 6L18 2C18 1.46957 17.7893 0.960859 17.4142 0.585787C17.0391 0.210714 16.5304 -1.28474e-07 16 -1.74846e-07L2 -1.39876e-06C1.46957 -1.44514e-06 0.960861 0.210713 0.585788 0.585785C0.210716 0.960858 1.44514e-06 1.46956 1.39876e-06 2L1.74846e-07 16C1.28474e-07 16.5304 0.210714 17.0391 0.585787 17.4142C0.960859 17.7893 1.46957 18 2 18ZM10.92 5.42L9.5 4L4.5 9L9.5 14L10.92 12.59L8.33 10L18 10L18 8L8.33 8L10.92 5.42Z"
    fill="#F13939"/>
</svg>
                            </span>
                            <button className="userOpt__btn">Выйти из аккаунта</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default UserOptions;