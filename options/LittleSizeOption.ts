import IceCreamPriceDecorator from "../IceCreamPriceDecorator";

class LittleSizeOption extends IceCreamPriceDecorator {
  public price(): number {
    const beforePrice = super.price();
    return beforePrice + (beforePrice * 10) / 100;
  }
}

export default LittleSizeOption;
