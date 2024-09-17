// Initialize the provider for interacting with MetaMask
let provider;

if (window.ethereum) {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  window.ethereum.request({ method: 'eth_requestAccounts' })
    .then((accounts) => {
      console.log("Connected account:", accounts[0]);
    })
    .catch((err) => console.error("User rejected the connection request", err));
} else {
  alert("MetaMask is not installed. Please install MetaMask to continue.");
}

async function sendTransaction() {
  // Get the signer from the provider
  const signer = provider.getSigner();

  // Get the recipient address and amount from the user input
  const recipientAddress = document.getElementById('recipient').value;
  const amountInEth = document.getElementById('amount').value;

  // Basic validation for recipient address and amount
  if (!recipientAddress || !ethers.utils.isAddress(recipientAddress)) {
    document.getElementById('status').textContent = 'Invalid recipient address';
    return;
  }
  
  if (isNaN(amountInEth) || amountInEth <= 0) {
    document.getElementById('status').textContent = 'Invalid amount';
    return;
  }

  try {
    // Show feedback: transaction is being submitted
    document.getElementById('status').textContent = 'Submitting transaction... Please wait.';

    // Convert amount from ETH to Wei and send the transaction
    const tx = await signer.sendTransaction({
      to: recipientAddress,
      value: ethers.utils.parseEther(amountInEth) // Convert ETH to Wei
    });

    // Show feedback: transaction has been submitted
    document.getElementById('status').textContent = `Transaction submitted. Transaction Hash: ${tx.hash}`;

    // Wait for the transaction to be confirmed
    await tx.wait();

    // Show feedback: transaction is confirmed
    document.getElementById('status').textContent = 'Transaction confirmed!';
  } catch (error) {
    // Show error message in case of failure
    document.getElementById('status').textContent = `Transaction failed: ${error.message}`;
  }
}

