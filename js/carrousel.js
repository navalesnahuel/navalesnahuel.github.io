// Sample portfolio data (you would fetch this from your backend)
var portfolioData = [
    { imageUrl: 'images/projects/elt.png', name: 'Data Pipeline ELT', redirectUrl: 'https://github.com/navalesnahuel/ELT-Pipeline-Bedsheets' },
    { imageUrl: 'images/projects/DataPipeline.png', name: 'Data Pipeline', redirectUrl: 'https://medium.com/@navalesnahuel/pipeline-project-for-you-building-a-crypto-data-pipeline-4c7652cd2eba' },
    { imageUrl: 'images/projects/MITRON BANK.png', name: 'Mitron Bank',  redirectUrl: 'https://medium.com/@navalesnahuel/mitron-bank-data-analysis-5b02f2dcc9e0' },
    { imageUrl: 'images/projects/AZURE.png', name: 'Azure Pipeline', redirectUrl: 'https://medium.com/@navalesnahuel/olympic-data-engineering-and-analysis-using-azure-services-fdd0f4a33433' },
    { imageUrl: 'images/projects/Amazon.png', name: 'Amazon Analysis',  redirectUrl: 'https://medium.com/@navalesnahuel/amazon-sales-report-analysis-8abccb8cba46' },
    { imageUrl: 'images/projects/EXCEL.png', name: 'Data Transformation', redirectUrl: 'https://github.com/navalesnahuel/reformulate-data' },
    { imageUrl: 'images/projects/realstate.png', name: 'Real State',  redirectUrl: 'https://medium.com/@navalesnahuel/property-data-scraping-cleaning-analysis-and-visualization-using-python-sql-and-power-bi-cec4a29c08f0' },
    { imageUrl: 'images/projects/Ecommerce.png', name: 'E-Commerce', redirectUrl: 'https://medium.com/@navalesnahuel/commerce-analysis-2048621c3417' },
    { imageUrl: 'images/projects/datacleaning.png', name: 'Data Cleaning',  redirectUrl: 'https://medium.com/@navalesnahuel/mastering-data-cleaning-unveiling-insights-from-consumption-datasets-d8fc1b9ab006' },
    { imageUrl: 'images/projects/spotifyanalysis.png', name: 'Spotify Analysis',  redirectUrl: 'https://medium.com/@navalesnahuel/unveiling-insights-from-spotify-data-a-data-cleaning-and-exploratory-analysisdata-cleaning-and-eda-62514f4b44d5' },
    { imageUrl: 'images/projects/shopping trends.png', name: 'Shopping Trends',  redirectUrl: 'https://medium.com/@navalesnahuel/unveiling-shopping-trends-a-data-analysis-perspective-9479b8746d01' },
    { imageUrl: 'images/projects/ibm.png', name: 'IBM-HR',  redirectUrl: 'https://medium.com/@navalesnahuel/unveiling-insights-from-ibm-hr-data-exploring-job-satisfaction-income-and-attrition-091ed4c42641' },
    // Add more portfolio items here
];

// Function to generate HTML for portfolio items
function generatePortfolioItems() {
    var portfolioHTML = '';
  
    portfolioData.forEach(function(item) {
        portfolioHTML += `
            <div class="portfolio-item">
                <a href="${item.redirectUrl}" class="portfolio-image">
                    <img src="${item.imageUrl}" alt="${item.name}">
                    <div class="portfolio-overlay">
                        <h3 class="portfolio-title">${item.name}</h3>
                    </div>
                </a>
            </div>
        `;
    });
  
    return portfolioHTML;
}

// Add portfolio items to the carousel
$('.portfolio-carousel').html(generatePortfolioItems());

// Initialize Slick Carousel and assign it to a variable
var portfolioSlider = $('.portfolio-carousel').slick({
    slidesToShow: 5, // Show one slide at a time
    slidesToScroll: 4, // Scroll one slide at a time
    dots: true, // Enable dots navigation
    // Use afterChange event to update dot opacity
    afterChange: function (currentSlide) {
        $('.slick-dots li button').css('opacity', 0.5); // Reset opacity for all dots
        $('.slick-dots li button:eq(' + currentSlide + ')').css('opacity', 1); // Set opacity for active dot
    },
    responsive: [
        {
            breakpoint: 768, // Breakpoint for mobile devices
            settings: {
                slidesToShow: 1 // Show one slide at a time on mobile
            }
        }
    ]
});
