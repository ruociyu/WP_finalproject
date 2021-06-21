import $ from 'jquery';
import { useState } from 'react'

const Searchmore = (props) => {

    
    const [tags, setState] = useState("")

    const handleChange = (e) => {
        
        setState(e.target.value)
    }
    const clearState = () => setState("")
  
    const handleSubmit = (e) => {
      e.preventDefault()
       console.log(tags)

       var dataUrl = "https://api.flickr.com/services/feeds/photos\_public.gne?tags=" + tags +"&tagmode=any&format=json&per_page=400&jsoncallback=?";
       var data = $.getJSON(dataUrl);
   
       data.done( function( msg ){
           $.each(msg.items, function(i,item){
               $("#contain").html();
               $("#contain").append($("<img/>").attr("src",item.media.m));
           });
       });
       data.fail( function( msg ){
           console.log(msg);
           $("#contain").html("error!");
       });

      clearState()
    }

    function isSearch(){
        console.log("test")
        $('#contain').empty()
    }

    return(
        <div class="contain bg-dark">
            <div>
            <br></br>
                <form onSubmit={handleSubmit} class="row justify-content-center align-items-center text-center">
                
                    <h2 ><mark>Ş€ΔŘĆĦ ΔŇ¥ŦĦƗŇǤ ¥ØỮ ŴΔŇŦ ŦØ ҜŇØŴ ƗŦŞ ŁØØҜŞ</mark></h2>
                    
                    <input type="text" 
                        id="ser"
                        name="ser"
                        onChange={handleChange}
                        value={tags}
                        class="col-2"
                    />
                    <button type="submit" class="btn btn-outline-light col-1 btn-sm" onClick={isSearch}>Search</button>
                    
                <br></br>
                <br></br>
                </form>
            </div>
            <div id="contain" class="bg-dark"></div>

        </div>
    );
}

export default Searchmore;