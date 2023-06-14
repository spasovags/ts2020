class Commenting{
  constructor(public reply: string, public username: string, public pic: string){
  }

  addComment(){
    const photoparag = document.createElement("p");
    const photoname = document.createTextNode(`${this.pic}`);
    photoparag.appendChild(photoname);
    
    const userparag = document.createElement("p");
    const username = document.createTextNode(`${this.username}`);
    userparag.appendChild(username);
    const replyparag = document.createElement("p");
    const reply = document.createTextNode(`${this.reply}`);
    replyparag.appendChild(reply);
    
    const commentsUl = document.getElementById("comments") as HTMLUListElement;
    const commentli = document.createElement("li");    
    commentli.appendChild(photoparag);

    commentli.appendChild(userparag);
    commentli.appendChild(replyparag);
    commentsUl.prepend(commentli);
  }
}
//let replies: Commenting[] = [];

const form = document.getElementById('formid') as HTMLFormElement;
form.addEventListener("submit", (event)=>{
  event.preventDefault();
  const replytextarea = document.getElementById('replyid') as HTMLTextAreaElement;
  console.log(replytextarea);
  const userprofpic = document.getElementById('userphoto') as HTMLSelectElement;
  console.log(userprofpic.value, userprofpic.options[userprofpic.selectedIndex].text);

  const replied = new Commenting(replytextarea.value, 
    userprofpic.value, 
    userprofpic.options[userprofpic.selectedIndex].text);
  replied.addComment();
})
