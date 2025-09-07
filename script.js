// Define smoothie recipes
const recipes = [
  {
    name: '🍓 Strawberry Banana Yogurt Smoothie',
    match: ['banana', 'strawberry', 'yogurt']
  },
  {
    name: '🥑 Green Detox Smoothie',
    match: ['spinach', 'avocado', 'banana']
  },
  {
    name: '🫐 Blueberry Banana Smoothie',
    match: ['blueberry', 'banana', 'yogurt']
  },
  {
    name: '🥜 Peanut Butter Banana Smoothie',
    match: ['peanut butter', 'banana']
  }
];

function recommendSmoothie() {
  const selected = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(cb => cb.value);
  const resultDiv = document.getElementById('result');

  // Reset old results
  resultDiv.innerHTML = '';

  if (selected.length === 0) {
    resultDiv.innerText = '⚠️ Please select at least one ingredient.';
    return;
  }

  // Show selected fruits
  const selectedList = selected.join(', ');

  // Find full and partial matches
  const matches = recipes.filter(r => {
    const common = r.match.filter(m => selected.includes(m));
    return common.length >= 2; // At least 2 ingredients match
  });

  // Build recommendation text
  let recommendation = '';
  if (matches.length > 0) {
    recommendation = "<ul>" + matches.map(r => `<li>${r.name}</li>`).join('') + "</ul>";
  } else {
    recommendation = "🍹 Custom Smoothie with your selected fruits!";
  }

  // Final output
  resultDiv.innerHTML = `
    ✅ You selected: <strong>${selectedList}</strong><br><br>
    🥤 Recommended Smoothie(s): ${recommendation}
  `;
}
