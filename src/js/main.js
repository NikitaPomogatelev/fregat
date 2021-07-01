import heroSlider from './modules/heroSlider';
import placingSlider from './modules/placingSlider';
import datePicker from './modules/datePicker';
import customSelect from './modules/customSelect';
import gallery from './modules/fslightbox';
import feedbackSlider from './modules/feedbackSlider';
import breadcrumbsFocus from './modules/breadcrumbsFocus';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    modal();
    heroSlider();
    placingSlider();
    datePicker();
    customSelect();
    gallery();
    feedbackSlider();
    breadcrumbsFocus();
})