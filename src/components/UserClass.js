import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "https.//hibd"
      },
    };
  }

  async componentDidMount() {
    const fetchData = await fetch("https://api.github.com/users/akshaymarch7");

    const json = await fetchData.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    // const { name } = this.props;
    const {name , location, avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact :- 9310614314</h4>
      </div>
    );
  }
}

export default UserClass;
