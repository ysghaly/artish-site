import './css/profile-badge.css';

function ProfileBadge(props) {
    console.log(props.data);
  return (
    <div className="Profile-Badge">
        <h3>{props.profile.name}</h3>
        <h4>{props.profile.Location}</h4>
        <h4>${props.profile.hourly_rate_min} - ${props.profile.hourly_rate_max}</h4>
        <p>{props.profile.about}</p>
        <h4>Skills:</h4>
        <ul className='skills-list'>
            {props.profile.skills.map(item => (
            <li key={item.index}>
                {item}
            </li>
            ))}
        </ul>
        <h4>Tools:</h4>
        <ul className='skills-list'>
            {props.profile.tools.map(item => (
            <li key={item.index}>
                {item}
            </li>
            ))}
        </ul>

    </div>
  );
}

export default ProfileBadge;
