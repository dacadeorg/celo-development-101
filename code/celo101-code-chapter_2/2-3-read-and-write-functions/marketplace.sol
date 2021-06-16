// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Marketplace {
    
    string internal product;
    
    function writeProduct(string memory _product) public {
        product = _product;
    }
    
    function readProduct() public view returns (string memory) {
        return product;
    }
}