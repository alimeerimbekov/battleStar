import React from 'react';
import Logo from '../../../assets/userLogo.png'
import Flag from '../../../assets/flag.png'

const GamerUser = () => {
    return (
        <div className='gamerTop__users'>
          <div className="gamerTop__users-info">
              <p className="gamerTop__users-num">1</p>
              <div className="gamerTop__user">
                  <img src={Logo} alt="" className="gamerTop__user-logo"/>
                  <img src={Flag} alt="" className="gamerTop__user-flag"/>
                  <p className="gamerTop__user-name">JohnTrawolta_4</p>
              </div>

          </div>
          <div className="gamerTop__users-ball">9678</div>
        </div>
    );
};

export default GamerUser;