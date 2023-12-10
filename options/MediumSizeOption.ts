import IceCreamPriceDecorator from "../IceCreamPriceDecorator";

class MediumSizeOption extends IceCreamPriceDecorator {
  public price(): number {
    const beforePrice = super.price();
    return beforePrice + (beforePrice * 15) / 100;
  }
}

export default MediumSizeOption;
