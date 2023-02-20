import React from 'react';
import Logo from '../../../assets/img/blackUserLogo.png'
import Img from '../../../assets/img/Img.png'

const BlackUser = () => {
    return (
        <div className='blackUser'>
            <div className="blackUser__user">
                <div className="blackUser__left">
                    <img src={Img} alt="" className="blackUser__img"/>
                    <div className="blackUser__status">
                        <p className="blackUser__name">SergioRicht</p>
                        <p className="blackUser__text">Играет в CS:GO</p>
                    </div>
                </div>
                <img src={Logo} alt="" className="blackUser__center"/>
            </div>
            <span className="blackUser__icon">
<svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2.53043 12 3.03914 12.2107 3.41421 12.5858C3.78929 12.9609 4 13.4696 4 14C4 14.5304 3.78929 15.0391 3.41421 15.4142C3.03914 15.7893 2.53043 16 2 16C1.46957 16 0.96086 15.7893 0.585787 15.4142C0.210714 15.0391 0 14.5304 0 14C0 13.4696 0.210714 12.9609 0.585787 12.5858C0.96086 12.2107 1.46957 12 2 12ZM2 6C2.53043 6 3.03914 6.21071 3.41421 6.58579C3.78929 6.96086 4 7.46957 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10C1.46957 10 0.96086 9.78929 0.585787 9.41421C0.210714 9.03914 0 8.53043 0 8C0 7.46957 0.210714 6.96086 0.585787 6.58579C0.96086 6.21071 1.46957 6 2 6V6ZM2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.96086 3.78929 0.585787 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.960859 0.585787 0.585786C0.96086 0.210714 1.46957 0 2 0Z" fill="#BFBFBF"/>
</svg>
            </span>
        </div>
    );
};

export default BlackUser;