const testimonial_cards = document.getElementById("testimonial_cards")
const form = document.getElementById("testimonial_form")
let testimonial_id = 0

const showTestimonialCards = () => {
    testimonial_cards.style.display = "flex"
    form.style.display = "none"; 
}

const getTestimonialForm = ()=>  {
   testimonial_cards.style.display = "none"
   form.style.display = "block";
}  


const createTestimonialCard = ( testimonial ) => {
    testimonial_holder = document.querySelector("#testimonial_cards")

    testimonial_content = document.createElement("div")
    testimonial_content.className = "testimonial_card_item"

    testimonial_content.innerHTML = `
    <p>${testimonial.testimonial}</p>
    <cite>${testimonial.author}</cite>
    `
    testimonial_holder.appendChild(testimonial_content)
}


const getData = () => {
fetch("http://localhost:3000/testimonials")
.then(
    (data) => data.json()
).then(
    (testimonials) => {
        testimonial_id = testimonials.length
        testimonials.forEach(testimonial => {
            createTestimonialCard(testimonial)
        });
    }
)
}

const initialize = () => {
    getData()
}

initialize()


const handleSubmit = (e) =>{
    e.preventDefault()
    
    id = testimonial_id + 1
    const testimonialObj = {
        "id" : id,
        "testimonial" : e.target.testimonial.value,
        "author" : e.target.author.value
    }

    console.log(testimonialObj)
}