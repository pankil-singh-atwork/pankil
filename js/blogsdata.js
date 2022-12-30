let blogsdata = [
    {
      id : 1,
      slug : "myfirstblog",
      title : "My First Blog",
      description : "this is my first blog"
    },
    {
      id : 2,
      slug : "mysecondblog",
      title : "My Second Blog",
      description : "this is my second blog"
    },
]

console.log(blogsdata)
for(let i=0;i<blogsdata.length;i++) {
  const title = document.createElement("h2");
  const header = document.createTextNode(blogsdata[i].title);
  // appending it to the header element 
  title.appendChild(header);
  const element = document.getElementById('blogs');
  element.appendChild(title);
  const para = document.createElement("p");
  const node = document.createTextNode(blogsdata[i].description);
  // appending it to my paragraph element 
  para.appendChild(node);
  // adding it to the div element
  element.appendChild(para);
}