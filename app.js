const wrapper=document.querySelector(".slider-wrapper")
const menuitems=document.querySelectorAll(".menuItem")

const products=[
    {
        id:1,
        title: "AIR FORCE",
        price: 119,
        description:"Timeless classic with durable leather, Air-Sole cushioning, and a rubber outsole for traction. Perfect for everyday wear, blending style and comfort seamlessly.",
        colors: [
            {
                code: "black",
                img: "images/air.png",
                buttoncolor:"white",
            },
            {
                code: "darkblue",
                img: "images/air2.png",
                buttoncolor:"darkblue"
            },
        ],
    },
    {
        id:2,
        title: "AIR JORDAN",
        price: 129,
        description:"Iconic sneaker with premium materials, superior cushioning, and the legendary Jumpman logo. Ideal for both sports and casual wear, combining heritage and innovation.",
        colors: [
            {
                code: "lightgray",
                img: "images/jordan.png",
                buttoncolor:"white",
            },
            {
                code: "rgb(12, 213, 12)",
                img: "images/jordan2.png",
                buttoncolor:"rgb(12, 213, 12)"
            },
        ],
    },
    {
        id:3,
        title: "BLAZER",
        price: 199,
        description:"Retro-inspired with a leather upper, classic Swoosh, and high-top silhouette. Offers comfort and support, blending old-school style with modern fashion.",
        colors: [
            {
                code: "white",
                img: "images/blazer.png",
                buttoncolor:"white",
            },
            {
                code: "green",
                img: "images/blazer2.png",
                buttoncolor:"green"
            },
        ],
    },
    {
        id:4,
        title: "CRATER",
        price: 189,
        description:" Eco-friendly sneaker crafted with recycled materials, featuring a speckled outsole and lightweight upper. Stylish and sustainable, offering comfort with a unique design.",
        colors: [
            {
                code: "black",
                img: "images/crater.png",
                buttoncolor:"white"
            },
            {
                code: "rgb(225, 219, 219)",
                img: "images/crater2.png",
                buttoncolor:"rgb(225, 219, 219)"
            },
        ],
    },
    {
        id:5,
        title: "HIPPIE",
        price: 209,
        description:`Sustainable sneaker made from recycled materials with Flyknit technology and Crater foam cushioning. A futuristic design that supports Nike's "Move to Zero" initiative.`,
        colors: [
            {
                code: "gray",
                img: "images/hippie.png",
                buttoncolor:"brown"
                
            },
            {
                code: " rgb(42, 39, 39)",
                img: "images/hippie2.png",
                buttoncolor:"white"
            },
        ],
    },
]

let chosenProduct=products[0]

const currentproductImg=document.querySelector(".product-image")
const currentproductTitle=document.querySelector(".product-title")
const currentproductPrice=document.querySelector(".product-price")
const currentproductDescription=document.querySelector(".product-desc")
const currentproductColors=document.querySelectorAll(".color")
const currentproductSizes=document.querySelectorAll(".size")
const buybutton= document.querySelector(".product-button")
menuitems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        //change the slider image
        wrapper.style.transform=`translateX(${-100*index}vw)`

        //change the current slide
        chosenProduct=products[index]

        //chane the text of current Product
        currentproductTitle.textContent=chosenProduct.title
        currentproductPrice.textContent=`$${chosenProduct.price}`
        currentproductDescription.textContent=chosenProduct.description
        currentproductImg.src=chosenProduct.colors[0].img

        //assigning new colors"
        currentproductColors.forEach((color,index)=>{
            color.style.backgroundColor=chosenProduct.colors[index].code
        })
    })
})

currentproductColors.forEach((color,index)=>{
    color.addEventListener('click',()=>{
        currentproductImg.src=chosenProduct.colors[index].img
        buybutton.style.color=chosenProduct.colors[index].buttoncolor
    })
})

currentproductSizes.forEach((size,index)=>{
    size.addEventListener('click',()=>{
        currentproductSizes.forEach((size)=>{
            size.style.backgroundColor="transparent"
            size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
})


const payment=document.querySelector(".payment")
const close=document.querySelector(".close")

buybutton.addEventListener('click',()=>{
    payment.style.display="flex"
})
close.addEventListener('click',()=>{
    payment.style.display="none"
    })

    document.addEventListener('DOMContentLoaded',
        function () {
            const navLinks = document
                .querySelectorAll('#nav-link');
     
            navLinks.forEach(link => {
                link.addEventListener('click',
                    function () {
                        navLinks.forEach(navlink => navlink
                            .classList.remove('active'));
                        this.classList.add('active');
                    });
            });
        });