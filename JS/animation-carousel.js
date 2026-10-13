(() => {
  const clips = [
    { title: "Deadline - An Opera (thesis film)", type: "vimeo", src: "https://player.vimeo.com/video/452419199?h=da30bb65d2" }, 
    { title: "Chicken Getting a Midnight Snack", src: "/WORK/anp/ANI_01.mp4" },
    { title: "Hand Accepting Applause", src: "/WORK/anp/ANI_02.mp4" },
    { title: "Dog Scene", src: "/WORK/anp/ani03.mp4" },
    { title: "Desert Mayhem Overdrive Scene", src: "/WORK/anp/ANI_04.mp4" },
    { title: "Weight Scene", src: "/WORK/anp/ANI_05.mp4" },
    { title: "Hand Lost Scene", src: "/WORK/anp/ANI_06.mp4" },
    { title: "Boss Dialogue Test", src: "/WORK/anp/ANI_07.mp4" },
    { title: "Deadline - An Opera (thesis film)", type: "vimeo", src: "https://player.vimeo.com/video/452419199?h=da30bb65d2" },
    { title: "Duet - Group Film", type: "vimeo", src: "https://player.vimeo.com/video/699854136?h=c93b7359ef" }
  ];

  function initializeAnimationCarousels(root = document) {
    root.querySelectorAll("[data-animation-carousel]").forEach(carousel => {
      if (carousel.dataset.carouselInitialized === "true") {
        return;
      }

      const video = carousel.querySelector("video");
      const source = video?.querySelector("source");
      const embed = carousel.querySelector("[data-clip-embed]");
      const title = carousel.querySelector("[data-clip-title]");
      const count = carousel.querySelector("[data-clip-count]");
      const previous = carousel.querySelector("[data-clip-previous]");
      const next = carousel.querySelector("[data-clip-next]");

      if (!video || !source || !embed || !title || !count || !previous || !next) {
        return;
      }

      const initialIndex = clips.findIndex(clip => clip.src === source.getAttribute("src"));
      let activeIndex = initialIndex < 0 ? 0 : initialIndex;
      carousel.dataset.carouselInitialized = "true";

      function showClip(index) {
        activeIndex = (index + clips.length) % clips.length;
        const clip = clips[activeIndex];
        title.textContent = clip.title;
        count.textContent = `${activeIndex + 1} / ${clips.length}`;

        if (clip.type === "vimeo") {
          video.pause();
          video.hidden = true;
          source.removeAttribute("src");
          video.load();
          embed.title = clip.title;
          embed.hidden = false;
          embed.src = clip.src;
          return;
        }

        embed.hidden = true;
        embed.removeAttribute("src");
        video.hidden = false;
        if (source.getAttribute("src") !== clip.src) {
          video.pause();
          source.src = clip.src;
          video.load();
        }
      }

      previous.addEventListener("click", () => showClip(activeIndex - 1));
      next.addEventListener("click", () => showClip(activeIndex + 1));
      showClip(activeIndex);
    });
  }

  window.initializeAnimationCarousels = initializeAnimationCarousels;
  initializeAnimationCarousels();
})();