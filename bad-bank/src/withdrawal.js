import { useContext } from "react"
import userContext from "./context";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import "./style.css";

export default function Withdraw() {
  let user = useContext(userContext);
  let [currbalance, setCurrbalance] = useState(user.users[(user.users.length) - 1].balance);
  let [withdraw, setWithdraw] = useState();
  let [pin1, setPin1] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (withdraw === " ") {
      alert("Please enter an amount");
    } else if (isNaN(withdraw)) {
      setWithdraw("");
      alert("Please enter the amount in numbers");
    } else if (Number(withdraw) < 1) {
      setWithdraw("");
      alert("Please enter a positive amount");
    } else {
      updateproducts();
      setWithdraw("");
      setPin1("");
    }
  }

  let url = `http://localhost:1337/api/bank-accounts/${pin1}`;
  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await axios(url);
        const result = res.data;
        setCurrbalance(result.data.attributes.Balance);
      } catch (error) {
        // Handle the error, e.g., show a user-friendly error message
        console.error("Error fetching data:", error);
      }
    }
  
    if (pin1) {
      fetchdata();
    }
  }, [url, pin1, currbalance]);
  

  const updateproducts = async () => {
    let balance_add = Number(currbalance) - Number(withdraw);
    setCurrbalance(balance_add);
    alert(`$${withdraw} amount withdrawn successfully`);

    let update = {
      data: {
        "Balance": balance_add
      },
    };

    const put_bal = await axios.put(`${url}`, update);
    console.log(put_bal);
  }

  return (
    <>
      <center>
        <Card className="id1">
          <h4 className="balance"> Balance: {currbalance} </h4>
        </Card>

        <form onSubmit={handleSubmit}>
          <div className="amountcard">
            <h1 className="enter"> Withdrawal </h1>
            <input type="number" placeholder="Enter Your Pin Number" onChange={(e) => setPin1(e.target.value)} min="1" value={pin1} /><br /><br />
            <input type="number" id="number" placeholder="Enter Your Amount" value={withdraw} onChange={(e) => setWithdraw(e.target.value)} /><br /><br /><br />
            <Button type="submit" value="submit" disabled={!withdraw} onClick={handleSubmit}><b>Submit</b></Button>
          </div>
        </form>
      </center>
    </>
  );
}
