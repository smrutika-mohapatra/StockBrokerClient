// Supported stocks
const supportedStocks = ['GOOG', 'TSLA', 'AMZN', 'META', 'NVDA'];

// User data
let userData = {};

// Login functionality
document.getElementById('login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        userData.email = email;
        document.getElementById('login').hidden = true;
        document.getElementById('dashboard').hidden = false;
        renderStockList();
    }
});

// Subscribe functionality
document.getElementById('subscribe-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const stockTicker = document.getElementById('stock-ticker').value.toUpperCase();
    if (supportedStocks.includes(stockTicker)) {
        userData.subscribedStocks = userData.subscribedStocks || [];
        if (!userData.subscribedStocks.includes(stockTicker)) {
            userData.subscribedStocks.push(stockTicker);
            renderStockList();
        }
    }
});

// Render stock list
function renderStockList() {
    const stockList = document.getElementById('stock-list');
    stockList.innerHTML = '';
    userData.subscribedStocks.forEach((stock) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${stock} - <span>$${getRandomPrice()}</span>`;
        stockList.appendChild(listItem);
    });
}

// Update stock prices every second
setInterval(() => {
    const stockList = document.getElementById('stock-list');
    Array.prototype.forEach.call(stockList.children, (listItem) => {
        listItem.querySelector('span').textContent = `$${getRandomPrice()}`;
    });
}, 1000);

// Random price generator
function getRandomPrice() {
    return Math.floor(Math.random() * 1000);
}