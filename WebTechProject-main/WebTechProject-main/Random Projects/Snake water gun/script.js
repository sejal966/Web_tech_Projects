function playGame(userInput) {
    const youDict = { 's': 1, 'w': -1, 'g': 0 };
    const reverseDict = { "1": "Snake", "-1": "Water", "0": "Gun" };
  
    if (!youDict.hasOwnProperty(userInput)) {
      document.getElementById("result").innerHTML = "❌ Invalid input!";
      return;
    }
  
    const you = youDict[userInput];
    const computerOptions = [1, -1, 0];
    const computer = computerOptions[Math.floor(Math.random() * 3)];
  
    let resultText = `You chose <strong>${reverseDict[String(you)]}</strong>. 
    Computer chose <strong>${reverseDict[String(computer)]}</strong>.<br>`;
    let outcome = "";
  
    if (you === computer) {
      outcome = "⚖️ It's a Draw!";
    } else {
      if (computer === -1 && you === 1) outcome = "🎉 You Won!";
      else if (computer === 1 && you === -1) outcome = "😢 You Lose!";
      else if (computer === 1 && you === 0) outcome = "🎉 You Won!";
      else if (computer === 0 && you === 1) outcome = "😢 You Lose!";
      else if (computer === 0 && you === -1) outcome = "🎉 You Won!";
      else if (computer === -1 && you === 0) outcome = "😢 You Lose!";
      else outcome = "⚠️ Something went wrong.";
    }
  
    document.getElementById("result").innerHTML = resultText + `<strong>${outcome}</strong>`;
  
    // Joke section
    const jokes = [
      "Why do programmers prefer dark mode? Because light attracts bugs!",
      "Debugging: Removing the needles from the haystack.",
      "Why did the developer go broke? Because he used up all his cache!",
      "I told my computer I needed a break, and it said 'No problem, I’ll go to sleep!'",
      "There are 10 types of people in the world: those who understand binary and those who don’t."
    ];
  
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("joke").innerHTML = `<em>😂 Joke: ${randomJoke}</em>`;
  }
  