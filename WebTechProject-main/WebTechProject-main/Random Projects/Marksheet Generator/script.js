function generateMarksheet() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
  
    let marks = [
      parseInt(document.getElementById("sub1").value || 0),
      parseInt(document.getElementById("sub2").value || 0),
      parseInt(document.getElementById("sub3").value || 0),
      parseInt(document.getElementById("sub4").value || 0),
      parseInt(document.getElementById("sub5").value || 0),
    ];
  
    let total = marks.reduce((a, b) => a + b, 0);
    let percentage = (total / 500 * 100).toFixed(2);
  
    let pass = marks.every(mark => mark >= 33);
    let status = pass ? "Pass" : "Fail";
  
    document.getElementById("rname").textContent = name;
    document.getElementById("rroll").textContent = roll;
    document.getElementById("rtotal").textContent = total;
    document.getElementById("rpercent").textContent = percentage;
    document.getElementById("rstatus").textContent = status;
    document.getElementById("rstatus").className = pass ? "pass" : "fail";
  
    document.getElementById("resultBox").style.display = "block";
  }
  