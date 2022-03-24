var array = [["Jhon Martinez0", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue tellus. Curabitur elit tortor, gravida nec vestibulum ut, sollicitudin ac erat. Fusce fermentum libero ut magna facilisis, eu congue orci posuere. Phasellus sed lobortis lorem, at porttitor lorem. Proin at lectus risus. Curabitur et sagittis arcu. Duis hendrerit at sapien quis tempus. Pellentesque eget commodo erat. Donec eget enim massa. Nulla aliquet tempus mauris, at sollicitudin elit pellentesque ut. Aliquam sagittis sagittis dolor, ut placerat mauris dignissim et. Cras elementum lacinia dignissim. Duis non bibendum lacus. Sed in est vitae turpis volutpat fermentum. Duis at dui id nisl rutrum malesuada at vel diam."],
["Jhon Martinez1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue tellus. Curabitur elit tortor, gravida nec vestibulum ut, sollicitudin ac erat. Fusce fermentum libero ut magna facilisis, eu congue orci posuere. Phasellus sed lobortis lorem, at porttitor lorem. Proin at lectus risus. Curabitur et sagittis arcu. Duis hendrerit at sapien quis tempus. Pellentesque eget commodo erat. Donec eget enim massa. Nulla aliquet tempus mauris, at sollicitudin elit pellentesque ut. Aliquam sagittis sagittis dolor, ut placerat mauris dignissim et. Cras elementum lacinia dignissim. Duis non bibendum lacus. Sed in est vitae turpis volutpat fermentum. Duis at dui id nisl rutrum malesuada at vel diam."],
["Jhon Martinez2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue tellus. Curabitur elit tortor, gravida nec vestibulum ut, sollicitudin ac erat. Fusce fermentum libero ut magna facilisis, eu congue orci posuere. Phasellus sed lobortis lorem, at porttitor lorem. Proin at lectus risus. Curabitur et sagittis arcu. Duis hendrerit at sapien quis tempus. Pellentesque eget commodo erat. Donec eget enim massa. Nulla aliquet tempus mauris, at sollicitudin elit pellentesque ut. Aliquam sagittis sagittis dolor, ut placerat mauris dignissim et. Cras elementum lacinia dignissim. Duis non bibendum lacus. Sed in est vitae turpis volutpat fermentum. Duis at dui id nisl rutrum malesuada at vel diam."],
["Jhon Martinez3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue tellus. Curabitur elit tortor, gravida nec vestibulum ut, sollicitudin ac erat. Fusce fermentum libero ut magna facilisis, eu congue orci posuere. Phasellus sed lobortis lorem, at porttitor lorem. Proin at lectus risus. Curabitur et sagittis arcu. Duis hendrerit at sapien quis tempus. Pellentesque eget commodo erat. Donec eget enim massa. Nulla aliquet tempus mauris, at sollicitudin elit pellentesque ut. Aliquam sagittis sagittis dolor, ut placerat mauris dignissim et. Cras elementum lacinia dignissim. Duis non bibendum lacus. Sed in est vitae turpis volutpat fermentum. Duis at dui id nisl rutrum malesuada at vel diam."],
["Jhon Martinez4", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue tellus. Curabitur elit tortor, gravida nec vestibulum ut, sollicitudin ac erat. Fusce fermentum libero ut magna facilisis, eu congue orci posuere. Phasellus sed lobortis lorem, at porttitor lorem. Proin at lectus risus. Curabitur et sagittis arcu. Duis hendrerit at sapien quis tempus. Pellentesque eget commodo erat. Donec eget enim massa. Nulla aliquet tempus mauris, at sollicitudin elit pellentesque ut. Aliquam sagittis sagittis dolor, ut placerat mauris dignissim et. Cras elementum lacinia dignissim. Duis non bibendum lacus. Sed in est vitae turpis volutpat fermentum. Duis at dui id nisl rutrum malesuada at vel diam."],
["Jhon Martinez5", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue tellus. Curabitur elit tortor, gravida nec vestibulum ut, sollicitudin ac erat. Fusce fermentum libero ut magna facilisis, eu congue orci posuere. Phasellus sed lobortis lorem, at porttitor lorem. Proin at lectus risus. Curabitur et sagittis arcu. Duis hendrerit at sapien quis tempus. Pellentesque eget commodo erat. Donec eget enim massa. Nulla aliquet tempus mauris, at sollicitudin elit pellentesque ut. Aliquam sagittis sagittis dolor, ut placerat mauris dignissim et. Cras elementum lacinia dignissim. Duis non bibendum lacus. Sed in est vitae turpis volutpat fermentum. Duis at dui id nisl rutrum malesuada at vel diam."]
            ];

// creacion de atributo

//const elementTitle = document.createElement('h3');
//elementTitle.setAttribute('id', 'tituloPyme');
//elementTitle.textContent = array[0];

//const elementData = document.createElement('div');
//elementData.setAttribute('id', 'descripcionPyme');
//elementData.textContent = array[1];

//const container = document.getElementById('container');
//container.append(elementTitle);
//container.append(elementData);

console.log('perro' + array.length);





function createArticles(){
    for(var i = 0; i < 6; i++){
        const container = document.createElement('article');
        container.setAttribute('id', 'container');
    
        const elementTitle = document.createElement('h3');
        elementTitle.setAttribute('id', 'tituloPyme');
        elementTitle.setAttribute('class', 'title');
        elementTitle.textContent = array[i][0];
    
        const elementData = document.createElement('div');
        elementData.setAttribute('id', 'descripcionPyme');
        elementData.textContent = array[i][1];
    
        container.append(elementTitle);
        container.append(elementData);
    
        const bodyAux = document.getElementById('bodyAux');
        bodyAux.append(container);
        console.log(container);
        //console.log(elementTitle.parentNode.classList.remove("filter"));
    }   
}


createArticles();

const d = document;

function searchFilters(input, selector){
    d.addEventListener("keyup", e => {
        if(e.target.matches(input)){
            console.log(e.target.value);

            if(e.target.value == "Escape") e.target.value = "";

            d.querySelectorAll(selector).forEach(el => (el.textContent.toLowerCase()
            .includes(e.target.value))
            ? el.parentNode.classList.remove("filter")
            :el.parentNode.classList.add("filter")
            );
        }
    })

}

searchFilters(".card-filter", ".title");