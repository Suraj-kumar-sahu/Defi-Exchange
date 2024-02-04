// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0 ;

import "@openzeppelin/token/ERC20/ERC20.sol" ;

contract Exchange is ERC20 {
    address cryptoDevTokenAddress ;

    constructor(address _cryptoDevToken) ERC20("CryptoDev LP Token", "CDLP"){
        require(_cryptoDevToken != address(0),"Address given is a Null address") ;
        cryptoDevTokenAddress = _cryptoDevTokenAddress ;
    }

    function getReserve() public view returns(uint){
        return ERC20(cryptoDevTokenAddress).balanceOf(address(this)) ;
    }
}