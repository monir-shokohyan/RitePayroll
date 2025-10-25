import { useLocation } from "react-router-dom";
import { ProductsType } from "../types";
import { ProductsInfo } from "./productsInfo";
import ProductWelcome from "./productWelcome";
import { useEffect } from "react";

function Ui({page}:{page:ProductsType}) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <>
    <ProductWelcome page={page}/>
    <ProductsInfo page={page} />
    </>
  );
}

export { Ui };