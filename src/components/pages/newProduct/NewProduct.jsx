import './NewProduct.css';

export default function NewProduct() {
    return (
        <div className="newProduct">
          <h1>New Product</h1>  
          <form className="newProductForm">
            <div className="AddImg">
              <h3>Image</h3>
              <input type="file" />
            </div>  
            <div className="newProductItem">
              <label>Name</label>
              <input type="text" placeholder="Apple" />
            </div>
            <div className="newUserItem">
              <label>Stock</label>
              <input type="text" placeholder="123" />
            </div>
            <div className="newUserItem">
              <label>Active</label>
              <select className="newProductSelect" name="active">
                <option value="yes">Yes</option>  
                <option value="no">No</option>  
              </select>
            </div>
            <button className="newProductButton">Create</button> 
          </form>
        </div>
    )
}
