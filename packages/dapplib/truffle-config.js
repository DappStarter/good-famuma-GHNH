require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'guess kiwi suit food gravity repeat stick promote coral light army gesture'; 
let testAccounts = [
"0xfe5aea6daf5162d773c76806307b91d71e420c51bce41499e907ac4b78dc6385",
"0x2ff9326de8d7224e1d2b845878bb078d46cfa9f161679e0e48ea8785404f4a25",
"0xceba13ce6ac5350a16ec270d08ff968b282aad8590bec2c4daaaaa6ee6f190c6",
"0x5683a1578e477702f835bf80dde6cc8e6213c7b526cfc89011032c7190b7a2c2",
"0x6b7c1f254fe461974a42e21c17c56c8fc8d07fdd692e947edadddd6106c06276",
"0x4dc00d1841b160ed111507e4b63dcef487720a3a4e5b57bf41ee6dbcce0d15f9",
"0xba217801fca8cfdf516e95438c8429e555ae3d973906dd02979d62803c032599",
"0x6ebbfbb7df020b839f659a145cb83e6c9a3e8a15bb04cdbdc71f5148d4c69dd2",
"0x814ed339c6135a73ee73da21fb53346447dc6bd8910fb6ac149ac0d0bb129c01",
"0xb1822407abb10f3d7c8ec505b1dad5f4471e349f83eec39b521b75bd53e9500e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


