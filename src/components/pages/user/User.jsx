import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import './User.css';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
             <button className="userAddButton">Create</button>
            </Link>
          </div>  
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img className="userShowImg" src="https://www.mceldrewyoung.com/wp-content/uploads/2020/09/coyle.png" />
                <div className="userShowTopTitle">
                 <span className="userShowUserName">Ali Mohamed</span>
                 <span className="userShowUserTitle">Programmer</span> 
                </div>
              </div> 
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">Annaback89</span>
                </div>
                <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">010903424536</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+2435435656243</span>
                </div>
                <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">Annaback89@gmail.com</span>
                </div>
                <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Egypt / Cairo</span>
                </div>
              </div>  
            </div>  

            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
               <div className="userUpdateLeft">
                 <div className="userUpdateItem">
                   <label>UserName</label>
                   <input type="text" placeholder="Annaback89" className="userUpdateInput" />
                 </div>
                 <div className="userUpdateItem">
                   <label>FullName</label>
                   <input type="text" placeholder="Anna whit" className="userUpdateInput" />
                 </div>
                 <div className="userUpdateItem">
                   <label>Email</label>
                   <input type="email" placeholder="Annaback89Annaback89" className="userUpdateInput" />
                 </div>
                 <div className="userUpdateItem">
                   <label>Phone</label>
                   <input type="text" placeholder="+234432452376" className="userUpdateInput" />
                 </div>
                 <div className="userUpdateItem">
                   <label>Address</label>
                   <input type="text" placeholder="Egypt / Cairo" className="userUpdateInput" />
                 </div>
               </div> 
               <div className="userUpdateRight">
                 <div className="userUpdateUpload">
                  <img className="userUpdateImg" src="https://www.mceldrewyoung.com/wp-content/uploads/2020/09/coyle.png" />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" style={ {display:'none'} } />
                 </div>
                 <button className="userUpdateButton">Update</button>
                </div> 
              </form>
            </div>  
          </div>
        </div>
    )
}
