const displayMenu = (content) => {
  const container = content;
  container.innerHTML = `
    <div class="menu-container">
            <nav class="nav">
                <a href="#">NO<br><span>RI</span></a>
                <ul>
                    <li><button id="home">Home</button></li>
                    <li><button id="menu">Menu</button></li>
                    <li><button id="contact">Contact</button></li>
                    <li><button id="about">About us</button></li>
                </ul>
            </nav>
            <div class="menu">
                <h1>MENU</h1>
                <div class="card">
                    <h2>BOWLS</h2>
                    <div>
                        <h3>Takoyaki - $12</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <h3>Kinoko </br> bibimbap - $15</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, alias?</p>
                    </div>
                    <i class="fa-brands fa-gitkraken"></i>
                </div>
                <h2><i class="fa-solid fa-xmark"></i><i class="fa-solid fa-xmark"></i><i class="fa-solid fa-xmark"></i><i class="fa-solid fa-xmark"></i><i class="fa-solid fa-xmark"></i><i class="fa-solid fa-xmark"></i></h2>
                <div class="card">
                    <h2>DISHES</h2>
                    <div>
                        <h3>Salmon </br> Tataki - $20</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <h3>Karahage - $10</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, alias?</p>
                    </div>
                    <i class="fa-solid fa-fish-fins"></i>
                </div>
                <h2>DRINKS <i class="fa-solid fa-xmark"></i><i class="fa-solid fa-xmark"></i><i class="fa-solid fa-xmark"></i><i class="fa-solid fa-xmark"></i><i class="fa-solid fa-xmark"></i></h2>
                <div class="drinks">
                    <h3>beers</h3>
                    <ul>
                        <li><span>Lorem, ipsum dolor - $6</span></li>
                        <li><span>Lorem, ipsum - $6</span></li>
                        <hr>
                        <li>Lorem, ipsum dolor - <span>$4</span></li>
                        <li>Lorem, ipsum dolor - <span>$4</span></li>
                        <li>Lorem, ipsum dolor - <span>$4</span></li>
                        <li>Lorem, ipsum dolor - <span>$4</span></li>
                        <li>Lorem, ipsum dolor - <span>$4</span></li>
                    </ul>
                    <h3>wine</h3>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, veritatis suscipit - <span>$20</span>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, veritatis suscipit - <span>$20</span>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, veritatis suscipit - <span>$20</span>
                        </p>

                    </div>
                </div>
            </div>
            <footer>
                <ul>
                    <li><button id="home">Home</button></li>
                    <li><button id="menu">Menu</button></li>
                    <li><button id="contact">Contact us</button></li>
                </ul>
                <div>
                    <hr>
                </div>
            </footer>
        </div>
    `;
};
export default displayMenu;
