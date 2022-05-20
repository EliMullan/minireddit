import React from 'react';
import { useSelector } from 'react-redux';
import { selectListings } from '../features/listings/listingsSlice';
import { Listing } from './Listing';

export function Listings() {
    const listings = useSelector(selectListings);
    return (
        <ul className='main-container'>
         { listings.map(listing =>{
             return (
                 <li className='main-child' key={listing.id} >{listing.name}</li>
             )
         } )}
        </ul>
    )
}