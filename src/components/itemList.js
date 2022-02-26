import Item from "./item";


const ItemList = () => {

const books = [
    {img:"https://www.libreriaalberti.com/media/img/portadas/_visd_0000JPG024V3.jpg",title: 'El Fantasma de Canterville',writer: 'Oscar Wilde',price: '4500$',},
    {img:"https://contentv2.tap-commerce.com/cover/large/9789505153527_1.jpg?id_com=1113",title: 'Operacion Masacre',writer: 'Rodolfo Walsh',price: '3710$',},
    {img:"https://images.cdn3.buscalibre.com/fit-in/360x360/93/96/939646b62ed22985f2b50e6b9057a22f.jpg",title: 'Demian',writer: 'Hermann Hesse',price: '1799$',},



]
return (
    <div>
        <Item book={books[0]}></Item>
        <Item book={books[1]}></Item>
        <Item book={books[2]}></Item>

        
        
    
    </div>



)


}
export default ItemList