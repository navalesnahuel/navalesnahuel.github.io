// Sample portfolio data (you would fetch this from your backend)
var portfolioData = [
    { imageUrl: 'images/projects/AZURE.png', name: 'Project 1', category: 'Category A' },
    { imageUrl: 'images/projects/MITRON BANK.png', name: 'Project 2', category: 'Category B' },
    { imageUrl: 'images/projects/Building in the modern era.png', name: 'Project 3', category: 'Category C' },
    { imageUrl: 'images/projects/AZURE.png', name: 'Project 4', category: 'Category D' },
    { imageUrl: 'images/projects/AZURE.png', name: 'Project 5', category: 'Category E' },
    { imageUrl: 'images/projects/AZURE.png', name: 'Project 6', category: 'Category F' },
    { imageUrl: 'images/projects/AZURE.png', name: 'Project 7', category: 'Category G' },
    { imageUrl: 'images/projects/AZURE.png', name: 'Project 8', category: 'Category H' },
    { imageUrl: 'images/projects/AZURE.png', name: 'Project 9', category: 'Category I' },
    { imageUrl: 'images/projects/AZURE.png', name: 'Project 10', category: 'Category J' },
    { imageUrl: 'images/projects/AZURE.png', name: 'Project 11', category: 'Category K' },
    { imageUrl: 'images/projects/AZURE.png', name: 'Project 12', category: 'Category L' },
    // Add more portfolio items here
];

// Function to generate HTML for portfolio items
function generatePortfolioItems() {
    var portfolioHTML = '';
  
    portfolioData.forEach(function(item) {
        portfolioHTML += `
            <div class="portfolio-item">
                <a href="${item.imageUrl}" class="portfolio-image">
                    <img src="${item.imageUrl}" alt="${item.name}">
                    <div class="portfolio-overlay">
                        <h3 class="portfolio-title">${item.name}</h3>
                        <p class="portfolio-category">${item.category}</p>
                    </div>
                </a>
            </div>
        `;
    });
  
    return portfolioHTML;
}

// Add portfolio items to the carousel
$('.portfolio-carousel').html(generatePortfolioItems());

// Initialize Slick Carousel
$('.portfolio-carousel').slick({
    slidesToShow: 6, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll per swipe
    dots: true, // Show navigation dots
    responsive: [
        {
            breakpoint: 768, // Breakpoint for mobile devices
            settings: {
                slidesToShow: 1 // Show one slide at a time on mobile
            }
        }
    ]
});