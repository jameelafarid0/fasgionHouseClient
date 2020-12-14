import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/LogoMakr-8HUQ3T.png'
import './NavBar.css';
import CartIcon from '../../../images/shopping-cart-solid.svg';
import close from '../../../images/times-solid.svg';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div className="margin-left">
                        <a href="/home">
                        <img width="140px" src={logo} alt="logo" />
                        </a>
                        
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav items">
                            <li class="nav-item">
                                <a class="nav-link"  href="/mens">Men</a>
                            </li>
                            <li class="nav-item items2">
                                <a class="nav-link" href="/womens">Women</a>
                            </li>
                            <li class="nav-item items2">
<<<<<<< HEAD
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li class="nav-item items2">
                                <Link className="nav-link" to='/addProduct'>Journal</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav items ml-auto custom_nav">
                            <li className="nav-item">
                                <span>0</span>
                                <Link to='/cart'>
                                    <img src={CartIcon} alt="Fashion House"/>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to='/login'>
                                    <button className="btn btn-success">Login</button>
                                </Link>
=======
                                <a class="nav-link" href="goods">Goods</a>
                            </li>
                            <li class="nav-item items2">
                                <a class="nav-link" href="/books">Books</a>
>>>>>>> 6f7d7ee36fef685cf09de950cf29b5681af1ea27
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;