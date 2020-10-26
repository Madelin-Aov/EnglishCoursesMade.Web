export default Vue.component("courses", {
  template: `
    
    <div class="container mt-5">


        <div class="row">

            <div class="col-8" style="justify-content: center;">
            
                <present-simple></present-simple>
            </div>

            <div class="col-4">
                <div class="row">
  
                    <div class="col"> 
                      <search></search>
                    </div>                 
                </div>   
              
                 <div class="row">
  
                    <div class="col"> 
                       <side-bar></side-bar>
                    </div>                 
                </div>   
            </div>
            
        </div>
        
    </div>
    
    `,
});
