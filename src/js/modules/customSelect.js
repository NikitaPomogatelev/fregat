import Choices from 'choices.js';

const customSelect = () => {
    
    const element = document.querySelectorAll('.quiz-select');
    element.forEach(select => {
        const choices = new Choices(select, {
            searchEnabled: false,
            itemSelectText: ''
            // placeholder: false
        }); 
    })
}

export default customSelect;