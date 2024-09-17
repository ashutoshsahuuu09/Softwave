// Mock data for agents (until real backend integration)
const agents = [
    { name: 'Prince Raj', city: 'Ranchi', specialty: 'Residential Sales' },
    { name: 'Aryan Mishra', city: 'Lucknow', specialty: 'Commercial Properties' },
    { name: 'Ashutosh Sahu', city: 'Angul', specialty: 'Property Management' },
    { name: 'Ankit Prakash', city: 'Tata Nagar', specialty: 'Luxury Estates' }
  ];
  
  // Function to search and display agents
  function findAgent() {
    const searchQuery = document.getElementById('searchAgent').value.toLowerCase();
    const results = agents.filter(agent => 
      agent.name.toLowerCase().includes(searchQuery) || agent.city.toLowerCase().includes(searchQuery)
    );
  
    const agentResultsDiv = document.getElementById('agentResults');
    agentResultsDiv.innerHTML = ''; // Clear previous results
  
    if (results.length > 0) {
      results.forEach(agent => {
        const agentItem = `
          <div class="agent-item">
            <h3>${agent.name}</h3>
            <p>City: ${agent.city}</p>
            <p>Specialty: ${agent.specialty}</p>
          </div>
        `;
        agentResultsDiv.innerHTML += agentItem;
      });
    } else {
      agentResultsDiv.innerHTML = '<p>No agents found.</p>';
    }
  }
  
  // Function to show more property transaction information
  function showMore() {
    const moreInfoDiv = document.getElementById('moreInfo');
    moreInfoDiv.style.display = (moreInfoDiv.style.display === 'none') ? 'block' : 'none';
  }
  