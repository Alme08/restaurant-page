export const displayHome = (content) =>{
    content.innerHTML = `
    <div class="hero-container">
            <nav class="nav">
                <a href="#">NO<br><span>RI</span></a>
                <ul>
                    <li><button>Home</button></li>
                    <li><button>Menu</button></li>
                    <li><button>Contact</button></li>
                    <li><button>About us</button></li>
                </ul>
            </nav>
            <main>
                <div>
                    <p>ラーメン</p>
                    <h1>A BOWL OF LOVE FROM <span>JAPANESE CUISINE</span> FOR YOU</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas error minima itaque perspiciatis illo rerum incidunt nulla eaque ex, pariatur delectus odio eligendi aperiam adipisci molestiae ab deserunt autem. Animi.</p>
                    <button>Order Now</button>
                    
                </div>
                <img src="assets/Ramen infographics.png" alt="Ramen">
            </main>
            <footer>
                <ul>
                    <li><button>Home</button></li>
                    <li><button>Menu</button></li>
                    <li><button>Contact us</button></li>
                </ul>
                <div>
                    <hr>
                </div>
            </footer>
        </div>
    `
}