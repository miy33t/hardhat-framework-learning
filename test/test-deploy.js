const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", function () {
	let simpleStorageFactory, simpleStorage;
	beforeEach(async function () {
		simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
		simpleStorage = await simpleStorageFactory.deploy();
	});

	it("Should start with a favorite number of 0", async function () {
		const currValue = await simpleStorage.retrieve();
		const expectedValue = "123";
		assert.equal(currValue.toString(), expectedValue);
		expect(currValue.toString()).to.equal(expectedValue);
	});
	it("Should update when we call store", async function () {
		const expectedValue = "8";
		const transactionResponse = await simpleStorage.store("7");
		await transactionResponse.wait(1);
		const currValue = await simpleStorage.retrieve();
		assert.equal(currValue.toString(), expectedValue);
	});
});