// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  
    // Get all the filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Add event listeners to each filter button
    filterButtons.forEach(button => {
      button.addEventListener('click', filterCertificates);
    });
  
    // Function to filter the certificates based on category
    function filterCertificates(event) {
      // Get the category to filter by
      const category = event.target.dataset.category;
      
      // Get all the certificate cards
      const allCards = document.querySelectorAll('.card');
      
      allCards.forEach(card => {
        // If category matches or button is for "All", display the card
        if (category === "all" || card.querySelector('p').textContent.includes(category)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
  });  