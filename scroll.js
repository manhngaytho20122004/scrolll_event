let content = document.querySelectorAll('.content');
let n = content.length;
for ( let i = 0 ; i < n ; i ++)
{
    if(i % 2 == 0 )
    {
      content[i].classList.add('trai');
    }
    else 
     content[i].classList.add('phai');
}
window.addEventListener("scroll",function(e)
{
    const a = window.innerHeight * 6/7; // chiem 6 phan 7 cua cua so khi ma content chiem duoc 1/7 thi no se hien ra
for ( let i = 0 ; i < n ; i ++)
{
   const b  =  content[i].getBoundingClientRect().top; // khoang cach tu top content den ben tren cua so
   console.log(b);
   if ( b < a )
   {
    if(i % 2 == 0)
    content[i].classList.remove('trai');
    else
   content[i].classList.remove('phai');
    content[i].classList.add('show');
   }
   else
   {
    if(i % 2 == 0)
    content[i].classList.add('trai');
    else
   content[i].classList.add('phai');
     content[i].classList.remove('show');
   } 

}
})
