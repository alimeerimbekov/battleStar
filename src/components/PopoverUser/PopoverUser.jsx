import React, {useContext} from 'react';
import {ChevronDownIcon} from '@chakra-ui/icons';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Portal,
    Button
} from '@chakra-ui/react'
import {CustomContext} from "../../utils/Context";
import {NavLink, useNavigate} from "react-router-dom";

const PopoverUser = () => {

    const {user, setStat, setUser} = useContext(CustomContext)

    const navigate = useNavigate()

    const logOutUser = () => {
        setUser({
            email: ''
        })
        navigate('/lending')
        localStorage.removeItem('user')
    }

    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <Button bg={'none'} hover={'#3F3F45'}>
                        <span className='home__linked'>
                            {user.login} <ChevronDownIcon/>
                        </span>
                    </Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent
                        marginTop={'30px'}
                        bg={'rgba(26, 26, 28, 0.5)'}
                        boxShadow={'rgba(0, 0, 0, 0.25)'}
                        padding={'0'}
                        marginRight={'10px'}
                        hover={'none'}

                    >
                        <PopoverArrow/>
                        <PopoverBody
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                        >
                            <Button
                                width={'100%'}
                                bg={'rgba(26, 26, 28, 0.5)'}
                                display={'flex'}
                                justifyContent={'flex-start'}
                                borderBottom="1px solid"
                                borderRadius={'none'}
                            >
                                <NavLink to='/userCabinet' className='home__link' onClick={() => setStat(3)}>
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#F8F8F8"
                                         xmlns="http://www.w3.org/2000/svg">
<path
    d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C8.81186 17.2 7.64218 16.906 6.59528 16.3441C5.54837 15.7823 4.65678 14.9701 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C15.3432 14.9701 14.4516 15.7823 13.4047 16.3441C12.3578 16.906 11.1881 17.2 10 17.2Z"
     fillOpacity="0.6"/>
</svg>

                                </span>
                                    Профиль
                                </NavLink>
                            </Button>
                            <Button
                                width={'100%'}
                                bg={'rgba(26, 26, 28, 0.5)'}
                                display={'flex'}
                                justifyContent={'flex-start'}
                                borderBottom="1px solid"
                                borderRadius={'none'}
                            >
                                <NavLink to='/userCabinet' className='home__link' onClick={() => setStat(1)}>
                                   <span>
                                       <svg width="18" height="18" viewBox="0 0 18 18" fill="#9D9DA0"
                                            xmlns="http://www.w3.org/2000/svg">
<path
    d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM6 14H4V7H6V14ZM10 14H8V4H10V14ZM14 14H12V10H14V14Z"/>
</svg>
                                   </span>
                                    Статистика
                                </NavLink>
                            </Button>
                            <Button
                                width={'100%'}
                                bg={'rgba(26, 26, 28, 0.5)'}
                                display={'flex'}
                                justifyContent={'flex-start'}
                                borderBottom="1px solid"
                                borderRadius={'none'}
                            >
                                <NavLink to='/userCabinet' className='home__link' onClick={() => setStat(2)}>
                                    <span>
                                       <svg width="21" height="18" viewBox="0 0 21 18"  fill="#F8F8F8"
                                            xmlns="http://www.w3.org/2000/svg">
<path
    d="M12.5 5H11V10L15.28 12.54L16 11.33L12.5 9.25V5ZM12 0C9.61305 0 7.32387 0.948211 5.63604 2.63604C3.94821 4.32387 3 6.61305 3 9H0L3.96 13.03L8 9H5C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9C19 10.8565 18.2625 12.637 16.9497 13.9497C15.637 15.2625 13.8565 16 12 16C10.07 16 8.32 15.21 7.06 13.94L5.64 15.36C6.47147 16.2006 7.46218 16.8671 8.5542 17.3203C9.64622 17.7736 10.8176 18.0047 12 18C14.3869 18 16.6761 17.0518 18.364 15.364C20.0518 13.6761 21 11.3869 21 9C21 6.61305 20.0518 4.32387 18.364 2.63604C16.6761 0.948211 14.3869 0 12 0Z"
    fillOpacity="0.6"/>
</svg>
                                    </span>
                                    История матчей
                                </NavLink>
                            </Button>
                            <Button
                                width={'100%'}
                                bg={'rgba(26, 26, 28, 0.5)'}
                                display={'flex'}
                                justifyContent={'flex-start'}
                                borderBottom="1px solid"
                                borderRadius={'none'}
                            >
                                <NavLink to='/userCabinet' className='home__link' onClick={() => setStat(4)}>
                                   <span>
                                       <svg width="19" height="18" viewBox="0 0 19 18" fill="#F8F8F8"
                                            xmlns="http://www.w3.org/2000/svg">
<path
    d="M18 15V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V3H9C8.46957 3 7.96086 3.21071 7.58579 3.58579C7.21071 3.96086 7 4.46957 7 5V13C7 13.5304 7.21071 14.0391 7.58579 14.4142C7.96086 14.7893 8.46957 15 9 15H18ZM9 13H19V5H9V13ZM13 10.5C12.6022 10.5 12.2206 10.342 11.9393 10.0607C11.658 9.77936 11.5 9.39782 11.5 9C11.5 8.60218 11.658 8.22064 11.9393 7.93934C12.2206 7.65804 12.6022 7.5 13 7.5C13.3978 7.5 13.7794 7.65804 14.0607 7.93934C14.342 8.22064 14.5 8.60218 14.5 9C14.5 9.39782 14.342 9.77936 14.0607 10.0607C13.7794 10.342 13.3978 10.5 13 10.5Z"
     fillOpacity="0.6"/>
</svg>

                                   </span>
                                    Кошелёк
                                </NavLink>
                            </Button>
                            <Button
                                width={'100%'}
                                bg={'rgba(26, 26, 28, 0.5)'}
                                display={'flex'}
                                justifyContent={'flex-start'}
                                borderBottom="1px solid"
                                borderRadius={'none'}
                            >
                                <NavLink to='/userCabinet' className='home__link' onClick={() => setStat(5)}>
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="#F8F8F8"
                                             xmlns="http://www.w3.org/2000/svg">
<path
    d="M9.72933 13.5C8.80107 13.5 7.91084 13.1313 7.25446 12.4749C6.59808 11.8185 6.22933 10.9283 6.22933 10C6.22933 9.07174 6.59808 8.18151 7.25446 7.52513C7.91084 6.86875 8.80107 6.5 9.72933 6.5C10.6576 6.5 11.5478 6.86875 12.2042 7.52513C12.8606 8.18151 13.2293 9.07174 13.2293 10C13.2293 10.9283 12.8606 11.8185 12.2042 12.4749C11.5478 13.1313 10.6576 13.5 9.72933 13.5ZM17.1593 10.97C17.1993 10.65 17.2293 10.33 17.2293 10C17.2293 9.67 17.1993 9.34 17.1593 9L19.2693 7.37C19.4593 7.22 19.5093 6.95 19.3893 6.73L17.3893 3.27C17.2693 3.05 16.9993 2.96 16.7793 3.05L14.2893 4.05C13.7693 3.66 13.2293 3.32 12.5993 3.07L12.2293 0.420002C12.209 0.302219 12.1477 0.195429 12.0561 0.118553C11.9646 0.0416778 11.8489 -0.000319774 11.7293 1.83347e-06H7.72933C7.47933 1.83347e-06 7.26933 0.180002 7.22933 0.420002L6.85933 3.07C6.22933 3.32 5.68933 3.66 5.16933 4.05L2.67933 3.05C2.45933 2.96 2.18933 3.05 2.06933 3.27L0.0693316 6.73C-0.0606684 6.95 -0.000668302 7.22 0.189332 7.37L2.29933 9C2.25933 9.34 2.22933 9.67 2.22933 10C2.22933 10.33 2.25933 10.65 2.29933 10.97L0.189332 12.63C-0.000668302 12.78 -0.0606684 13.05 0.0693316 13.27L2.06933 16.73C2.18933 16.95 2.45933 17.03 2.67933 16.95L5.16933 15.94C5.68933 16.34 6.22933 16.68 6.85933 16.93L7.22933 19.58C7.26933 19.82 7.47933 20 7.72933 20H11.7293C11.9793 20 12.1893 19.82 12.2293 19.58L12.5993 16.93C13.2293 16.67 13.7693 16.34 14.2893 15.94L16.7793 16.95C16.9993 17.03 17.2693 16.95 17.3893 16.73L19.3893 13.27C19.5093 13.05 19.4593 12.78 19.2693 12.63L17.1593 10.97Z"
    fillOpacity="0.6"/>
</svg>

                                    </span>
                                    Параметры
                                </NavLink>
                            </Button>
                            <Button
                                width={'100%'}
                                bg={'rgba(26, 26, 28, 0.5)'}
                                display={'flex'}
                                justifyContent={'flex-start'}
                                borderBottom="1px solid"
                                borderRadius={'none'}
                                >
                                <NavLink to='/userCabinet' className='home__link' onClick={() => setStat(6)}>
                               <span>
                                   <svg width="20" height="20" viewBox="0 0 20 20"  fill="#F8F8F8"
                                        xmlns="http://www.w3.org/2000/svg">
<path
    d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.59177 13.5031 1.99639 11.7769 2 10ZM10 18C8.15 18 6.45 17.37 5.1 16.31L16.31 5.1C17.4082 6.49686 18.0036 8.22311 18 10C18 14.42 14.42 18 10 18Z"
     fillOpacity="0.6"/>
</svg>
                               </span>
                                    Черный список
                                </NavLink>
                            </Button>
                            <Button
                                width={'100%'}
                                bg={'rgba(26, 26, 28, 0.5)'}
                                display={'flex'}
                                justifyContent={'flex-start'}
                            >
                               <div onClick={logOutUser} className='home__link'>
                                    <span className='home__exitAcc'>
                                    <svg width="18" height="18" viewBox="0 0 18 18"  fill="#F8F8F8"
                                         xmlns="http://www.w3.org/2000/svg">
<path
    d="M2 18L16 18C17.11 18 18 17.11 18 16L18 12L16 12L16 16L2 16L2 2L16 2L16 6L18 6L18 2C18 1.46957 17.7893 0.960859 17.4142 0.585787C17.0391 0.210714 16.5304 -1.28474e-07 16 -1.74846e-07L2 -1.39876e-06C1.46957 -1.44514e-06 0.960861 0.210713 0.585788 0.585785C0.210716 0.960858 1.44514e-06 1.46956 1.39876e-06 2L1.74846e-07 16C1.28474e-07 16.5304 0.210714 17.0391 0.585787 17.4142C0.960859 17.7893 1.46957 18 2 18ZM10.92 5.42L9.5 4L4.5 9L9.5 14L10.92 12.59L8.33 10L18 10L18 8L8.33 8L10.92 5.42Z"
    fillOpacity="0.6"/>
</svg>
                                </span>
                                   Выйти из аккаунта
                               </div>
                            </Button>
                        </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Popover>

        </>
    );
};

export default PopoverUser;