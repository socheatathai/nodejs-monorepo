import Styles from "./Product.module.css";
import { useState } from "react";
const Product = () => {

  const [handle, setHandle] = useState();
  const handleSubmit = (e)=>{
    e.preventDefault();
    setHandle(!handle)
  }
  return (
    <>

    <div className={Styles.navBar}>
      <ul>
        <li>Home /</li>
        <li>Sales /</li>
        <li>Product illustration</li>
      </ul>
    </div>
    <>
    { handle === true ? <div  className={Styles.ProductIllutionForm}  >
      <h1>Product illustration</h1> 
      <form action="" className={Styles.showAnswer}>
       <div className={Styles.formLeft}>
         <label className={Styles.labelOne} htmlFor="">Basic Product :</label>
         <label className={Styles.labelTwo} htmlFor="">Rider :</label>
       </div>
       <div className={Styles.formRight}>
       <div className={Styles.rowFormLeft}>
       <div>
          <b>modal premium</b>
          <input value={"427.9"} className={Styles.modalInput} type="number" name="" id="" />
        </div>
        <div>
          <b>Annual Premium</b>
          <input value={"427.9"}  className={Styles.modalInput} type="number" name="" id="" /> 
        </div>
        <div>
          <b>Af Disc. Annual Premium</b>
          <input value={"427.9"}  className={Styles.modalInput} type="number" name="" id="" />
        </div> 
       </div>
       <div className={Styles.rowFormLeft}>
       <div>
          <b>Modal Premium Rider</b>
          <input value={"7.7"} className={Styles.modalInput} type="number" name="" id="" />
        </div>
        <div>
          <b>Annual Premium Rider</b>
          <input value={"7.7"}  className={Styles.modalInput} type="number" name="" id="" /> 
        </div>
        <div>
          <b>Af Disc. Annual Premium Rider</b>
          <input value={"7.7"}  className={Styles.modalInput} type="number" name="" id="" />
        </div>
       </div>
       <div style={{padding:'18px'}} className={Styles.rowFormLeft}>
        
       <div>
       <hr />
          <b>TOTAL MODAL PREM</b>
          <input value={"435.60"} className={Styles.modalInput} type="number" name="" id="" />
        </div>
        <div>
        <hr />
          <b>TOTAL ANN. PREM</b>
          <input value={"435.60"}  className={Styles.modalInput} type="number" name="" id="" /> 
        </div>
        <div>
        <hr />
          <b>TOTAL PR. AF.DISC</b>
          <input value={"435.60"}  className={Styles.modalInput} type="number" name="" id="" />
        </div>
       </div>
      </div>
      </form>
     </div> : <div>
            {/* this line is hide */}
     </div>

    }
    </>
      <form>
        <label>
          <b>Product Name :</b>
          <select className={Styles.productselect} name="" id="">
            <option value="">product one</option>
            <option value="">product one</option>
            <option value="">product one</option>
            <option value="">product one</option>
          </select>
        </label>
        <label>
           <b style={{marginLeft:'10px'}}>Phillip Capital Staff :</b> 
          <select className={Styles.CapitalStaff} name="" id="">
            <option value="">product one</option>
            <option value="">product one</option>
            <option value="">product one</option>
            <option value="">product one</option>
          </select>
        </label> <br />
        <label htmlFor="">
          <b>Policyholder (Full Name)</b>
          <input className={Styles.poliInput} type="text" placeholder="Full Name" />
        </label>
        <label htmlFor="">
          <b style={{marginLeft:'20px'}}>Insured (Full Name)</b>
          <input className={Styles.insureinput} type="text" placeholder="Full Name" />
        </label>
        <label htmlFor="">
          <b style={{marginLeft:'20px'}}>date of birth</b>
          <input className={Styles.dateInput} type="date" name="" id="" />
        </label>
        <label>
           <b style={{marginLeft:'20px'}}>Sex:</b> 
          <select className={Styles.sexSelect} name="" id="">
            <option value="">male</option>
            <option value="">female</option>
          </select>
        </label>
        <label htmlFor="">
          <b>Payment Mode</b>
          <select className={Styles.paymentSelect} name="" id="">
            <option value="1">annually</option>
            <option value="1">annually</option>
          </select>
        </label>
        <label htmlFor="">
          <b style={{marginLeft:'20px'}}>Policy Term</b>
          <select className={Styles.policyTermSelect} name="" id="">
            <option value="1">annually</option>
            <option value="1">annually</option>
          </select>
        </label> <br />
        <label htmlFor="">
          <b>Sum assured</b>
          <input className={Styles.SumSelect} type="text" placeholder="10000" />
        </label>
        <label htmlFor="">
          <b style={{marginLeft:'20px'}}>Rider</b>
          <select className={Styles.policyTermSelect} name="" id="">
            <option value="1">select...</option>
            <option value="1">annually</option>
          </select>
        </label> <br />
        <button onClick={handleSubmit} className={Styles.buttonEvaluate} >Evaluate</button>
        

        
      </form>
    </>
  );
};

export default Product;
