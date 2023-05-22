function calculateSingleTax() {
  var income = parseFloat(document.getElementById("single-income").value);
  var taxAmount = calculateFederalTaxSingle(income);
  document.getElementById("single-taxAmount").textContent = "Federal Tax Amount: $" + taxAmount.toFixed(2);
}

function calculateJointTax() {
  var income = parseFloat(document.getElementById("joint-income").value);
  var taxAmount = calculateFederalTaxJoint(income);
  document.getElementById("joint-taxAmount").textContent = "Federal Tax Amount: $" + taxAmount.toFixed(2);
}

function calculateSeparateTax() {
  var income = parseFloat(document.getElementById("separate-income").value);
  var taxAmount = calculateFederalTaxSeparate(income);
  document.getElementById("separate-taxAmount").textContent = "Federal Tax Amount: $" + taxAmount.toFixed(2);
}

function calculateHouseholdTax() {
  var income = parseFloat(document.getElementById("household-income").value);
  var taxAmount = calculateFederalTaxHousehold(income);
  document.getElementById("household-taxAmount").textContent = "Federal Tax Amount: $" + taxAmount.toFixed(2);
}

function calculateFederalTaxSingle(income) {
  if (income <= 11000) {
    return income * 0.1;
  } else if (income <= 44725) {
    return 1100 + (income - 11000) * 0.12;
  } else if (income <= 95375) {
    return 5125 + (income - 44725) * 0.22;
  } else if (income <= 182100) {
    return 16290 + (income - 95375) * 0.24;
  } else if (income <= 231250) {
    return 37104 + (income - 182100) * 0.32;
  } else if (income <= 578125) {
    return 52832 + (income - 231250) * 0.35;
  } else {
    return 174238.25 + (income - 578125) * 0.37;
  }
}

function calculateFederalTaxJoint(income) {
  if (income <= 22000) {
    return income * 0.1;
  } else if (income <= 89450) {
    return 2200 + (income - 22000) * 0.12;
  } else if (income <= 190750) {
    return 10294 + (income - 89450) * 0.22;
  } else if (income <= 364200) {
    return 32580 + (income - 190750) * 0.24;
  } else if (income <= 462500) {
    return 74208 + (income - 364200) * 0.32;
  } else if (income <= 693750) {
    return 105664 + (income - 462500) * 0.35;
  } else {
    return 186601.5 + (income - 693750) * 0.37;
  }
}

function calculateFederalTaxSeparate(income) {
  if (income <= 11000) {
    return income * 0.1;
  } else if (income <= 44725) {
    return 1100 + (income - 11000) * 0.12;
  } else if (income <= 95375) {
    return 5125 + (income - 44725) * 0.22;
  } else if (income <= 182100) {
    return 16290 + (income - 95375) * 0.24;
  } else if (income <= 231250) {
    return 37104 + (income - 182100) * 0.32;
  } else if (income <= 346875) {
    return 52832 + (income - 231250) * 0.35;
  } else {
    return 93300.75 + (income - 346875) * 0.37;
  }
}

function calculateFederalTaxHousehold(income) {
  if (income <= 15700) {
    return income * 0.1;
  } else if (income <= 59850) {
    return 1570 + (income - 15700) * 0.12;
  } else if (income <= 95350) {
    return 6868 + (income - 59850) * 0.22;
  } else if (income <= 182100) {
    return 14678 + (income - 95350) * 0.24;
  } else if (income <= 231250) {
    return 35498 + (income - 182100) * 0.32;
  } else if (income <= 578100) {
    return 51226 + (income - 231250) * 0.35;
  } else {
    return 172623.5 + (income - 578100) * 0.37;
  }
}