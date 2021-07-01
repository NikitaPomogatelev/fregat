import "just-validate/dist/js/just-validate";
import Inputmask from "inputmask";

const validate = () => {
    const selectors = document.querySelectorAll('input[type="tel"]');

    selectors.forEach((selector) => {
        let im = new Inputmask("+7 (999) 999-9999");
        im.mask(selector);
    });

    let validateForms = function (
        selector,
        rules,
        messages,
        successModal,
        yaGoal
    ) {
        new window.JustValidate(selector, {
            rules: rules,
            messages: messages,
            // colorWrong: colorValue,
            submitHandler: function (form) {
                console.log(form);

                if (form.classList.contains("cart-modal__form")) {
                    let xhr = new XMLHttpRequest();

                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                console.log("Отправлено");
                            }
                        }
                    };

                    xhr.open("POST", "mail.php", true);
                    xhr.send(productsFormData);

                    form.reset();
                } else {
                    let formData = new FormData(form);

                    let xhr = new XMLHttpRequest();

                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                console.log("Отправлено");
                            }
                        }
                    };

                    xhr.open("POST", "mail.php", true);
                    xhr.send(formData);

                    form.reset();
                }
            },
        });
    };

    validateForms(
        ".modal__form", {
            name: {
                required: true
            },
            phone: {
                required: true
            },
            checkbox: {
                required: true
            },
        }, {
            name: {
                required: "Вы должны ввести имя"
            },
            phone: {
                required: "Вы должны ввести телефон"
            },
            checkbox: {
                required: "Ознакомтесь с условиями передачи данных"
            },
        },
        ".thanks-popup"
    );
    validateForms(
        ".quiz__form", {
            name: {
                required: true
            },
            phone: {
                required: true
            },
            countPeople: {
                required: true
            },

        }, {
            name: {
                required: "Вы должны ввести имя"
            },
            phone: {
                required: "Вы должны ввести телефон"
            },
            countPeople: {
                required: "Введите количество людей"
            },

        },
        ".thanks-popup"
    );
};

export default validate;