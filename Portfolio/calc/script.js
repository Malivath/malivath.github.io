function calculate() {
    const loanAmount = document.getElementById("loanAmount").value;
    const interestRate = document.getElementById("interestRate").value / 100 / 12;
    const loanTerm = document.getElementById("loanTerm").value * 12;
  
    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
  
    document.getElementById("monthlyPayment").textContent = "$" + monthlyPayment.toFixed(2);
  }
  
  function clearForm() {
    document.getElementById("loanAmount").value = "";
    documentgetElementById("interestRate").value = "";
    document.getElementById("loanTerm").value = "";
    document.getElementById("monthlyPayment").textContent = "";
    }