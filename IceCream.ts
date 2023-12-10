import IceCreamPriceInterface from "./IceCreamPriceInterface";

class IceCream implements IceCreamPriceInterface {
  price(): number {
    //  1000 is init price
    return 1000;
  }
}

export default IceCream;
