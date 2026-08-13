import Product from "./Product";
function ProductTab(){
     let feature = [<li>hi-teh</li>,<li>durable</li>,<li>light weight</li>];
       
    return(
    <>
    <Product title="Laptop" price={1000} features={feature} />
    <Product title="Printer" price={200} features={feature} />
    <Product title="Monitor" price={300} features={feature} />
    </>
)
}
export default ProductTab