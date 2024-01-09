import userContext from './context';
import { useContext, useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap";
import axios from 'axios';
import './style.css';

export default function Create() {
  let user = useContext(userContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [block, setBlock] = useState("none");
  const [unblock, setUnblock] = useState("block");
  const [data,setData]=useState();

  let url = "http://localhost:1337/api/bank-accounts";
     useEffect(() => {
      async function fetchdata() {
        let res = await axios(url);
        let result = res.data;
        setData(result);
      }
      fetchdata();
    }, [url]);


  const postproducts=async(data)=>{
          user.users=[...user.users,{name,email,password,balance:0}];
      alert (` Sucessfully created your Account ${name}`)
      setName("")
        setEmail("")
        setPassword("")
      setBlock("block")
      setUnblock("none")

          var post={"data":{
           "Name":name,
           "Email":email,
           "password":password
          }}
           
          const res = await (axios.post(url,post))
          console.log(res.data)
          
          }
  return (
    <>
    
        <div className="create">
          <h1 className="crt">Create</h1>
          <form name='myForm' onSubmit={postproducts}>
            <label>User Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="Enter Your Name" onChange={(e) => { setName(e.target.value) }} required /><br /><br />
            <label>Email address:</label>
            <input type="email" placeholder="Enter Your email" onChange={(e) => { setEmail(e.target.value) }} required /><br /><br />
            <label>Password:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" placeholder="Enter Your Password" onChange={(e) => { setPassword(e.target.value) }} required /><br /><br />
            <button type="submit" className="btn btn-primary" disabled={!name && !email &&!password}><b>Submit</b></button>&nbsp;
          </form>
        </div>
        
      <center>
      <Card id="account">
        <button type="submit" className="btn btn-primary" style={{ display: `${block}` }} onClick={() =>
             { setUnblock("block"); setBlock("none"); }}>
            <b>Add Another Account</b></button>
      </Card>
      </center>
    </>
  );
}
