import IceCream from "./IceCream";
import LittleSizeOption from "./options/LittleSizeOption";
import MediumSizeOption from "./options/MediumSizeOption";
import ChocolatOption from "./options/ChocolatOption";
import SmartiesOption from "./options/SmartiesOption";

const mohsenIceCream = new IceCream();
const mohsenMediumIceCream = new MediumSizeOption(mohsenIceCream);
const mohsenMediumChocolatIceCream = new ChocolatOption(mohsenMediumIceCream);
const mohsenMediumChocolatSmartiesIceCream = new SmartiesOption(
  mohsenMediumChocolatIceCream
);

console.log(
  "mohsen IceCream Medium Chocolat Smarties = " +
    mohsenMediumChocolatSmartiesIceCream.price()
);

const rezaIceCream = new IceCream();
const rezaLittleIceCream = new LittleSizeOption(rezaIceCream);
const rezaLittleSmartiesIceCream = new SmartiesOption(rezaLittleIceCream);

console.log(
  "reza IceCream Little Smarties = " +
  rezaLittleSmartiesIceCream.price()
);
