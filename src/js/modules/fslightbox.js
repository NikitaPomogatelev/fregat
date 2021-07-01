import 'fslightbox';



const gallery = () => {
    
    const galleryBtn = document.querySelector('.gallery__btn');

    galleryBtn.addEventListener('click', () => {
        fsLightboxInstances['gallery'].open(0);
    })


}

export default gallery;