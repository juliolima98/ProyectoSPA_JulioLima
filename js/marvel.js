	//Funcion para obtener algunos de los personajes de marvel

  const marvel = {
  		render:()=>{
  			const urlAPI ='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e63aa0d7e6f42bdea5d249bea68474d1&hash=8512dde0b16a29e7fe7c75889f5cb469';

  			const container=document.querySelector('#marvel-row');
  			var contentHTML='';
  			fetch(urlAPI)
  			.then(res=>res.json())
  			.then((json)=>{
  				for(var hero of json.data.results){
  					var urlHero = hero.urls[0].url;
  					contentHTML+=`
  					<div class="col-md-4">
         			<a href="${urlHero}" target="_blank">
         			<img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
         			</a>
                  <div class="table-responsive">          
                  <table class="table">
                <thead>
                 <tr>
                <th>Nombre</th>
                <th>Comics</th>
                 <th>Series</th>
                 <th>Historias</th>
                 </tr>
                </thead>
               <tbody>
               <tr>
               <td>${hero.name}</td>
               <td>${hero.comics.available}</td>
               <td>${hero.series.available}</td>
               <td>${hero.stories.available}</td>
              </tbody>
               </table>
             </div>
         		</div>`;
  				}
  				container.innerHTML=contentHTML;
      	})
    	}
  	};
          marvel.render();