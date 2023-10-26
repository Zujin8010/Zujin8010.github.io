const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.user-review');
let activeTab = null;

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Hide all tab contents
    tabContents.forEach(content => {
      content.style.display = 'none';
    });

    // Deactivate previous active tab button
    if (activeTab) {
      activeTab.classList.remove('active');
    }

    // Show the corresponding tab content and activate the button
    const target = button.getAttribute('data-target');
    const targetContent = document.getElementById(target);
    if (targetContent) {
      targetContent.style.display = 'block';
      button.classList.add('active');
      activeTab = button;
    }
  });
});


