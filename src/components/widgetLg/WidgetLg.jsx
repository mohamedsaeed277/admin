import './WidgetLg.css';

export default function WidgetLg() {
    return (
        <div className="widgetLg">
         <h3 className="widgetLgTitle">Latest Transactions</h3> 
         <table className="widgetLgTable">
           <tr className="widgetTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>   
           </tr>
           <tr className="widgetLgTr">
            <td className="widgetLgUser">
             <img className="widgetSmImg" src="http://emoticable.com/wp-content/uploads/2020/09/%D8%B1%D8%AC%D9%84.jpg" alt="" />  
             <span className="widgetLgName">Ahmad Ali</span>
            </td>
            <td className="widgetLgDate"> 4 Jun 2021</td>
            <td className="widgetLgAmount">$220.00</td>
            <td className="widgetLgStatus">
              <button className="approved">Approved</button>  
            </td>
           </tr>
           <tr className="widgetLgTr">
            <td className="widgetLgUser">
             <img className="widgetSmImg" src="http://emoticable.com/wp-content/uploads/2020/09/%D8%B1%D8%AC%D9%84.jpg" alt="" />  
             <span className="widgetLgName">Ahmad Ali</span>
            </td>
            <td className="widgetLgDate"> 4 Jun 2021</td>
            <td className="widgetLgAmount">$220.00</td>
            <td className="widgetLgStatus">
              <button className="pending">Pending</button>  
            </td>
           </tr>
           <tr className="widgetLgTr">
            <td className="widgetLgUser">
             <img className="widgetSmImg" src="http://emoticable.com/wp-content/uploads/2020/09/%D8%B1%D8%AC%D9%84.jpg" alt="" />  
             <span className="widgetLgName">Ahmad Ali</span>
            </td>
            <td className="widgetLgDate"> 4 Jun 2021</td>
            <td className="widgetLgAmount">$220.00</td>
            <td className="widgetLgStatus">
              <button className="approved">Approved</button>  
            </td>
           </tr>
           <tr className="widgetLgTr">
            <td className="widgetLgUser">
             <img className="widgetSmImg" src="http://emoticable.com/wp-content/uploads/2020/09/%D8%B1%D8%AC%D9%84.jpg" alt="" />  
             <span className="widgetLgName">Ahmad Ali</span>
            </td>
            <td className="widgetLgDate"> 4 Jun 2021</td>
            <td className="widgetLgAmount">$220.00</td>
            <td className="widgetLgStatus">
              <button className="rejected">Rejected</button>  
            </td>
           </tr>
         </table>
        </div>
    )
}
