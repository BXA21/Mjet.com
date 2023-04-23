// Get all timeline items
const items = document.querySelectorAll('.timeline li');

// Detect when an item comes into view
function handleScroll() {
  items.forEach(item => {
    // Check if the item is in view
    const itemTop = item.getBoundingClientRect().top;
    const itemHeight = item.offsetHeight;
    const screenHeight = window.innerHeight;
    if (itemTop + itemHeight > 0 && itemTop < screenHeight) {
      // Animate the item into view
      item.classList.add('animate');
    } else {
      // Reset the animation if the item is not in view
      item.classList.remove('animate');
    }
  });
}

// Add event listener for scroll events
window.addEventListener('scroll', handleScroll);
