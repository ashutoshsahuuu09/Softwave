// Check if the browser has an Ethereum provider (i.e. Metamask)
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} else {
    alert('Please install MetaMask to interact with the blockchain.');
}

// Connect to Metamask on button click
document.getElementById('connectWallet').addEventListener('click', async () => {
    if (window.ethereum) {
        try {
            // Request account access if needed
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            console.log('Connected account:', account);

            // Update the button text with the wallet address
            document.getElementById('connectWallet').textContent = `Wallet: ${account}`;
        } catch (error) {
            console.error('User rejected the connection or another error occurred:', error);
        }
    } else {
        console.error('Ethereum object not found');
    }
});

// Interact with a smart contract (optional)
async function interactWithContract() {
    const web3 = new Web3(window.ethereum); // Use Metamask provider
    const contractAddress = '0xYourContractAddress'; // Replace with your smart contract address
    const contractABI = [ /* ABI array here */ ]; // Replace with your contract's ABI

    const myContract = new web3.eth.Contract(contractABI, contractAddress);

    // Example of calling a read-only function from the contract
    const result = await myContract.methods.someFunction().call();
    console.log('Contract result:', result);

    // Example of sending a transaction
    await myContract.methods.someFunction().send({ from: window.ethereum.selectedAddress });
}

