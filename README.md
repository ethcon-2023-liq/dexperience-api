# Dexperience API Server
Developed for Dexperience service in Ethcon 2023 Korea.

Powered by [Nestjs](https://nestjs.com/)

## Description
### ERC-4337
**Polygon Mumbai**
* EntryPoint: 0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789
* PayMaster: 

Optimism Goerli
* EntryPoint: 0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789
* PayMaster:

PayMaster & Bundler are powered by [Biconomy](https://biconomy.webflow.io/)

## Installation

```bash
$ yarn install
```

## Environment Variables
.env
```yaml
ENTRY_POINT_ADDRESS=0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789
BUNDLER_BASE_URI=https://bundler.biconomy.io/api/v2
BUNDLER_API_KEY=#####
MUMBAI_PAYMASTER_URI=#####
OPGOERLI_PAYMASTER_URI=#####
SIGNER_WALLET_PRIVATE_KEY=#####
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Docker

```bash
# build
$ docker build -t dex-api-server .

# run
$ docker run --env-file .env -p 3000:3000 dex-api-server  
```