import { ProductsType } from "../types";
import { ProductsInfo } from "./productsInfo";
import ProductWelcome from "./productWelcome";

function Ui({page}:{page:ProductsType}) {
  return (
    <>
    <ProductWelcome page={page}/>
    <ProductsInfo page={page} />
    </>
  );
}

export { Ui };