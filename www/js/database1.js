$(function(){
    let max=20;
    let count=Math.floor(Math.random() * max) + 1;
    
// ************************************************************************
// code for navigating the databse records using buttons
// Author:Harmanpreet Kaur
// ************************************************************************
    $('.next').click(function(evt) {
        console.log("Button was clicked");
        if(count!= max){
            count++;
        }
        else{
            count=1;
        }
        food_ref.on('child_added', function(data) {
            const key = data.key;
            const obj = data.val();
            console.log(key);
            console.log(obj);
            let currentindex=$(".slick-current").attr("data-slick-index");
            console.log(currentindex);
            next=count+1;
            if(next>max){
              next=1;
            }
            prev=count-1;
            if(prev < 1){
              prev=max;
            }
            if(key==next) {
              if(currentindex==0){
                const nextindexes=[-2,1,4];
                for(let i of nextindexes){
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}
                  }
                  $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);
                }
              }
              if(currentindex==1){
                const nextindexes=[2,-1,5];
                for(let i of nextindexes){
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}
                  }
                  $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);
                }
              }
              if(currentindex==2){
                const nextindexes=[3,0];
                for(let i of nextindexes){
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

                  }
                  $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);
                }
              }
            }
            if(key==prev) {
              if(currentindex==0){
                const nextindexes=[-1,2,5];
                for(let i of nextindexes){
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

                  }
                  $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);

                }
              }
              if(currentindex==1){
                const nextindexes=[0,3];
                for(let i of nextindexes){
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

                  }
                  $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);

                }
              }
              if(currentindex==2){
                const nextindexes=[-2,1,4];
                for(let i of nextindexes){
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

                  }
                  $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);
                }
              }
            }
            if(key==count) {
                let path = obj.img_path;
                let ing = obj.ingredients.split(',');
                $(".slick-current").children().children().children('.img_space').attr("src", path);
                $(".slick-current").children().children().children('.fouringredients').html('');
                $('.completeingredients').html('');
                let count1=0;
                for (let item of ing) {
                    count1++;
                    if(count1<4){
                    $(".slick-current").children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}
                    $('.completeingredients').append(`<a href="#">${item}</a>`);
                }
                $('.price').html(obj.price);
                $(".slick-current").children().children().children('.name').html(obj.name);
                $('.res_name').html(obj.res_name);
                $('.res_tel').attr("href", `tel:${obj.res_tel}`);
                $('.res_website').attr("href", obj.website);
                let add = obj.res_address.split(',');
                $('.res_address_text').html('');
                for (let item of add) {
                    $('.res_address_text').append(`<p>${item}</p>`);
                }
            }
        });



    });
  // ******************next ends ***********************



  // ******************prev starts ***********************
    $('.prev').click(function(evt) {
        console.log("Button was clicked");
        if(count!= 1){
            count--;
        }
        else{
            count=max;
        }
        food_ref.on('child_added', function(data) {
            const key = data.key;
            const obj = data.val();
            console.log(key);
            console.log(obj);
            let currentindex=$(".slick-current").attr("data-slick-index");
            console.log(currentindex);
            next=count+1;
            if(next>max){
              next=1;
            }
            prev=count-1;
            if(prev < 1){
              prev=max;
            }
            if(key==next) {
              if(currentindex==0){
                const nextindexes=[-2,1,4];
                for(let i of nextindexes){
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

                  }
                  $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);

                }
              }
              if(currentindex==1){
                const nextindexes=[2,-1,5];
                for(let i of nextindexes){
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

                  }
                  $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);

                }
              }
              if(currentindex==2){
                const nextindexes=[3,0];
                for(let i of nextindexes){
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

                  }
                  $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);
                }
              }
            }
            if(key==prev) {

              if(currentindex==0){
                const nextindexes=[-1,2,5];
                for(let i of nextindexes){
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

                  }
                  $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);

                }
              }
              if(currentindex==1){
                const nextindexes=[0,3];
                for(let i of nextindexes){
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

                  }
                  $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);

                }
              }
              if(currentindex==2){
                const nextindexes=[-2,1,4];
                for(let i of nextindexes){
                  let path = obj.img_path;
                  let ing = obj.ingredients.split(',');
                  $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
                  let count1=0;
                  for (let item of ing) {
                      count1++;
                      if(count1<4){
                      $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

                  }
                  $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);
                }
              }
            }
            if(key==count) {
                let path = obj.img_path;
                let ing = obj.ingredients.split(',');
                $(".slick-current").children().children().children('.img_space').attr("src", path);
                $(".slick-current").children().children().children('.fouringredients').html('');
                $('.completeingredients').html('');
                let count1=0;
                for (let item of ing) {
                    count1++;
                    if(count1<4){
                    $(".slick-current").children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}
                    $('.completeingredients').append(`<a href="#">${item}</a>`);
                }
                $('.price').html(obj.price);
                $(".slick-current").children().children().children('.name').html(obj.name);
                $('.res_name').html(obj.res_name);
                $('.res_tel').attr("href", `tel:${obj.res_tel}`);
                $('.res_website').attr("href", obj.website);
                let add = obj.res_address.split(',');
                $('.res_address_text').html('');
                for (let item of add) {
                    $('.res_address_text').append(`<p>${item}</p>`);
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
        let currentindex=$(".slick-current").attr("data-slick-index");
        console.log(currentindex);
        next=count+1;
        if(next>max){
          next=1;
        }
        prev=count-1;
        if(prev < 1){
          prev=max;
        }
        if(key==next) {
          if(currentindex==0){
            const nextindexes=[-2,1,4];
            for(let i of nextindexes){
              let path = obj.img_path;
              let ing = obj.ingredients.split(',');
              $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
              $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
              let count1=0;
              for (let item of ing) {
                  count1++;
                  if(count1<4){
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

              }
              $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);

            }
          }
          if(currentindex==1){
            const nextindexes=[2,-1,5];
            for(let i of nextindexes){
              let path = obj.img_path;
              let ing = obj.ingredients.split(',');
              $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
              $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
              let count1=0;
              for (let item of ing) {
                  count1++;
                  if(count1<4){
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

              }
              $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);

            }
          }
          if(currentindex==2){
            const nextindexes=[3,0];
            for(let i of nextindexes){
              let path = obj.img_path;
              let ing = obj.ingredients.split(',');
              $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
              $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
              let count1=0;
              for (let item of ing) {
                  count1++;
                  if(count1<4){
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

              }
              $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);
            }
          }
        }
        if(key==prev) {
          if(currentindex==0){
            const nextindexes=[-1,2,5];
            for(let i of nextindexes){
              let path = obj.img_path;
              let ing = obj.ingredients.split(',');
              $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
              $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
              let count1=0;
              for (let item of ing) {
                  count1++;
                  if(count1<4){
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

              }
              $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);

            }
          }
          if(currentindex==1){
            const nextindexes=[0,3];
            for(let i of nextindexes){
              let path = obj.img_path;
              let ing = obj.ingredients.split(',');
              $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
              $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
              let count1=0;
              for (let item of ing) {
                  count1++;
                  if(count1<4){
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

              }
              $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);

            }
          }
          if(currentindex==2){
            const nextindexes=[-2,1,4];
            for(let i of nextindexes){
              let path = obj.img_path;
              let ing = obj.ingredients.split(',');
              $(`div[data-slick-index=${i}]`).children().children().children('.img_space').attr("src", path);
              $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').html('');
              let count1=0;
              for (let item of ing) {
                  count1++;
                  if(count1<4){
                  $(`div[data-slick-index=${i}]`).children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}

              }
              $(`div[data-slick-index=${i}]`).children().children().children('.name').html(obj.name);
            }
          }
        }
        if(key==count) {
            let path = obj.img_path;
            let ing = obj.ingredients.split(',');
            $(".slick-current").children().children().children('.img_space').attr("src", path);
            $(".slick-current").children().children().children('.fouringredients').html('');
            $('.completeingredients').html('');
            let count1=0;
            for (let item of ing) {
                count1++;
                if(count1<4){
                $(".slick-current").children().children().children('.fouringredients').append(`<a href="#">${item}</a>`);}
                $('.completeingredients').append(`<a href="#">${item}</a>`);
            }
            $('.price').html(obj.price);
            $(".slick-current").children().children().children('.name').html(obj.name);
            $('.res_name').html(obj.res_name);
            $('.res_tel').attr("href", `tel:${obj.res_tel}`);
            $('.res_website').attr("href", obj.website);
            let add = obj.res_address.split(',');
            $('.res_address_text').html('');
            for (let item of add) {
                $('.res_address_text').append(`<p>${item}</p>`);
            }
        }
    });
    // ************************************************************************
    // code for navigating the databse records using buttons
    //                      ENDS HERE
    // ************************************************************************




    //Enable swiping...
    $(".slick-slide").swipe( {
      //Generic swipe handler for all directions
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        console.log("You swiped " + direction );
        if(direction=='left'){
          $(".next").trigger("click");
        }
        if(direction=='right'){
          $(".prev").trigger("click");
        }
        if(direction=='up'){
          $('#gofoodinfo').trigger("click");
        }
      },
      //Default is 75px, set to 0 for demo so any distance triggers swipe
       threshold:0
    });
});
