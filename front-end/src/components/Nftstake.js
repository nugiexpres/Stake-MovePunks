import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

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
