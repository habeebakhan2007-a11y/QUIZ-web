document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  let score = 0;

  // Check answers
  if (document.querySelector('input[name="q1"]:checked')?.value === "Java Virtual Machine") score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "class") score++;
  if (document.querySelector('input[name="q3"]:checked')?.value === "main()") score++;
  if (document.querySelector('input[name="q4"]:checked')?.value === "==") score++;
  if (document.querySelector('input[name="q5"]:checked')?.value === "double") score++;

  // Show result
  document.getElementById("result").innerHTML = 
    `<h3>You scored ${score} out of 5!</h3>`;
});
