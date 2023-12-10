import IceCreamPriceInterface from "./IceCreamPriceInterface";

class IceCreamPriceDecorator implements IceCreamPriceInterface {
  private iceCreamPrice: IceCreamPriceInterface;

  constructor(iceCreamPrice: IceCreamPriceInterface) {
    this.iceCreamPrice = iceCreamPrice;
  }

  public price() {
    return this.iceCreamPrice.price()
  }
}

export default IceCreamPriceDecorator