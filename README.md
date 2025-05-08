# 📝 Use of the "Keyof" keyword in typescript.

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
2. [Use of Keyof](#UseofKeyof)
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
📌 Key Takeaways

- 🔹Keyof generates a union type of an object type's property keys.

- 🔹By limiting access to just legitimate keys, it improves type safety.

- 🔹It is frequently combined with generics to create reusable and adaptable utilities.

- 🔹Identifies important discrepancies at compile time, preventing runtime mistakes.