import './NewUser.css';

export default function NewUser() {
    return (
        <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <form className="newUserForm">
            <div className="newUserItem">
              <label>Username</label>
              <input type="text" placeholder="Ali" />
            </div>
            <div className="newUserItem">
              <label>Fullname</label>
              <input type="text" placeholder="Ali Mohamed" />
            </div>
            <div className="newUserItem">
              <label>Email</label>
              <input type="number" placeholder="Ali@gmail.com" />
            </div>
            <div className="newUserItem">
              <label>Password</label>
              <input type="password" placeholder="password" />
            </div>
            <div className="newUserItem">
              <label>Phone</label>
              <input type="number" placeholder="01132342324" />
            </div>
            <div className="newUserItem">
              <label>Address</label>
              <input type="address" placeholder="Egypt / Cairo" />
            </div>
            <div className="newUserItem">
              <label>Gender</label>
              <div className="newUserGender">
                <input type="radio" name="gender" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" value="other" />
                <label for="other">Other</label>  
              </div>
            </div>
            <div className="newUserItem">
              <label>Active</label>
              <select className="newUserSelect" name="active">
                <option value="yes">Yes</option>  
                <option value="no">No</option>  
              </select>
            </div>
            <button className="newUserButton">Create</button> 
          </form>
        </div>
    )
}
