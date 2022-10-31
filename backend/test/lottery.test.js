const Lottery = artifacts.require("Lottery");

contract("Lottery", ([accA, accB, accC]) => {
  beforeEach(async () => {
    contract = await Lottery.new();
  });

  it("Verify owner", async () => {
    const ownerAddress = await contract.OWNER();

    assert(ownerAddress === accA, "Need to be equal");
  });

  it("Can get players", async () => {
    const players = await contract.getPlayers();

    assert(!players.length, "Need to be zero");
  });

  it("Can get balance", async () => {
    const contractAddress = contract.address;
    const balance = await web3.eth.getBalance(contractAddress);

    const etherBalance = web3.utils.fromWei(balance, "ether");

    assert(!Number(etherBalance), "Need to be zero");
  });
});
