$(document).ready(function () {
    // window.alert("document ready");
})

$(document).keydown(function (event) {
    // alert( "document Handler for .keydown() called." + event.keydown );
    console.log(event);
    switch (event.keyCode) {
        case 37:// 左键
            console.log("you pressed down 'left'");
            break;
        case 38:// up键
            console.log("you pressed down 'up'");
            break;
        case 39:// 右键
            console.log("you pressed down 'right'");
            break;
        case 40:// down键
            console.log("you pressed down 'down'");
            break;
        default:
            console.log("you pressed what i dont care");
            break;
    }
});