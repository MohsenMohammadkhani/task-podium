import IceCreamPriceDecorator from "../IceCreamPriceDecorator";

class BigSizeOption extends IceCreamPriceDecorator {
  public price(): number {
    const beforePrice = super.price();
    return beforePrice + (beforePrice * 20) / 100;
  }
}

export default BigSizeOption;
