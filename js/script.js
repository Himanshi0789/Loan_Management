storeLoanData = () => {
    const companyName = document.getElementById("cName").value;
    const companyOwner = document.getElementById("cOwner").value;
    const emailAddress = document.getElementById("email").value;
    const phoneNumber = document.getElementById("pNumber").value;
    const annualSale = document.getElementById("annualSale").value;
    const borrowAmount = document.getElementById("borrowAmount").value;
    const paymentTerms = document.getElementById("paymentTerms").value;
    // Here we are storing the data into object//
    let loanObject = {
      companyName: companyName,
      companyOwner: companyOwner,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      annualSale: annualSale,
      borrowAmount: borrowAmount,
      paymentTerms: paymentTerms
    }

    // Here We are doing Validations//
    if (companyName == "") {
        alert(" Company Name must be filled out");
        return false;
         }
    if (companyOwner == "") {
        alert(" Company Owner must be filled out");
        return false;
        } 
    if (emailAddress == "") {
        alert(" Email Address must be filled out");
        return false;
        }
        if (phoneNumber == "") {
                alert(" Phone Number must be filled out");
                return false;
                 }
       if (annualSale == "") {
                alert(" Annual Sale must be filled out");
                return false;
                } 
        if (borrowAmount == "") {
                alert(" Borrow Amount must be filled out");
                return false;
                }   
        if (paymentTerms == "" ) {
                    alert(" Payment terms must be filled out");
                    return false;
                    }             
    localStorage.setItem("loanData", JSON.stringify((loanObject))); //Here We are storing the user given data to Local Storage
  
    if (true) {
      window.location.href = "./approval.html";
    }
    else
      alert("Missing Information")
  }
  
  let interest, payment, profit, loanInfo;
  getLoanData = () => {
    loanInfo = JSON.parse(localStorage.getItem("loanData"));// Here we are fetching the data from local storage to object//
    if (loanInfo) {
      document.getElementById("cName").innerHTML = loanInfo.companyName;
      document.getElementById("cOwner").innerHTML = loanInfo.companyOwner;
      document.getElementById("email").innerHTML = loanInfo.emailAddress;
      document.getElementById("borrowAmount").innerHTML = loanInfo.borrowAmount;
      document.getElementById("paymentTerms").innerHTML = loanInfo.paymentTerms;
    
      interest = (loanInfo.borrowAmount * loanInfo.paymentTerms) / (12 * 3);
      payment = parseInt(loanInfo.borrowAmount)
        + interest;
      profit = payment - parseInt(loanInfo.borrowAmount);
    
      if (interest) {
        document.getElementById("interest").innerHTML = interest.toFixed(2);
        document.getElementById("payment").innerHTML = payment.toFixed(2);
        document.getElementById("profit").innerHTML = profit.toFixed(2);
      }
    }
  }
  
  let decision;
  storeDecision = () => {
    decision = document.getElementById("decision").value;
  }
  
  storeAllLoanData = () => {
    let updateLoadObj = {
      ...loanInfo,
      interest: interest.toFixed(2),
      payment: payment.toFixed(2),
      profit: profit.toFixed(2),
      decision: decision
    }
  
    localStorage.setItem("loanData", JSON.stringify((updateLoadObj)));// HERE WE ARE STORING THR DATA FROM APPROVAL PAGE TO lOCAL STORAGE//
    if (decision === "Accept") {
      alert(" Your information has been saved");
      document.getElementById("decision").disabled = true;
      document.getElementById("submitbutton").disabled = true;
    } else if (decision === "Reject") {
      message = "Your Application is Rejected";
      alert(" Your information has been saved");
      document.getElementById("decision").disabled = true;
      document.getElementById("submitbutton").disabled = true;
    } else if (decision === "moreInfo") {
      alert(" Your information has been saved");  
      document.getElementById("decision").disabled = true;
      document.getElementById("submitbutton").disabled = true;
    }
  
  
  }
  