import $ from "jquery";
import ScrollMagic from "scrollmagic";
import Responsive from "../modules/_Responsive";

$(function () {
  if ($("#POST_DETAIL_SIDE").length) {
    // Respoinsive モジュールでやりとりするための変数は外に出す
    let sidebarController;
    let sidebarScene;

    new Responsive({
      breakpoint: 1024,
      sp() {
        if (sidebarController) {
          sidebarController.destroy(true);
          sidebarController = null;
          sidebarScene.destroy(true);
          sidebarScene = null;
        }
      },
      pc() {
        sidebarController = new ScrollMagic.Controller();
        sidebarScene = new ScrollMagic.Scene({
          triggerElement: ".postDetail-wrapper",
          triggerHook: "onLeave",
          offset: -75,
          duration:
            $(".postDetail-contents").outerHeight() -
            $(".postDetail-side").outerHeight(),
        })
          .setPin("#POST_DETAIL_SIDE")
          .addTo(sidebarController);
      },
    });
  }
});
