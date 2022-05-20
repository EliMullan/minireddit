import React from 'react';
import {Search} from './Search';
import { SideMenu } from './SideMenu';


export function Header() {
    return (
        <header>
            <h1>This is the Header</h1>
            <section>
                <Search />
            </section>
        </header>
    )
}