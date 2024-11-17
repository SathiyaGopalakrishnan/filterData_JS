const data=[
    {id:'1',title:"car"},
    {id:'2',title:"bus"},
      {id:'3',title:"train"} ,
      {id:'4',title:"shop"},
      {id:'5',title:"plane"}

     
];
/*
const upperData=data.map(
  (el)=>{
    return el.title.toUpperCase();
}
)
document.writeln(upperData);
*/

const filteredData = data.filter(  (e1)=>{
    return e1.id % 2 == 0;
  }
)
console.log(filteredData);