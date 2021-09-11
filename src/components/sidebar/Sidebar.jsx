import './Sidebar.css';
import { LineStyle,Timeline,TrendingUp,Person,NextWeek,AttachMoney,MailOutline,Feedback,ChatBubbleOutline,Report } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
               <h3 className="sidebarTitle">Dashboard</h3>
               <ul className="sidebarList">
                <Link to="/" className="link">
                  <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcons" />  
                    Home
                  </li>
                </Link>
                 <li className="sidebarListItem">
                   <Timeline className="sidebarIcons" />  
                   Analysis
                 </li>
                 <li className="sidebarListItem">
                   <TrendingUp className="sidebarIcons" />
                   Sales
                 </li>
               </ul>
            </div>
            <div className="sidebarMenu">
               <h3 className="sidebarTitle">Quick Menu</h3>
               <ul className="sidebarList">
                 <Link to="/users" className="link">
                  <li className="sidebarListItem">
                    <Person className="sidebarIcons" />  
                     Users
                  </li>
                 </Link>
                 <Link to="/products" className="link">
                  <li className="sidebarListItem">
                    <NextWeek className="sidebarIcons" />  
                    Products
                  </li>
                 </Link>
                 <li className="sidebarListItem">
                   <AttachMoney className="sidebarIcons" />
                   Transactions
                 </li>
                 <li className="sidebarListItem">
                   <TrendingUp className="sidebarIcons" />
                   Reports
                 </li>
               </ul>
            </div>
            <div className="sidebarMenu">
               <h3 className="sidebarTitle">Notifications</h3>
               <ul className="sidebarList">
                 <li className="sidebarListItem">
                   <MailOutline className="sidebarIcons" />  
                   Mail
                 </li>
                 <li className="sidebarListItem">
                   <Feedback className="sidebarIcons" />  
                   Feedback
                 </li>
                 <li className="sidebarListItem">
                   <ChatBubbleOutline className="sidebarIcons" />
                   Message
                 </li>
               </ul>
            </div>
            <div className="sidebarMenu">
               <h3 className="sidebarTitle">Staff</h3>
               <ul className="sidebarList">
                 <li className="sidebarListItem">
                   <NextWeek className="sidebarIcons" />  
                   Manage
                 </li>
                 <li className="sidebarListItem">
                   <Timeline className="sidebarIcons" />  
                   Analysis
                 </li>
                 <li className="sidebarListItem">
                   <Report className="sidebarIcons" />
                   Reports
                 </li>
               </ul>
            </div>
          </div> 
        </div>
    )
}
