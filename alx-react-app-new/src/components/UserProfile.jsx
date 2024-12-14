const UserProfile = (props) => {
    return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
   <h2 style={{ color: 'blue' }}>{props.name}</h2>
   <p style={{ fontSize: '3em' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
   <p style={{ fontSize: '2em' }}>Bio: {props.bio}</p>
 </div>
    );
  };

  export default UserProfile;