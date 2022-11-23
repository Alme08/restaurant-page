export const displayContact = (content)=>{
    content.innerHTML= `
    <div class="contact">
            <nav class="nav">
                <a href="#">NO<br><span>RI</span></a>
                <ul>
                    <li><button id="home">Home</button></li>
                    <li><button id="menu">Menu</button></li>
                    <li><button id="contact">Contact</button></li>
                    <li><button id="about">About us</button></li>
                </ul>
            </nav>
            <div>
                <h1>Say <span>hello!</span></h1>
                <form action="">
                    <div>
                        <input type="text" placeholder="First Name">
                        <input type="text" placeholder="Last Name">
                    </div>
    
                    <input type="email" placeholder="E-mail">
                    <div>
                        <textarea name="" id="" cols="0" rows="0" placeholder="How we can help you?"></textarea>

                    </div>
                </form>
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
    `
}