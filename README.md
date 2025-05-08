# 📝 Use of the "Keyof" keyword in Typescript.

_Keyof in typescript used for to make a union of type for all the properties of a object . let's dive into details of "Keyof" below._

---

## 📖 Overview

This blog post covers:

- 🔹 What is keyof keyword?
- 🔹 What is the use of "Keyof"?
- 🔹 How & Where to use the "Keyof"?

Whether you're a beginner or an experienced developer, you'll find useful insights and practical examples in this post.

---

## 📌 Table of Contents

1. [Introduction](#introduction)
2. [Use of Keyof](#use-of-keyof)
3. [Code Examples](#code-examples)
4. [Key Takeaways](#key-takeaways)

---

## 🧠 Introduction

_Typescript offers vairous utilities for the Coders to write safer & flexible code. Keyof is one of them, it helps to get union of type for all available properties of a given object.It offers safe type to referencing object properties dynamically._

---

## 💡 Use of keyof

_Keyof keyword used to get union of type of properties from a object._

📌 Syntax
```ts  
 type someKey = keyof someObject.

```
## 🔧 Code Examples
Let's discuss the use of keyof from the below code snippets:

```ts
type Vehicle = {
  brand : string;
  year  : number;
};
type vehicleKey = keyof Vehicle; // "brand" | "year"

```
Now, vehicleKey can only be "brand" or "age". 

This also useful while writing functions that work generically with object keys:

```ts
function getVehcile<T, C extends keyof T>(obj: T, key: C): T[C]{
  return obj[key]
}
``` 
## 📌 Key Takeaways

- 🔹Keyof generates a union type of an object type's property keys.

- 🔹By limiting access to just legitimate keys, it improves type safety.

- 🔹It is frequently combined with generics to create reusable and adaptable utilities.

- 🔹Identifies important discrepancies at compile time, preventing runtime mistakes.




# 📝 Use of the "Enums"  in Typescript.

_Enums in Typescript enables developers to use a set of named constants . let's dive into details of "Enums" below._

---

## 📖 Overview

This blog post covers:

- 🔹 What is Enums stands for?
- 🔹 What is the use of "Enums"?
- 🔹 Use of "String" & "Numeric" Enums?

Whether you're a beginner or an experienced developer, you'll find useful insights and practical examples in this post.

---

## 📌 Table of Contents

1. [Introduction](#introduction)
2. [Use of Enmus](#use-of-enums)
3. [Code Examples of Enums](#code-examples)
4. [Key Takeaways](#key-takeaways)

---

## 🧠 Introduction

_Enums stands for abbriviation of Enumerations.In typescripts, Enmus helps us to write readable code,keep our document intent,also allow us to manage a fixed set of relational values like :"states, roles,directions",etc. 

---

## 💡 Use of Enums

_It's biggest usefullness is,it's allow us to represent a group of related values under a single name. It can be either string or Numeric_

📌 Syntax
```ts  
 enum Animals {
  Cat,
  Dog,
  Horse,
  Tiger
 }

```
## 🔧 Code Examples of Numeric Enums
Let's discuss the use of "numeric Enums" from the below code snippets:

```ts
 enum Vehicle {
   Toyota,
   Audi,
   Hyundai,
   Honda,
   Ford
}

 const car: Vehicle = Vehicle.Toyota;
 console.log(car); // Output: 0

```
Numeric Enums are the default Enums in Typescript. They assign automatic values to the Enum Members. We can set custom starting values to the Numeric Enums:

```ts
enum Vehicle {
   Toyota = 1
   Audi,  //2
   Hyundai, //3
   Honda, //4
   Ford, //5
}

```

## 🔧 Code Examples of String Enums
Let's discuss the use of "string Enums" from the below code snippets:


```ts
 enum DomesticAnimal {
   Cat = "CAT",
   Dog = "DOG",
   Chicken = "CHICKEN",
   Duck = "DUCK"
 }

 const animals: DomesticAnimal = DomesticAnimal.Cat;
 console.log(animals); // Output: "CAT"

```
String Enums used to map Enums members to custom string values.
 
📌 Key Takeaways

- 🔹Enums allow us to write group of related values under a single name.

- 🔹Enhance type safety, ensures only valid values are used.

- 🔹Numeric Enums is the default Enums in Typescript,also provide default values assigning.

- 🔹String Enums explicitly assigned to String values,allow to write more readable code, also helpfull to external communications like (API).