import { refresh } from "../SetRefresher/index";

window.addEventListener('popstate', () => window.location.reload());

function redirect(path: string): void {
  if (window.location.pathname !== path) {
    window.history.pushState(null, '', path);
    refresh();
  }
}

export { redirect };
