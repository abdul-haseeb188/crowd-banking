import React from "react";
import '../../scss/style.scss';
import Button from '@material-ui/core/Button';
import qnbLogo from '../../Images/CCB.jpg'
const Qnbbank = () => {
    return (
        <div>
            

         <div className="mainHeader">
                <div><img src={qnbLogo}  /> </div>
                <div > Current Login Time:<br/>26 Nov 2020, 05:29:32 PM<br/>QST </div>
                <div>
                    <p >Welcome zone Energy trade and cont</p>
                </div>
                <div > 
                    <div className="custom-select">
                        <select>
                            <option value="0">Qatar</option>
                            <option value="1">Turkey</option>
                            <option value="2">KSA</option>
                            <option value="3">UAE</option>
                            
                        </select>
                    </div>
                    <div className="custom-select">
                        <select>
                            <option value="0">English</option>
                            <option value="1">Arabic</option>
                                                    </select>
                    </div>
                   <input  type="button" value="Log Off"  style={{marginRight: '30px'}} />
                </div>
         </div>
         <Button size="small" variant="contained" color="primary"> Home </Button>{' '}
         <Button size="small" variant="contained" color="primary"> Account </Button>{' '}
         <Button size="small" variant="contained" color="primary"> Cards </Button>{' '}
         <Button size="small" variant="contained" color="primary"> Transfers </Button>{' '}
         <Button size="small" variant="contained" color="primary"> Loans </Button>{' '}
         <Button size="small" variant="contained" color="primary"> Paypal </Button>{' '}
         <Button size="small" variant="contained" color="primary"> Investments </Button>{' '}
         <Button size="small" variant="contained" color="primary"> Bill Payments </Button>{' '}
         <Button size="small" variant="contained" color="primary"> Customer Services </Button>{' '}
         <Button size="small" variant="contained" color="primary"> E-statement </Button>{' '}
         <Button size="small" variant="contained" color="primary"> SMS </Button>{' '}
         <Button size="small" variant="contained" color="primary"> My Profile </Button>{' '}
         <Button size="small" variant="contained" color="primary"> Like Rewards </Button>{' '}


            <div className="subheader">
                 <input type="button" value="Home" />

                    <input className type="button" value="Account" />

                    <input type="button" value="Cards" />

                    <input className type="button" value="Transfers" />

                    <input type="button" value="Loans" />

                    <input className type="button" value="Paypal" />

                    <input type="button" value="Investments" />

                    <input className type="button" value="Bill Payments" />

                    <input type="button" value="Customer services" />

                    <input className type="button" value="Account" />

                    <input type="button" value="e-Statement" />

                    <input className type="button" value="SMS" />

                    <input type="button" value="My Profile" />

                    <input type="button" value="Like Rewards" />
              
               
            </div>
           
        </div>
    
    );

}

export default Qnbbank;




























// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import b1 from ""

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function ContainedButtons() {
//   const classes = useStyles();

//   return (

//     <div className={classes.root}>
//       <Button variant="contained" color = "primary">Home</Button>
//       <Button variant="contained" color = "primary">Accounts</Button>
//       <Button variant="contained" color = "primary">Cards</Button>
//       <Button variant="contained" color = "primary">Transfers</Button>
//       <Button variant="contained" color = "primary">loans</Button>
//       <Button variant="contained" color = "primary">Paypal</Button>
//       <Button variant="contained" color = "primary">Investments</Button>
//       <Button variant="contained" color = "primary">Bill Payments</Button>
//       <Button variant="contained" color = "primary">Customer Service</Button>
//       <Button variant="contained" color = "primary">E-Statement</Button>
//       <Button variant="contained" color = "primary">SMS</Button>
//       <Button variant="contained" color = "primary">My Profile</Button>
//       <Button variant="contained" color = "primary">Life Rewards</Button>



//     </div>
//   );
// }










