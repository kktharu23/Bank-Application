import { useContext } from "react";
import userContext from "./context.js";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import "./style.css";

export default function Deposit() {
  useContext(userContext);
  let[currbalance, setCurrbalance] = useState();
  let[deposit, setDeposit] = useState();
  let[pin, setPin] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (deposit === " ") {
      alert("Please enter an amount");
    } else if (isNaN(deposit)) {
      setDeposit("");
      alert("Please enter an amount in number");
    } else if (Number(deposit) < 1) {
      setDeposit("");
      alert("Please enter a positive amount");
    } else {
      updateproducts();
      setDeposit("");
      setPin("");
    }
  }

  let url = `http://localhost:1337/api/bank-accounts/${pin}`;

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
  
    if (pin) {
      fetchdata();
    }
  }, [url, pin]);
  
  const updateproducts = async () => {
    let balance_add = Number(currbalance) + Number(deposit);
    setCurrbalance(balance_add);
    alert(`$${deposit} amount deposited successfully`);

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
          <h4 className="balance">Balance: {currbalance}</h4>
        </Card>
        <form>
          <div className="amountcard">
            <h1 className="enter">Deposit</h1>
            <input
              type="number"
              placeholder="Enter Your Pin Number"
              onChange={(e) => setPin(e.target.value)}
              value={pin}
              min="1"
            /><br /><br />
            <input
              type="number"
              placeholder="Enter Your Amount"
              min={1}
              value={deposit}
              id="input22"
              onChange={(e) => setDeposit(e.target.value)}
            /><br /><br /><br />
            <Button type="submit" value="submit" disabled={!deposit} onClick={handleSubmit}><b>Submit</b></Button>
          </div>
        </form>
      </center>
    </>
  );
}
