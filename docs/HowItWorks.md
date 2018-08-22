

### Step 1: Create your project directory
First, create a directory for your project. Download the <a href="#configFile">config file</a> in Step 2 - it is named `apimarket_config.json`. Put it into your project directory. This file stores your encrypted wallet information and the address to connect to the ORE blockchain. 

---

### Step 2: Install our client library
Inside the project directory, run the npm install command for the API.market client library.

```
npm install --save @apimarket/apimarket
```

---

### Step 3: Create index.js file
Next, create a file named `index.js` and copy the following into that file:

```javascript
const { ApiMarketClient } = require('@apimarket/apimarket')
const config = require("./apimarket_config.json");

const run = async () => {
    try {
        //Config to apimarketClient and connect to ORE blockchain
        let apimarketClient = new ApiMarketClient(config);
        await apimarketClient.connect()

        //specify the api to call using it's unique name registered on the ORE blockchain
        const apiName = "XXXXXXXXXXXXXX"

        //call api - passing in the data it needs
        const params = {
            "imageurl":"https://storage.googleapis.com/partner-aikon.appspot.com/partner-hadron-transferLearning-v1-deepspace.jpg"
            }
        const response = await apimarketClient.fetch(apiName, params)
        console.log(JSON.stringify(response, null, 2))

    } 
    catch(error) {
        console.error(error)
    }
}

run()
```

---

### Step 4: Insert wallet password
Insert your `walletPassword` in the <a href="#configFile">config file</a>. Use the same password you used to create the wallet on API.market.

> **IMPORTANT: We don't have your wallet's unencrypted private key and we never store your wallet password.**

An example configuration file looks like:
```json
{
    "walletPassword": "PUT_YOUR_WALLET_PASSWORD_HERE",
    "accountName": "sjvch...",
    "accountPrivateKeyEncrypted": "U2Fsd...",
    "publicKey": "EOS74...",
    "verifier": "https://verifier....com",
    "verifierAccountName": "verifier.ore"
}
```

---

### Step 5: Run the code
Run the code using NodeJS.
```
node index.js
```
> **IMPORTANT: You need to have Node 7.0 or higher installed on your machine. Here is a post on how to <a href="https://www.codementor.io/mercurial/how-to-install-node-js-on-macos-sierra-mphz41ekk" target="_blank">install Node using NVM on a Mac</a>**

If everything works as expected, you should see the results from the API written to the console.
