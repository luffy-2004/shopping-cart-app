import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <nav class="navbar bg-body-tertiary">
                        <div class="container">
                            <a class="navbar-brand" href="#">
                                <img src="https://cdn.logojoy.com/wp-content/uploads/20230629132639/current-logo-600x338.png" alt="Bootstrap" width="30" height="24" />
                            </a>
                        </div>
                    </nav>
                    <a class="navbar-brand" href="#">Demo-Store</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Add Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">Search Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">View Products</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar