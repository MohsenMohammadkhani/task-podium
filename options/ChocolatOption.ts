import IceCreamPriceDecorator from "../IceCreamPriceDecorator";

class ChocolatOption extends IceCreamPriceDecorator {
  public price(): number {
    const beforePrice = super.price();
    return beforePrice + (beforePrice * 40) / 100;
  }
}

export default ChocolatOption;
