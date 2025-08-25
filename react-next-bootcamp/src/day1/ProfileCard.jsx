// <ProfileCard> with name, age, bio.

const ProfileCard = ({ name, age, bio, favoriteColor }) => {
  return (
    <>
      <h3 className="card_name">Name: {name}</h3>
      <p className="card_meta">Age: {age}</p>
      <p>Bio: {bio}</p>
      <p>
        Favorite Color: <span className="favorite_color">{favoriteColor}</span>
      </p>
    </>
  );
};

export default ProfileCard;
