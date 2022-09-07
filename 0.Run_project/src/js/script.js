const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
      640: {
        edgePadding: 20,
        items: 1
      },
      767: {
        gutter: 40,
        autoWidth: true,
        items: 1
      },
      931: {
        items: 1,
        autoWidth: true
      },
      800: {
        items: 1,
        gutter: 20
      }
    }
  });
  
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo("prev");
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo("next");
  });
  
  /* Tabs */
  const catalog = document.querySelector(".catalog");
  const tabs = document.querySelectorAll(".catalog__tab");
  const contents = document.querySelectorAll(".catalog__content");
  
  for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', function(){
      for (let tab of tabs){
        tab.classList.remove('catalog__tab_active')
      }
      tabs[i].classList.add("catalog__tab_active");
      
      for (let content of contents){
        content.classList.remove("catalog__content_active");
      }
      contents[i].classList.add("catalog__content_active");
    });
  }
  
  /* Links in tabs */
  let backLink = document.querySelectorAll(".catalog-item__back");
  let moreLink = document.querySelectorAll(".catalog-item__link");
  let lists = document.querySelectorAll(".catalog-item__list") 
  let itemContents = document.querySelectorAll(".catalog-item__content") 
  
  for (let i = 0; i < moreLink.length; i++){
    moreLink[i].addEventListener('click', function(event){
      event.preventDefault();
      event.target.parentElement.classList.remove("catalog-item__content_active");
      lists[i].classList.add("catalog-item__list_active");  
    })
  }
  
  for (let i = 0; i < backLink.length; i++){
    backLink[i].addEventListener('click', function(event){
      event.preventDefault();
      event.target.parentElement.classList.remove("catalog-item__list_active");
      itemContents[i].classList.add("catalog-item__content_active");  
    })
  }
  
  /* Modals */
 let bookingBtn = document.querySelectorAll(".modal_btn");
 let orderBtn = document.querySelectorAll(".button-mini");
 let close = document.querySelectorAll(".modal__close");
 
 let overlay = document.querySelector(".overlay");
 let consultation = document.querySelector("#consultation");
 let order = document.querySelector("#order");
 let thanks = document.querySelector("#thanks");
 
 
 for (let item of close){
    item.addEventListener('click', function(){
      overlay.classList.remove('overlay_active');
      consultation.style.display = 'none';
      order.style.display = 'none';
      thanks.style.display = 'none';
    })
 }
 
 for (let btn of bookingBtn){
    btn.addEventListener('click',  function(event){
      event.preventDefault();
      overlay.classList.add('overlay_active');
      consultation.style.display = 'block';
    })
 }
 /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 надо проработать так чтобы в сабтайтл модального окна ставился текст из карточки */
 
 for (let btn of orderBtn){
  btn.addEventListener('click',  function(event){
    event.preventDefault();
    overlay.classList.add('overlay_active');
    order.style.display = 'block';
  })
}

validation.init(".feed-form");
validation.init(".feed-form_modal");
validation.init(".feed-form_modal-order");