import ReactDOM from "react-dom/client";
import LoadingComp from "./Loading";

let container = null;
const loadingClass = "global-loading";
const Loading = {
  open(msg = "正在加载...") {
    const vnode = document.querySelector(`.${loadingClass}`);
    if (vnode) {
      vnode.remove();
    }
    container = document.createElement("div");
    container.className = loadingClass
    ReactDOM.createRoot(container).render(<LoadingComp/>);
    document.body.append(container);
  },
  close() {
    container.remove();
  },
};

export default Loading;
