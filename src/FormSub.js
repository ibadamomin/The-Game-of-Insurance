import React from "react";
import './form.css';
import { useNavigate } from "react-router-dom";

function FormSub() {

    const [formData, setFormData] = React.useState({
        price: 0,
        income: 0,
        creditscore: 0,
        downpayment: 0,
        term: 0
    })
    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        
    }
    function pmt() {
        let ans = [,]
        let score = 100;
        let cs = 0; //credit score range 0=Bad, 1=Fair, 2=Good, 3=Excellent

        const salary = formData.income; //this inputs the salary
        const terms = formData.term;
        // document.querySelector("#salary").value; //this inputs loan term in months
        const creditScore = formData.creditscore; //this inputs creditScore
        if (creditScore <= 629) {
            console.log("Bad");
            cs = 0;
        } else if (creditScore <= 689 && creditScore > 629) {
            console.log("Fair");
            cs = 1;
        } else if (creditScore <= 719 && creditScore > 689) {
            console.log("Good");
            cs = 2;
        } else {
            console.log("Excellent");
            cs = 3;
        }
        const downPayment = formData.downpayment //this inputs down payment
        let rate = 0;
        let price = formData.price
        if (price < 40000) {
            //used car
            if (cs === 0) {
                //bad credit
                rate = 0.1033;
                score -= 30;
            } else if (cs === 1) {
                //fair credit
                rate = 0.0553;
                score -= 20;
            } else if (cs == 2) {
                //good credit
                rate = 0.04;
                score -= 10;
            } else {
                //excellent credit
                rate = 0.0368;
            }
        } else {
            //new car
            if (cs === 0) {
                //bad credit
                rate = 0.0657;
            } else if (cs === 1) {
                //fair credit
                rate = 0.0403;
            } else if (cs == 2) {
                //good credit
                rate = 0.035;
            } else {
                //excellent credit
                rate = 0.0296;
            }
        }

        let pmt = 0;
        formData.price -= downPayment;
        rate /= 12;
        pmt = rate * price;
        rate += 1;
        rate = rate ** terms;
        rate = 1 / rate;
        rate = 1 - rate;
        pmt = pmt / rate;

        const monthlySalary = salary / 12;

        if (pmt >= 0.1 * monthlySalary) {
            score -= 20;
        }
        console.log(pmt)
        console.log(score)
        ans[0] = pmt
        ans[1] = score
        return ans
    };


const navigate = useNavigate();
const navigateHome = () => {
    navigate('/Action');
};
return (
    <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
            <div className="field1" >
                <label> Please Enter </label>
                <input
                    type="number"
                    placeholder="Enter the Price of your car"
                    onChange={handleChange}
                    name="price"
                    value={formData.price}
                />
                <input
                    type="number"
                    placeholder="Enter your income"
                    onChange={handleChange}
                    name="income"
                    value={formData.income}
                />
                <input
                    type="number"
                    placeholder="Enter your credit score"
                    onChange={handleChange}
                    name="creditscore"
                    value={formData.creditscore}
                />
                <input
                    type="number"
                    placeholder="Down Payment"
                    onChange={handleChange}
                    name="downpayment"
                    value={formData.downpayment}
                />
                <input
                    type="number"
                    placeholder="Term"
                    onChange={handleChange}
                    name="term"
                    value={formData.term}
                />
                <button type="submit" id="submitBtn" className="submitBtn" onClick={navigateHome}> Submit </button>
                
            </div>

        </form>
    </div>
);
}

export default FormSub;