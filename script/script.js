(function () {
    const carInspectionCarousel = $('.carInspection-carousel')

    carInspectionCarousel.slick({
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        adaptiveHeight: true,
        // autoplay: true
    });

    $('#btn_1').addClass('active')
    $(document).ready(function () {
        carInspectionCarousel.on('afterChange', function (event, slick, currentSlide, nextSlide) {
            let buttons = $('[data-index]');
            // Проходимся по всем кнопкам и показываем или скрываем их в зависимости от индекса слайда
            buttons.each(function () {
                let button = $(this);
                let index = parseInt(button.attr('data-index'));

                if (index === currentSlide) {
                    button.addClass('active')
                } else {
                    button.removeClass('active');
                }
            });
        });
    })
    $('.reviews-cards-slide').slick({
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
    });

    $('.carIns').click(function (event) {
        event.preventDefault();
        $('.carInspection')[0].scrollIntoView({behavior: "smooth"});
    });

    $('.newServ').click(function (event) {
        event.preventDefault();
        $('.newServices')[0].scrollIntoView({behavior: "smooth"});
    });

    $('.rev').click(function (event) {
        event.preventDefault();
        $('.reviews')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#burger').click(function () {
        $('#header_menu').addClass('open')
    })

    $('#close').click(function () {
        $('#header_menu').removeClass('open')
    })

    document.addEventListener('DOMContentLoaded', function () {
        let inputFields = document.querySelectorAll('.phone-input');
        inputFields.forEach(function (inputField) {
            inputField.addEventListener('focus', function () {
                this.removeAttribute('placeholder'); // Удаляем плейсхолдер при фокусировке
                this.style.background = 'white'
            });
            inputField.addEventListener('blur', function () {
                this.setAttribute('placeholder', "+7 999 999 99 99"); // Восстанавливаем плейсхолдер при расфокусировке
                this.style.background = '#EFEFEF'
            });
        });
    });

    const budget = document.getElementById('budget')
    const carBrand = document.getElementById('car_brand')
    budget.addEventListener('focus', function () {
        this.removeAttribute('placeholder'); // Удаляем плейсхолдер при фокусировке
        this.style.background = 'white'
    });

    budget.addEventListener('blur', function () {
        this.setAttribute('placeholder', "примерный диапазон"); // Восстанавливаем плейсхолдер при расфокусировке
        this.style.background = '#EFEFEF'
    });

    carBrand.addEventListener('focus', function () {
        this.style.background = 'white'
    });

    carBrand.addEventListener('blur', function () {
        this.style.background = '#EFEFEF'
    });

    const button1 = document.getElementById('btn_1')
    const button2 = document.getElementById('btn_2')
    const button3 = document.getElementById('btn_3')
    const button4 = document.getElementById('btn_4')
    const button5 = document.getElementById('btn_5')
    const button6 = document.getElementById('btn_6')

    let titleText = document.getElementById("titleText");
    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");
    let text3 = document.getElementById("text3");
    let text4 = document.getElementById("text4");
    let text5 = document.getElementById("text5");

    button1.addEventListener("click", function () {
        titleText.textContent = "ХОДОВАЯ ЧАСТЬ";
        text1.textContent = "Поднимаем машину в сервисе";
        text2.textContent = "Износ рычагов, сайлентблоков";
        text3.textContent = "Оценка амортизаторов и стоек";
        text4.textContent = "Проверка на люфт и скрытые повреждения ТС";
        text5.textContent = "";
    });

    button2.addEventListener("click", function () {
        titleText.textContent = "Колеса, диски, тормоза";
        text1.textContent = "Осмотр колесных дисков";
        text2.textContent = "Оценка тормозных колодок";
        text3.textContent = "Оценка остаточной величины протектора, равномерность износа";
        text4.textContent = "";
        text5.textContent = "";
    });

    button3.addEventListener("click", function () {
        titleText.textContent = "Компьютерная диагностика";
        text1.textContent = "Подтверждение пробега или его коррекции";
        text2.textContent = "Выявление ошибок систем электроники и их расшифровка";
        text3.textContent = "Оценка работоспособности интеллектуальных систем (парктроник, климат, медиа и т.п.)";
        text4.textContent = "";
        text5.textContent = "";
    });

    button4.addEventListener("click", function () {
        titleText.textContent = "Двигатель  и  коробка  передач";
        text1.textContent = "Проверка всех узлов ДВС";
        text2.textContent = "Поиск подтеков и посторонних шумов";
        text3.textContent = "Проверка уровня технических жидкостей";
        text4.textContent = "Поиск задиров и царапин в цилиндрах при помощи эндоскопа";
        text5.textContent = "Изношенность турбин, замер компрессии, давление наддува";
    });

    button5.addEventListener("click", function () {
        titleText.textContent = "Осмотр  кузова";
        text1.textContent = "Проверка геометрии кузова";
        text2.textContent = "Поиск следов ремонта и ДТП";
        text3.textContent = "Проверка проёмов, дна, крыши";
        text4.textContent = "Проверка толщины ЛКП и выявление незаводских окрасов";
        text5.textContent = "";
    });

    button6.addEventListener("click", function () {
        titleText.textContent = "Салон  автомобиля";
        text1.textContent = "Корректность работы бортового оборудования";
        text2.textContent = "Работоспособность систем подогрева, климат-контроля";
        text3.textContent = "Целостность подушек безопасности";
        text4.textContent = "Использовалось ли в качестве такси";
        text5.textContent = "Отношение собственника к своему автомобилю";
    });

    $(document).on("click", function (e) {
        let popup_form = $('.popup_background')
        if (popup_form.closest(e.target).length) {
            popup_form.hide();
        }
    });

    $(document).on("click", function (e) {
        let close = $('.popup_background-close')
        if (close.has(e.target).length) {
            $('.popup_background').hide();
        }
    });

    const buttonReview = $("#button_review")
    const button_all = $("#button_2, #button_3, #button_4")
    const popupTitle = document.getElementById('popup-buy-title')

    function openPopup1() {
        popupTitle.innerHTML = "быстро Подберем вам классный автомобиль"
        $('.popup_background').show();
    }

    function openPopup2() {
        popupTitle.innerHTML = "помощь ЭКСПЕРТА в покупке автомобиля"
        $('.popup_background, .popup-buy-auto').show();

    }

    button_all.click(function () {
        openPopup2()
    });

    buttonReview.click(function () {
        openPopup1()
    });

    $(document).on("click", function (e) {
        let close = $('.popup_background-close')
        if (close.has(e.target).length) {
            $('.popup_background_search').hide();
        }
    });

    $(document).on("click", function (e) {
        let popup_form = $('.popup_background_search')
        if (popup_form.closest(e.target).length) {
            popup_form.hide();
        }
    });

    $("#button_survey").click(function () {
        $('.popup_background_search, .popup_search_auto').show();
    });

    $(document).on("click", function (e) {
        let close = $('.popup_background-close')
        if (close.has(e.target).length) {
            $('.popup_background_search').hide();
        }
    });

    const arrow_1 = document.querySelectorAll('.image_1');
    const arrow_2 = document.querySelectorAll('.image_2');
    let fade1 = false;

    document.addEventListener('DOMContentLoaded', function () {
        let index1 = 0;
        function fadeNext() {
            if (!fade1) {
                arrow_1[index1].style.opacity = '100';
                index1++
            }
            if (index1 === arrow_1.length) {
                index1 = 0;
                arrow_1.forEach(item => {
                    item.style.opacity = '0';
                })
            }
        }
        setInterval(fadeNext, 200);
    })


    let fade2 = false;
    document.addEventListener('DOMContentLoaded', function () {
        let index2 = arrow_2.length - 1;
        function fadeNext() {
            if (!fade2) {
                arrow_2[index2].style.opacity = '100';
                index2 = (index2 - 1 + arrow_2.length) % arrow_2.length;
            }
            if (index2 === arrow_1.length - 1) {
                arrow_2.forEach(item => {
                    item.style.opacity = '0';
                });
            }
        }
        setInterval(fadeNext, 200);
    });

    const arrow_3 = document.querySelectorAll('.image_3');
    let fade3 = false;

    document.addEventListener('DOMContentLoaded', function () {
        let index3 = 0;
        function fadeNext() {
            if (!fade3) {
                arrow_3[index3].style.opacity = '100';
                index3++
            }
            if (index3 === arrow_3.length) {
                index3 = 0;
                arrow_3.forEach(item => {
                    item.style.opacity = '0';
                })
            }
        }
        setInterval(fadeNext, 200);
    })

    const checkboxes = document.querySelectorAll('.popup_check');

    function handleCheckboxChange() {
        // Создаем массив для хранения выбранных значений
        const selectedValues = [];
        // Проходимся по всем чекбоксам и добавляем выбранные значения в массив
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                selectedValues.push(checkbox.nextElementSibling.textContent.trim());
            }
        });
        // Создаем строку из выбранных значений
        const selectedValuesString = selectedValues.join(', ');
        // Выводим строку в консоль (или можно использовать другой способ вывода на страницу)
        return selectedValuesString;
    }

    function mainCallAddText() {
        const mainAction = $('.main-action')
        const mainAutoText = $('.main-inscription')
        mainAction[0].style.display = "none"
        mainAutoText[0].style.display = "block"
    }

    function popupCallAddText() {
        const popupBuyAutoText = $('.popup-buy-text')
        const popupAction = $('.popup-action')
        popupAction[0].style.display = "none"
        popupBuyAutoText[0].style.display = "block"
    }

    function popupSearchAddText() {
        const popupSearchAutoText = $('.popup-search-auto-text')
        const popupAutoAction = $('.popup-auto-action')
        popupAutoAction[0].style.display = "none"
        popupSearchAutoText[0].style.display = "block"
    }


    $('.phone-input').mask("+7 (999) 999-9999");
    $('.popup-phone-input').mask("+7 (999) 999-9999");
    $('#button_1').click(function (e) {
        e.preventDefault()
        // mainCallAddText()

        let phone = $('#mainInput');
        let hasError = false;
        const loader = $(".loader")
        phone.css('border-color', '#EFEFEF');

        if (!phone.val()) {
            phone.css('border-color', 'red');
            hasError = true;
        }

        // let formData = new FormData();
        // formData.append('phone', phone.val());

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                type: 'post',
                url: 'form_1.php',
                data: '&phone=' + phone.val(),
                // data: formData,
                // processData: false,
                // contentType: false,
                success: () => {
                    mainCallAddText()
                    ym(93580768, 'reachGoal', 'cel1')
                    loader.css('display', 'none')
                },
                error: () => {
                    alert('Возникла непредвиденная ошибка!');
                    loader.css('display', 'none')
                }
            });
        } else {
            alert('Заполните обязательное поле!');
        }
    });


    $('#phone-button-popup').click(function (e) {
        e.preventDefault()
        let phone = $('#phone-input-popup');
        let hasError = false;
        const loader = $(".loader")
        phone.css('border-color', '#EFEFEF');

        if (!phone.val()) {
            phone.css('border-color', 'red');
            hasError = true;
        }

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                type: 'post',
                url: 'form_1.php',
                data: '&phone=' + phone.val(),
                success: () => {
                    ym(93580768, 'reachGoal', 'cel1')
                    popupCallAddText()
                    loader.css('display', 'none')
                },
                error: () => {
                    alert('Возникла непредвиденная ошибка!');
                    loader.css('display', 'none')
                }
            });
        } else {
            alert('Заполните обязательное поле!');
        }
    });


    $("#popup_button_search_auto").click(function (e) {
        e.preventDefault()

        const phoneInputSurvey = $('#phone-input-survey')
        const budgetInput = $('#budget')
        const carBrandInput = $('#car_brand')

        phoneInputSurvey.css('border-color', '#EFEFEF')
        // const popupAutoAction = $('#popup-auto-action')
        let hasError = false;

        if (!phoneInputSurvey.val()) {
            phoneInputSurvey.css('border-color', 'red');
            hasError = true;
        }

        let phone = phoneInputSurvey.val()
        let budget = budgetInput.val()
        let carBrand = carBrandInput.val()

        const loader = $(".loader")
        if (!hasError) {
            loader.css('display', 'flex')
            $.ajax({
                method: "POST",
                url: 'form_2.php',
                data: {budget: budget, carBrand: carBrand, phone: phone, selectedValues: handleCheckboxChange()},
                success: () => {
                    ym(93580768, 'reachGoal', 'cel1')
                    popupSearchAddText()
                    loader.css('display', 'none')
                },
                error: () => {
                    alert('Возникла непредвиденная ошибка!')
                    loader.css('display', 'none')
                }
            })
        } else {
            alert('Заполните обязательное поле!')
        }
    })
})
()

