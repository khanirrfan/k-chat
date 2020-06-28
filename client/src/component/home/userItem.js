import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './userItem.style.scss';
const ProfileItem = ({profile:{_id, name, avatar}}) => {
  return (
    <div className='profile bg-light'>

      <img src={avatar} alt='' className='round-img' />
      <Link to={`/chat/${_id}`}>
      <div className="userName">

        <div>
        {name}
        </div>
        <div>Message</div> 
          
      </div>
      </Link>    
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
