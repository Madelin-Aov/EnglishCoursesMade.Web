export default Vue.component("routes", {
  template: `
    <div>  
    <div class="container">
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">EnglishCourses</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
              <a href="#" v-on:click="onClickHome()" 
                    v-bind:class="{active: isActiveHome }"
                    class="nav-item nav-link"> Home 
                    <span class="sr-only">(current)</span>
              </a>
              <a href="#" v-on:click="onClickCourses()" 
              v-bind:class="{active: isActiveCourses}"
              class="nav-item nav-link "
              >Courses</a>
              <a class="nav-item nav-link" href="#">Contact</a>


          </div>
      </div>
  </nav>
  
  
  
  </div>

    <component v-bind:is="route"></component>

    </div>
      `,
  data: function () {
    return {
      route: "home",
      isActiveHome: true,
      isActiveCourses: false,
      onClickHome: function () {
        this.route = "home";
        this.isActiveHome = true;
        this.isActiveCourses = false;
      },
      onClickCourses: function () {
        this.route = "courses";
        this.isActiveCourses = true;
        this.isActiveHome = false;
      },
    };
  },
});
