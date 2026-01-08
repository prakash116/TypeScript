let age: number | string = 22;
console.log(age);

age = "21";

console.log(age);

let status: "pending" | "success" | "reject" = "pending";
console.log(status);

let status1: any = "success"; 
console.log(status1);

status = "success";
status1 = "error";

console.log(status, status1);

const orders: string[] = ["10", "20", "30", "40"];
let currentorder: string | undefined;

for (let order of orders) {
  if (order === "22") {
    currentorder = order;
    break;
  }
}

console.log(currentorder);
