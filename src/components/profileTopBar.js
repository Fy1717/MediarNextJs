const ProfileTopSection = ({followersCount, articlesCount, followingsCount, user, onViewChange}) => {
  return (
    <div className="profile-top-section" style={{ background: 'black', color: 'white', padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', borderRadius: '10px'}}>
      <div className="profile-pic" style={{ background: 'gray', borderRadius: '50%', width: '100px', height: '100px' }}>
        <img
            src={`data:image/jpeg;base64,${user.image}`}
            style={{ maxWidth: '100px', maxHeight: '100px', borderRadius: '50%' }}
        /> 
      </div>
      
      <div className="info-box" style={{ background: 'white', padding: '10px 20px', borderRadius: '10px', textAlign: 'center', color: 'black' }}
        onClick={() => onViewChange('followers')}>
        <div>FOLLOWERS</div>
        <hr />
        <div>{ followersCount }</div>
      </div>
        
      <div className="info-box" style={{ background: 'white', padding: '10px 20px', borderRadius: '10px', textAlign: 'center', color: 'black' }}
        onClick={() => onViewChange('articles')}>
        <div>ARTICLES</div>
        <hr />
        <div>{ articlesCount }</div>
      </div>

      <div className="info-box" style={{ background: 'white', padding: '10px 20px', borderRadius: '10px', textAlign: 'center', color: 'black'}}
        onClick={() => onViewChange('followings')}>
        <div>FOLLOWINGS</div>
        <hr />
        <div>{ followingsCount }</div>
      </div>
    </div>
  );
}

export default ProfileTopSection;