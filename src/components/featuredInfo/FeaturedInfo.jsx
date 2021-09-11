import './FeaturedInfo.css';
import {ArrowDownward,ArrowUpward} from '@material-ui/icons';

export default function FeaturedInfo() {
    return (
        <div className="featured">
           <div className="featuredItem">
             <span className="featuredTitle">Revanue</span>
             <div className="featuredMoneyContainer">
               <span className="featuredMoney">$2,415</span>
               <span className="featuredMoneyRate">
                 -11.4 <ArrowDownward className="arrowred" />  
               </span>
             </div>
             <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
             <span className="featuredTitle">Sales</span>
             <div className="featuredMoneyContainer">
               <span className="featuredMoney">$3,415</span>
               <span className="featuredMoneyRate">
                 -12.4 <ArrowDownward className="arrowred" />  
               </span>
             </div>
             <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
             <span className="featuredTitle">Cost</span>
             <div className="featuredMoneyContainer">
               <span className="featuredMoney">$5,415</span>
               <span className="featuredMoneyRate">
                 +2.4 <ArrowUpward className="arrowblue" />  
               </span>
             </div>
             <span className="featuredSub">Compared to last month</span>
            </div> 
        </div>
    )
}
