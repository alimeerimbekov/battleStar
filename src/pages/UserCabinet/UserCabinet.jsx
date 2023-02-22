import React, {useContext} from 'react';
import UserAside from "../../components/CabinetUser/UserAside/UserAside";
import Bg from "../../assets/logo/bgUserCab1.jpg"
import UserStat from "../../components/CabinetUser/UserStat/UserStat";
import {CustomContext} from "../../utils/Context";
import UserStore from "../../components/CabinetUser/UserStore/UserStore";
import UserData from "../../components/CabinetUser/UserData/UserData";
import UserOptions from "../../components/CabinetUser/UserOptions/UserOptions";
import UserBalance from "../../components/CabinetUser/UserBalance/UserBalance";
import UserBlackList from "../../components/CabinetUser/UserBlackList/UserBlackList";

const UserCabinet = () => {

    const {stat} = useContext(CustomContext)

    return (
        <div className='userCabinet'>
            <UserAside/>

            <img src={Bg} alt="" className='userCabinet__img'/>
            <div className="userCabinet__content">
                    {
                        stat === 1 ? <UserStat/> : ''
                    }
                    {
                        stat === 2 ? <UserStore/> : ''
                    }
                    {
                        stat === 3 ? <UserData/> : ''
                    }
                    {
                        stat === 4 ? <UserBalance/> : ''
                    }
                    {
                        stat === 5 ? <UserOptions/> : ''
                    }
                    {
                        stat === 6 ? <UserBlackList/> : ''
                    }

                </div>
        </div>
    );
};

export default UserCabinet;