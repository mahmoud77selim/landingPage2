

/*
// Build the navigation menu using DOM methods getElementById, innerHTML, querySelectorAll, insertAdjacentHTML, forEach
// Add the functionality to scroll to sections using data-nav Object
//configure prematures and attributes of list Item to receive the data from html section tag
// create variable navBar =  select unorganized list navigation list by id from html stracure 
// create faction menu Item to contain list item
// clear navBar Contents to avoid duplication on execution
// select all sections tags from html stracure
// insert the created li to ul befor end as last item
// looping to fill the ul with il as per the html stracure 
*/

const navBar = document.getElementById('navbar__list')
let i;

const menuItem = () => { 
navBar.innerHTML = ""; 
document.querySelectorAll("section") .forEach((section) => {
const listItem = `<li><a href="#${section.id} "data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
  navBar.insertAdjacentHTML("beforeend", listItem); 
  });};
for (i = 0; i < 5; i++) menuItem(); 

/* // Other method to build navBar
// function navBar() {
// for (let i=0; i < i; i++){
// navBar.innerHTML = ""; 
// document.querySelectorAll('section') .forEach((section) => {
// const createListItem = document.createElement('li');
// const listItem = `<a href="#${section.id} "data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`;
// createListItem.appendChild(listItem);
// navBar.appendChild(createListItem);
//     });};
// navBar();
*/

/* // add new section
***************************************************************************************************************************************
// add new sections using DOM methods getElementById, addEventListener, querySelector, insertAdjacentHTML
// create variable addSec = select botton by id from html stracure
// listen to user interaction if bottom got pressed then create new section with the specifications passed through cntnt variable and control the section number by reuse the variable i which was created in the loop to fill navbar and alrady contains the value of the section count
// select the main tag by the query selector insert the created section to the main tag befor end as last item
// excute the menu Item function 
*/

const addSec = document.getElementById("add-sec");
addSec.addEventListener("click", () => { 
  const cntnt = `<section id="section${i++}" data-nav="Section ${i}"><div class="landing__container"> <h2>Section ${i}</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p></div></section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", cntnt); 
  menuItem(); 
});

/* // Go to the top of the page
***************************************************************************************************************************************
// go top botton using DOM methods getElementById, addEventListener, scrollTo
// create variable goTop = select botton by id from html stracure
// listen to user interaction if bottom got pressed scroll to top
*/

const goTop = document.getElementById("go-top"); 
goTop.addEventListener("click", () => { document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});

/* // highlight active section
**************************************************************************************************************************************
// highlight active section and menu link with using DOM methods onscroll, querySelector, forEach, getBoundingClientRect, add, remove

*/

window.onscroll = function () {
  document.querySelectorAll("section").forEach( function (actv) {
    let actvLnk = navBar.querySelector(`[data-nav=${actv.id}]`);

    if (
      actv.getBoundingClientRect().top >= -134 &&
      actv.getBoundingClientRect().top <= 450
    ) {
      actv.classList.add("your-active-class");
      actvLnk.classList.add("active-link");
    } else {
      actv.classList.remove("your-active-class");
      actvLnk.classList.remove("active-link");
    }
  });
};

/* // hide header and show if scroll
*/

let scrl;
const hdr = document.querySelector(".page__header");
document.onscroll = () => { hdr.style.display = "block";
 scrl = setTimeout(() =>  {  hdr.style.display = "none";
  }, 7000);
};