const breadcrumbsFocus = () => {
  const breadcrumbLink = document.querySelectorAll('.breadcrumb-menu__link')
  if (breadcrumbLink) {
      breadcrumbLink.forEach(link => {
          link.addEventListener('focus', () => {
              link.closest('.nav__item-menu').style.cssText = `
                      overflow: visible;
                      opacity: 1;
                      height: auto;
                  `;   
          })
          link.addEventListener('blur', () => {
              link.closest('.nav__item-menu').style.cssText = '';
          })
      });   
  }
}

export default breadcrumbsFocus;