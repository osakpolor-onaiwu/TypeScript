const someElement = document.querySelector('.name') as HTMLInputElement; 
/*notice we change/assert that the element with class name is and HTML input element
if we didn't do that, we can't access the properties of the element lik value, style, etc
*/
console.log(someElement.value)


someElement.addEventListener('blur', (event)=>{
    const target = event.target as HTMLInputElement;
    console.log('event--', target.value)
    /*notice if we don't covert.assert that event.target is and html input element, then we
    can't access the value property of the target*/
})

/*NB: in typescript we need to explicitly define the type of or element, so typescript 
understands the properties of that element*/