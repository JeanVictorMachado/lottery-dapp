const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
  beforeEach(async () => {
    contract = await HelloWorld.new();
  });

  it.skip("Need show greetings", async () => {
    const res = await contract.greetings();

    assert(res === "Ola semana solidity!");
  });

  it.skip("The greetings must be 20 characters", async () => {
    const res = await contract.greetings();

    assert(res.length === 20);
  });

  it.skip("The greetings must be string type", async () => {
    const res = await contract.greetings();

    assert(typeof res === "string");
  });
});
