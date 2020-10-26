export default Vue.component("post", {
  props: ["title"],
  template: `
    <div class="box-shadow-title" style="text-align:inherit">
        <h1 style="text-align: center;"> <strong>{{title}}</strong></h1>
        <slot></slot>
    </div>  
    `,
});
