export default Vue.component("home", {
  template: `
         
       <div class="container mt-5">
            <div class="row">
                <div class="col-8">

                    <div class="box-shadow-title">
                        <h2>NEW TOPICS</h2>
                    </div>
                     <present-simple> </present-simple>
                     <post title="Future times!">
                        <ul>

                        <li class="h2 mt-5 font-weight-bold">When do we use it?
                            <br>
                            <p class="lead font-weight-bold">We use it to talk about predictions <br>
                             For example:                                
                                <br>
                            <ul class="exampleOne" style="">
                                <li class="example h6">Tomorrow it will rain.</li>
                                <li class="example h6">You will be famous in the future.</li>
                            </ul>
                            </p>
                        </li>

                        <li class="titlesQuestion h2 font-weight-bold">How to use it?</li>
                        <p class=" lead font-weight-bold"> The future tense is formed with the  modal verb <strong>"WILL"</strong> and the verb in the infinitive form.
                           <br> <strong>WILL + Infitive</strong>
                           <br>For example:
                            <br>
                        <ul class="exampleTwo">
                            <li class="example h6">I <strong>will get </strong>that job!</li>
                            <li class="example h6">She <strong>will be there</strong> at 10PM.</li>
                           
                        </ul>
                        </p>
                        <li class="titlesQuestion h2 font-weight-bold">Practise</li>
                    </ul>     
                    </post>
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
