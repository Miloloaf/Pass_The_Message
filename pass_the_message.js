let newMessage = () => {
    let message = document.getElementById("newMessage").value
    document.getElementById("newMessage").value = ""

    if (message === "") {
        document.getElementById("noMessage").style.display = "flex"
        setTimeout(() => {
            document.getElementById("noMessage").style.display = "none";
        }, 3000);

        document.getElementById("lastMessage").innerHTML = "";
    } else {

    document.getElementById("lastMessage").innerHTML = ""
    $("#lastMessage").fadeOut( function() {
        $(this).text(message).fadeIn(700);
    });
    }
} 