// Mock data for floor plans (this can be fetched from an API)
const floorPlans = [
    {
      name: '2-Bedroom Apartment',
      description: 'A spacious 2-bedroom apartment with a modern kitchen and living room.',
      imageUrl: 'https://example.com/floorplan1.jpg'
    },
    {
      name: '3-Bedroom House',
      description: 'A comfortable 3-bedroom house with a large backyard and garage.',
      imageUrl: 'https://example.com/floorplan2.jpg'
    },
    {
      name: 'Studio Apartment',
      description: 'A compact studio apartment perfect for singles or young professionals.',
      imageUrl: 'https://example.com/floorplan3.jpg'
    }
  ];
  
  // Function to display the floor plans
  function loadFloorPlans() {
    const floorplanContainer = document.getElementById('floorplanContainer');
  
    floorPlans.forEach((plan, index) => {
      const floorplanCard = document.createElement('div');
      floorplanCard.className = 'floorplan-card';
      floorplanCard.innerHTML = `<h3>${plan.name}</h3>`;
      floorplanCard.onclick = () => showFloorPlanDetails(index);
      floorplanContainer.appendChild(floorplanCard);
    });
  }
  
  // Function to show the floor plan details
  function showFloorPlanDetails(index) {
    const plan = floorPlans[index];
    document.getElementById('floorplanDescription').textContent = plan.description;
    document.getElementById('floorplanImage').src = plan.imageUrl;
    document.getElementById('floorplanDetails').style.display = 'block';
  }
  
  // Load floor plans on page load
  window.onload = loadFloorPlans;
  