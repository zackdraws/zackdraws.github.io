export default class Lightbox {
    static activate() {
	document.body.insertAdjacentHTML("beforeend", `
         <div class="lightbox" id="lightbox">
<button type="button" class="lightbox__close">
&times;
</button>
<div class="lightbox__content">
This is the main content.
</div>
</div>
</div>
`);
	const lightbox = document.querySelector("#lightbox");
	const btnClose = lightbox.querySelector(".lightbox__close");
	const content = lightbox.querySelector(".lightbox__content");
	const closeLightbox = () => {
	    lightbox.style.display = "none";
	    content.innerHTML = "";
	};
	btnClose.addEventListener("click", () => {
	    closeLightbox();
	});
    }
}
