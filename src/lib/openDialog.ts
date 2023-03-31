import { createApp, h } from "vue";
import Dialog from "./DialogUi.vue";
export const openDialog = (options) => {
  const {
    title,
    content,
    ok = () => {},
    cancel = () => {},
    closeOnClickOverlay = true,
  } = options;
  const divEl = document.createElement("div");
  document.body.appendChild(divEl);
  const close = () => {
    app.unmount();
    divEl.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (visible: Boolean) => {
            if (visible === false) {
              close();
            }
          },
          ok,
          cancel,
          closeOnClickOverlay,
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(divEl);
};
