$(function(){
    let max=8;
    let count=Math.floor(Math.random() * max) + 1;
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
            if(key==count) {
                let path = obj.img_path;
                let ing = obj.ingredients;
                $('.img_space').attr("src", path);
                $('.ingredients').html(ing);
                $('.res_name').html(obj.res_name);
                $('.res_tel').html(obj.res_tel);
                $('.res_website').html(obj.website);
            }
        });
    });
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
            if(key==count) {
                let path = obj.img_path;
                let ing = obj.ingredients;
                $('.img_space').attr("src", path);
                $('.ingredients').html(ing);
                $('.res_name').html(obj.res_name);
                $('.res_tel').html(obj.res_tel);
                $('.res_website').html(obj.website);
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
        if(key==count) {
            let path = obj.img_path;
            let ing = obj.ingredients;
            $('.img_space').attr("src", path);
            $('.ingredients').html(ing);
            $('.res_name').html(obj.res_name);
            $('.res_tel').html(obj.res_tel);
            $('.res_website').html(obj.website);
        }
    });
});
