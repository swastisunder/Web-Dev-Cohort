/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
export function createThaliDescription(thali) {
  if (typeof thali !== "object" || thali === null) {
    return "";
  }

  if (
    typeof thali.name !== "string" ||
    !Array.isArray(thali.items) ||
    typeof thali.price !== "number" ||
    typeof thali.isVeg !== "boolean"
  ) {
    return "";
  }

  const name = thali.name.toUpperCase();

  let type;
  if (thali.isVeg === true) {
    type = "Veg";
  } else {
    type = "Non-Veg";
  }

  const itemsText = thali.items.join(", ");
  const priceText = thali.price.toFixed(2);

  return name + " (" + type + ") - Items: " + itemsText + " - Rs." + priceText;
}

export function getThaliStats(thalis) {
  if (!Array.isArray(thalis) || thalis.length === 0) {
    return null;
  }

  let vegCount = 0;
  let nonVegCount = 0;
  let totalPrice = 0;

  let cheapest = thalis[0].price;
  let costliest = thalis[0].price;

  let names = [];

  for (let i = 0; i < thalis.length; i++) {
    const thali = thalis[i];

    names.push(thali.name);
    totalPrice = totalPrice + thali.price;

    if (thali.isVeg === true) {
      vegCount = vegCount + 1;
    } else {
      nonVegCount = nonVegCount + 1;
    }

    if (thali.price < cheapest) {
      cheapest = thali.price;
    }

    if (thali.price > costliest) {
      costliest = thali.price;
    }
  }

  const avgPrice = (totalPrice / thalis.length).toFixed(2);

  return {
    totalThalis: thalis.length,
    vegCount: vegCount,
    nonVegCount: nonVegCount,
    avgPrice: avgPrice,
    cheapest: cheapest,
    costliest: costliest,
    names: names,
  };
}

export function searchThaliMenu(thalis, query) {
  if (!Array.isArray(thalis) || typeof query !== "string") {
    return [];
  }

  const result = [];
  const searchText = query.toLowerCase();

  for (let i = 0; i < thalis.length; i++) {
    const thali = thalis[i];
    let found = false;

    if (typeof thali.name === "string") {
      if (thali.name.toLowerCase().includes(searchText)) {
        found = true;
      }
    }

    if (!found && Array.isArray(thali.items)) {
      for (let j = 0; j < thali.items.length; j++) {
        if (thali.items[j].toLowerCase().includes(searchText)) {
          found = true;
          break;
        }
      }
    }

    if (found) {
      result.push(thali);
    }
  }

  return result;
}

export function generateThaliReceipt(customerName, thalis) {
  if (
    typeof customerName !== "string" ||
    !Array.isArray(thalis) ||
    thalis.length === 0
  ) {
    return "";
  }

  let receipt = "THALI RECEIPT\n---\n";
  receipt = receipt + "Customer: " + customerName.toUpperCase() + "\n";

  let total = 0;

  for (let i = 0; i < thalis.length; i++) {
    receipt =
      receipt + "- " + thalis[i].name + " x Rs." + thalis[i].price + "\n";
    total = total + thalis[i].price;
  }

  receipt = receipt + "---\n";
  receipt = receipt + "Total: Rs." + total.toFixed(2) + "\n";
  receipt = receipt + "Items: " + thalis.length;

  return receipt;
}
