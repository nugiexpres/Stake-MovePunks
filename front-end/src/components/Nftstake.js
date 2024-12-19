import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState, useEffect } from 'react';
import "../assets/styles.css";
import image1 from "../assets/img/mint-punk.png";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import axios from "axios"
import { Table } from "react-bootstrap";
import { CircularProgress } from "@mui/material"

import stakingContract from "../artifacts/NFTStakingVault.sol/NFTStakingVault.json";
import nftContract from "../artifacts/KryptoPunks.sol/KryptoPunks.json";
import { stakingContractAddress, nftContractAddress, ownerAddress, networkDeployedTo } from "../utils/contracts-config";
import networksMap from "../utils/networksMap.json";

const MyItems = ({ userNfts, info, loading, stakeItem, unstakeItem }) => {
    return (
        <section className='my-items'>
            {userNfts.length !== 0 ? (
                <>
                    <h2 className="minttitle title text-center">My KryptoPunks</h2>
                    <div className='items container'>
                        {userNfts.map((nft, index) => {
                            return (
                                <div className='item-box' key={index}>
                                    <img src={nft.uri} className="item-img" alt="MovePunks" />
                                    <div className='text-center'>
                                        {info.stakedNftIds.includes(nft.id) ? (
                                            <button 
                                                className="btn btn-info m-3" 
                                                onClick={() => { unstakeItem(nft.id); }}
                                            >
                                                {loading ? <CircularProgress color="inherit" size={18} /> : "UNSTAKE"}
                                            </button>
                                        ) : (
                                            <button 
                                                className="btn btn-info m-3"
                                                onClick={() => { stakeItem(nft.id); }}
                                            >
                                                {loading ? <CircularProgress color="inherit" size={18} /> : "STAKE"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                <p className="text-center">You do not own any KryptoPunks.</p>
            )}
        </section>
    );
};

export default MyItems;
