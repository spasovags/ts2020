var Commenting = /** @class */ (function () {
    function Commenting(reply, username, pic) {
        this.reply = reply;
        this.username = username;
        this.pic = pic;
    }
    Commenting.prototype.addComment = function () {
        var photoparag = document.createElement("p");
        var photoname = document.createTextNode("".concat(this.pic));
        photoparag.appendChild(photoname);
        var userparag = document.createElement("p");
        var username = document.createTextNode("".concat(this.username));
        userparag.appendChild(username);
        var replyparag = document.createElement("p");
        var reply = document.createTextNode("".concat(this.reply));
        replyparag.appendChild(reply);
        var commentsUl = document.getElementById("comments");
        var commentli = document.createElement("li");
        commentli.appendChild(photoparag);
        commentli.appendChild(userparag);
        commentli.appendChild(replyparag);
        commentsUl.prepend(commentli);
    };
    return Commenting;
}());
//let replies: Commenting[] = [];
var form = document.getElementById('formid');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var replytextarea = document.getElementById('replyid');
    console.log(replytextarea);
    var userprofpic = document.getElementById('userphoto');
    console.log(userprofpic.value, userprofpic.options[userprofpic.selectedIndex].text);
    var replied = new Commenting(replytextarea.value, userprofpic.value, userprofpic.options[userprofpic.selectedIndex].text);
    replied.addComment();
});
