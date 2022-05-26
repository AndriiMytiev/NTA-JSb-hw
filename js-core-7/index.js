const form = document.querySelector("#program-request");
const requests = [];

form.addEventListener("input", (event)=>{
    if (event.target.id === 'email'){
        checkValue(event.target, '^[A-z]+@([A-z][-A-z]+.)+[A-z]{2,4}$');
    };
});

function checkValue(input, pattern){
    const regex = new RegExp(pattern);
    let check = input.value.match(regex);
    if(!check){
        input.style.border = '3px ridge red';
    } else input.style.border = '3px ridge';
};

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const request = {
        name: event.target.elements.name.value,
        phone: event.target.elements.phone.value,
        address: event.target.elements.address.value,
        email: event.target.elements.email.value,
        serviceType: event.target.elements.serviceType.value,
        date: event.target.elements.date.value,
        comment: event.target.elements.comment.value,
    };
    if(!request.name || !request.phone || !request.address || !request.email || 
        !request.serviceType || !request.date){
          alert("Please fill in the required fields");  
    } else {
        console.log('request:', request);
        requests.push(request);
        localStorage.setItem("requests", JSON.stringify(requests));
    };
    return request;
});
