const navLinks = document.querySelectorAll('.navbar .nav-link');
navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active')
    })
})



function closePopup(){
    document.getElementById('cardPopup').classList.add('d-none');
}

const contactButton = document.querySelectorAll('.contact-btn');

contactButton.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault();

        const card = btn.closest('.card');
        const cardId = card.id;
        const name = card.querySelector('.card-title').textContent;
        const role = card.querySelector('.card-text').textContent;
        const imgSrc = card.querySelector('img').src;

        let contact = "";
        if(cardId == "member1"){
            contact = "ph: +123 456 789 <br> email: WalterWhite@example.com";
        }else if(cardId == "member2"){
            contact = "ph: +987 654 321 <br> email: SarahJohn@example.com";
        }else if(cardId == "member3"){
            contact = "ph: +456 321 789 <br> email: WilliamAnderson@example.com";
        }

        document.getElementById('popup-img').src = imgSrc;
        document.getElementById('popup-name').textContent = name;
        document.getElementById('popup-role').textContent = role;
        document.getElementById('popup-contact').innerHTML = contact;

        document.querySelector('#cardPopup').classList.remove('d-none');
    })
})