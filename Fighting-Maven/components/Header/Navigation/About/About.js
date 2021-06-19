//when clicked will open the "about" page

class About extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="about">
                <h2 class="block">Who am I</h2>
                <img src="./assets/me.jpeg" alt="" class="block" id="aboutPhoto">
                <p id="aboutText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Diam donec adipiscing tristique risus nec feugiat. 
                    Lorem ipsum dolor sit amet. Ornare massa eget egestas purus viverra accumsan in. 
                    Risus nullam eget felis eget nunc. Ut morbi tincidunt augue interdum velit. 
                    Maecenas accumsan lacus vel facilisis volutpat est. 
                    Et magnis dis parturient montes nascetur ridiculus mus. 
                    Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. 
                    Duis ultricies lacus sed turpis tincidunt id aliquet. 
                    Tincidunt eget nullam non nisi est. Vestibulum lectus mauris ultrices eros in cursus. 
                    Leo urna molestie at elementum eu facilisis sed. 
                    Fermentum posuere urna nec tincidunt praesent semper. 
                    Enim blandit volutpat maecenas volutpat. Faucibus ornare suspendisse sed nisi lacus. 
                    Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. 
                    Ac turpis egestas sed tempus urna et.
                    Non blandit massa enim nec dui nunc mattis enim. 
                    Neque ornare aenean euismod elementum nisi quis. 
                    Volutpat diam ut venenatis tellus. Pretium lectus quam id leo in vitae turpis. 
                    Nascetur ridiculus mus mauris vitae. Vulputate sapien nec sagittis aliquam 
                    malesuada bibendum arcu vitae. Tempus quam pellentesque nec nam. 
                    Sit amet justo donec enim diam vulputate ut pharetra sit. In est ante in nibh 
                    mauris cursus mattis. Egestas erat imperdiet sed euismod nisi porta lorem mollis.
                    Nisi scelerisque eu ultrices vitae auctor eu augue. Iaculis urna id volutpat lacus 
                    laoreet non curabitur. Ipsum faucibus vitae aliquet nec. In nisl nisi scelerisque
                    eu ultrices vitae. Id aliquet lectus proin nibh nisl condimentum id venenatis a. 
                    Leo vel orci porta non. Vulputate sapien nec sagittis aliquam malesuada bibendum.
                    Id leo in vitae turpis massa sed.
                 </p>
            </div>

        `
    }
}

const aboutPage = document.getElementById('about');
aboutPage.addEventListener("click", (e) => {
    const main = document.querySelector('main');
    main.innerHTML = `<about-me></about-me>`
})




customElements.define('about-me', About)
export default About