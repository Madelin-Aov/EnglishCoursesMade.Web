export default Vue.component("side-bar", {
  template: `
        <ul class="nav flex-column float-left w-100" style="background-color: none">
            <li class="nav-item my-2 w-100">
                <a class="nav-link btn btn-dark btn-md btn-block" href="#">Tenses</a>
            </li>
            <li class="nav-item my-2 w-100">
                <a class="nav-link btn btn-dark btn-md btn-block" href="#">Speaking</a>
            </li>
            <li class="nav-item my-2 w-100">
                <a class="nav-link btn btn-dark btn-md btn-block" href="#">Writing</a>
            </li>
            <li class="nav-item my-2 w-100">
                <a class="nav-link btn btn-dark btn-md btn-block" href="#">Reading</a>
            </li>
        </ul>
`,
});
