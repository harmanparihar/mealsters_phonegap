$(function(){



  $(".test").swipe( {
  						//Generic swipe handler for all directions
  						swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
  							console("You swiped " + direction );
  						},
  						//Default is 75px, set to 0 for demo so any distance triggers swipe
  					   threshold:0
  					});



    let max=20;
    let count=Math.floor(Math.random() * max) + 1;
    $('.next').click(function(evt) {
        console.log("Button was clicked");
        if(count!= max){
            count++;
        }
        else{
            count=1;
        }
        let current = count;
        let prev = count-1;
        if(prev< 1){
            prev=max;
        }
        let next = count+1;
        if(next> max){
            next=1;
        }
        food_ref.on('child_added', function(data) {
            const key = data.key;
            const obj = data.val();
            // console.log(key);
            // console.log(obj);

            if(key==prev) {
                let path = obj.img_path;
                let ing = obj.ingredients.split(',');
                console.log(ing);
                $('.img_space_prev').attr("src", path);
                $('.name_prev').html(obj.name);
                $('.fouringredients_prev').html('');
                let count1=0;
                for (let item of ing) {
                    count1++;
                    if(count1<4){
                    $('.fouringredients_prev').append(`<a href="#">${item}</a>`);}
                }
              }
            if(key==current) {
                let path = obj.img_path;
                let ing = obj.ingredients.split(',');
                $('.img_space').attr("src", path);
                $('.fouringredients').html('');
                $('.completeingredients').html('');
                let count1=0;
                for (let item of ing) {
                    count1++;
                    if(count1<4){
                    $('.fouringredients').append(`<a href="#">${item}</a>`);}
                    $('.completeingredients').append(`<a href="#">${item}</a>`);
                }
                $('.name').html(obj.name);
                $('.price').html(obj.price);
                $('.res_name').html(obj.res_name);
                $('.res_tel').attr("href", `tel:${obj.res_tel}`);
                $('.res_website').attr("href", obj.website);
                let add = obj.res_address.split(',');
                $('.res_address_text').html('');
                for (let item of add) {
                    $('.res_address_text').append(`<span>${item}</span>`);
                }
            }
              if(key==next) {
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $('.img_space_next').attr("src", path);
                  $('.name_next').html(obj.name);
                  $('.fouringredients_next').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $('.fouringredients_next').append(`<a href="#">${item}</a>`);}
                  }
                }
        });
    });
    $('.prev').click(function(evt) {
        console.log("Button was clicked");
        if(count!= 2){
            count--;
        }
        else{
            count=max;
        }
        let current = count;
        let prev = count-1;
        if(prev< 1){
            prev=max;
        }
        let next = count+1;
        if(next> max){
            next=1;
        }
        food_ref.on('child_added', function(data) {
            const key = data.key;
            const obj = data.val();
            console.log(key);
            console.log(obj);
            if(key==prev) {
                let path = obj.img_path;
                let ing = obj.ingredients.split(',');
                console.log(ing);
                $('.img_space_prev').attr("src", path);
                $('.name_prev').html(obj.name);
                $('.fouringredients_prev').html('');
                let count1=0;
                for (let item of ing) {
                    count1++;
                    if(count1<4){
                    $('.fouringredients_prev').append(`<a href="#">${item}</a>`);}
                }
              }
            if(key==current) {
                let path = obj.img_path;
                let ing = obj.ingredients.split(',');
                $('.img_space').attr("src", path);
                $('.fouringredients').html('');
                $('.completeingredients').html('');
                let count1=0;
                for (let item of ing) {
                    count1++;
                    if(count1<4){
                    $('.fouringredients').append(`<a href="#">${item}</a>`);}
                    $('.completeingredients').append(`<a href="#">${item}</a>`);
                }
                $('price').html(obj.price);
                $('.name').html(obj.name);
                $('.res_name').html(obj.res_name);
                $('.res_tel').attr("href", `tel:${obj.res_tel}`);
                $('.res_website').attr("href", obj.website);
                let add = obj.res_address.split(',');
                $('.res_address_text').html('');
                for (let item of add) {
                    $('.res_address_text').append(`<span>${item}</span>`);
                }
            }
              if(key==next) {
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $('.img_space_next').attr("src", path);
                  $('.name_next').html(obj.name);
                  $('.fouringredients_next').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $('.fouringredients_next').append(`<a href="#">${item}</a>`);}
                  }
                }

        });
    });
    console.log("outside the block");
    const food_ref= firebase.database().ref('/meal');
    console.log(food_ref);
    food_ref.on('child_added', function(data) {
        const key = data.key;
        const obj = data.val();
        console.log(key);
        console.log(obj);
        let current = count;
        let prev = count-1;
        if(prev< 1){
            prev=max;
        }
        let next = count+1;
        if(next> max){
            next=1;
        }
        if(key==prev) {
            let path = obj.img_path;
            let ing = obj.ingredients.split(',');
            $('.img_space_prev').attr("src", path);
            $('.name_prev').html(obj.name);
            $('.fouringredients_prev').html('');
            let count1=0;
            for (let item of ing) {
                count1++;
                if(count1<4){
                $('.fouringredients_prev').append(`<a href="#">${item}</a>`);}
            }
          }
        if(key==current) {
            let path = obj.img_path;
            let ing = obj.ingredients.split(',');
            $('.img_space').attr("src", path);
            $('.fouringredients').html('');
            $('.completeingredients').html('');
            let count1=0;
            for (let item of ing) {
                count1++;
                if(count1<4){
                $('.fouringredients').append(`<a href="#">${item}</a>`);
                }
                $('.completeingredients').append(`<a href="#">${item}</a>`);
            }
            $('.price').html(obj.price);
            $('.name').html(obj.name);
            $('.res_name').html(obj.res_name);
            $('.res_tel').attr("href", `tel:${obj.res_tel}`);
            $('.res_website').attr("href", obj.website);
            let add = obj.res_address.split(',');
            $('.res_address_text').html('');
            for (let item of add) {
                $('.res_address_text').append(`<p>${item}</p>`);
            }
        }

          if(key==next) {
              let path = obj.img_path;
              let ing = obj.ingredients.split(',');
              $('.img_space_next').attr("src", path);
              $('.name_next').html(obj.name);
              $('.fouringredients_next').html('');
              let count1=0;
              for (let item of ing) {
                  count1++;
                  if(count1<4){
                  $('.fouringredients_next').append(`<a href="#">${item}</a>`);}
              }
            }

    });



});
