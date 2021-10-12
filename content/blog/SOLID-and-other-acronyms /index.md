---
title: Solid and Other Acronyms
date: "2021-10-12T10:09:05"
description: "Acronyms to bear in mind while problem-solving."
---

Robert C. Martin introduced SOLID principles in the early 2000s. Yet today, after two decades after his explanation about the principles, they still serve the purpose of designing well-thought-out and flexible programs. The five fundamental principles are:

**Single Responsibility Principle**

‘There should never be more than one reason for a class to change.’

Simply put, a class has one responsibility and do it well.

**Open/Closed Principle**

‘A module should be open for extension but closed for modification.’

Simply put, favour composition over inheritance. And you think about composition while writing your code, the cleaner the tests become. For example, a mock function when the tests are being run instead of a real function. It’s easy to swap them when you have composition in your mind.

**Liskov Principle**

‘Subtypes must be substitutable for their base types.’

Simply put, the objects of a class should be replaceable with objects of a subclass without breaking the application.

**Interface Principle**

‘Classes that implement interfaces, should not be forced to implement methods they do not use.’

Simply put, prefer various small and straightforward interfaces over one, God-like interface.

**Dependency Inversion Principle**

‘High-level modules should not depend on low-level modules, rather both should depend on abstraction.’

Simply put, prefer to inject a high-level class or function into a low-level class or function by passing it in a low-level class or function arguments. That way, a low-level class or function has nothing to do or care about a high-level class or function but use it.

**Other Acronyms Apart From Solid Are Relevant Still Today.**

**DRY**

Don’t Repeat Yourself. Don’t repeat yourself while coding, testing and documenting.

**YAGNI**

You Aren’t Going To Need It. You aren’t going to need to write a separate function to sum up the row numbers when the client says she wants a total number only, for example. It’s loosely tied by MVP, Minimum Viable Product.