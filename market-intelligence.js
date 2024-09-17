// Mock data for market intelligence (this can be fetched from an API)
const marketOverview = {
    summary: 'The real estate market is currently experiencing stable growth with an increase in property prices in major cities.',
    keyStats: [
      { city: 'Ranchi', avgPrice: 'Rs 3,850,000', growth: '2.5%' },
      { city: 'Luknow', avgPrice: 'Rs 1,250,000', growth: '3.0%' },
      { city: 'Angul', avgPrice: 'Rs 6,350,000', growth: '1.2%' },
      { city: 'Cuttak', avgPrice: 'Rs 7,600,000', growth: '2.8%' }
    ]
  };
  
  // Function to display market overview data
  function loadMarketOverview() {
    const marketOverviewData = document.getElementById('marketOverviewData');
    let content = `<p>${marketOverview.summary}</p><ul>`;
    
    marketOverview.keyStats.forEach(stat => {
      content += `<li><strong>${stat.city}:</strong> Average Price: ${stat.avgPrice}, Growth: ${stat.growth}</li>`;
    });
    
    content += '</ul>';
    marketOverviewData.innerHTML = content;
  }
  
  // Mock data for price trends (this can be fetched from an API)
  const priceTrends = {
    'new-york': { avgPrice: 'Rs 3,850,000', trend: 'Increasing by 2.5% annually' },
    'san-francisco': { avgPrice: 'Rs 1,250,000', trend: 'Increasing by 3.0% annually' },
    'chicago': { avgPrice: 'Rs 6,350,000', trend: 'Increasing by 1.2% annually' },
    'miami': { avgPrice: 'Rs 7,600,000', trend: 'Increasing by 2.8% annually' }
  };
  
  // Function to load price trends based on selected city
  function loadPriceTrends() {
    const city = document.getElementById('citySelect').value;
    const priceTrendData = document.getElementById('priceTrendData');
    
    if (city && priceTrends[city]) {
      const trend = priceTrends[city];
      priceTrendData.innerHTML = `
        <p><strong>Average Price:</strong> ${trend.avgPrice}</p>
        <p><strong>Trend:</strong> ${trend.trend}</p>
      `;
    } else {
      priceTrendData.innerHTML = '<p>Please select a city to view price trends.</p>';
    }
  }
  
  // Load market overview on page load
  window.onload = loadMarketOverview;
  