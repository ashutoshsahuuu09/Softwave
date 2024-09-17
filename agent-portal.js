// Mock data for the agent's dashboard overview (this can be fetched from an API)
const dashboardData = {
    propertiesListed: 5,
    transactionsCompleted: 3,
    totalRevenue: 'Rs 11,500,000'
  };
  
  // Mock data for property listings (this can be fetched from an API)
  const propertyListings = [
    { name: '2-Bedroom Apartment', location: 'Ranchi', price: 'Rs 1,850,000' },
    { name: '3-Bedroom House', location: 'Lucknow', price: 'RS 1,250,000' }
  ];
  
  // Mock data for transaction history (this can be fetched from an API)
  const transactionHistory = [
    { property: '2-Bedroom Apartment', buyer: 'Prince Raj', price: 'RS 1,850,000', status: 'Completed' },
    { property: '3-Bedroom House', buyer: 'Aryan Mishra', price: 'RS 1,250,000', status: 'Pending' }
  ];
  
  // Function to load the dashboard data
  function loadDashboardData() {
    const dashboardElement = document.getElementById('dashboardData');
    dashboardElement.innerHTML = `
      <p><strong>Properties Listed:</strong> ${dashboardData.propertiesListed}</p>
      <p><strong>Transactions Completed:</strong> ${dashboardData.transactionsCompleted}</p>
      <p><strong>Total Revenue:</strong> ${dashboardData.totalRevenue}</p>
    `;
  }
  
  // Function to load property listings
  function loadPropertyListings() {
    const propertyListingsElement = document.getElementById('propertyListings');
    let listingsContent = '<ul>';
    
    propertyListings.forEach(listing => {
      listingsContent += `<li><strong>${listing.name}</strong> - ${listing.location} - ${listing.price}</li>`;
    });
    
    listingsContent += '</ul>';
    propertyListingsElement.innerHTML = listingsContent;
  }
  
  // Function to load transaction history
  function loadTransactionHistory() {
    const transactionHistoryElement = document.getElementById('transactionHistory');
    let transactionsContent = '<ul>';
    
    transactionHistory.forEach(transaction => {
      transactionsContent += `<li><strong>${transaction.property}</strong> - Buyer: ${transaction.buyer} - Price: ${transaction.price} - Status: ${transaction.status}</li>`;
    });
    
    transactionsContent += '</ul>';
    transactionHistoryElement.innerHTML = transactionsContent;
  }
  
  // Function to add a new property listing (mock implementation)
  function addPropertyListing() {
    alert('Feature to add a new property listing will be implemented soon.');
  }
  
  // Load data on page load
  window.onload = function() {
    loadDashboardData();
    loadPropertyListings();
    loadTransactionHistory();
  };
  