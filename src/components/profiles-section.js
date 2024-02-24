import './css/profiles-section.css';
import ProfileBadge from './profile-badge';


function Profiles(props) {
    console.log(props.data);
  return (
    <div className="Profiles-Section">
        <h1>JSON Data:</h1>
        <div className='profiles-grid'>
          {props.data.map(item => (
              // <li key={item.id}>
              //     {item.id}: {item.name}
              // </li>
              <ProfileBadge profile={item}/>
          ))}
        </div>
    </div>
  );
}

export default Profiles;
