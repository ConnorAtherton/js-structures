- class, object (and the difference between the two)

A class is a definition of how an object should be created and a list of what
data it should store and the actions that can be performed on an object. An object
is a realization of a class.

- instantiation

When space is allocated for an object according to its class definition. State inside the
object is usually set via a special method, labelled as the constructor.

- method (as opposed to, say, a C function)

Has an implicit receiver and can interact with any state hidden inside
the object. Almost exclusively used in OOP.

- virtual method, pure virtual method

An inheritable method that is only bound at runtime instead of compile time,
Facilitates polymorphism and main tenant of OOP, late-binding.

- class/static method

Are attached to a particular class and does not have access to any instance variables.
Typically accept all state as input and return a value based purely on that.

- static/class initializer

Loaded and run before the main method or the constructor is called. Has no access to any context
and return values are never used.

- constructor

A special method, whose name varies by language, that is used to create an object and execute
any other setup configuration the object may require.

- destructor/finalizer

Called when the lifetime of an object ends. Should be used to free any resources the object
was aquired during its lifetime.

- superclass or base class

Is the class an object derives from, mainly to share implementation behaviour. In OOP, usually
message dispatch will have a method search mechanism whereby it will search through the
ancestors chain until it reaches a matching method and calls it with the context bound
to the calling object.

In general, subtyping creates an is-a relationship and creates interface inheritance.

- subclass or derived class

A class that extends, and therefore implements behaviour from, another class. Existing
functionality can be modified in the subclass and new functionality can be added to model
a more specific case of the parent Date structure.

- inheritance

When an object or class is based on another object (prototypal)
or class (class-based inheritance) to use the same implementation or
implement specific behaviour for methods and data attributes.

- encapsulation

Binding together all data and behaviours inside an instance to keep them safe from outside
interferance. Implementation details are hidden from the outside world to keep disparate
parts of the sysm seperate and to keep the API surface area as small as possible.

- multiple inheritance (and give an example)

The ability for a class to inherits behaviour from 2 or more base classes.
Alternative methods like mixins and traits are commonly used in recent programming
languages.

- delegation/forwarding

Both involve sending another message to an entity in the system.

Fowarding: the receiver acts in its own context
Delegation: the receiver acts on the behalf of the sender

- composition/aggregation

Object may be composed of other objects to model complex relationships in a system. An object
composed of other objects implies ownership of those object. On the other hand, and object can
contain an aggregation of object, each of which can exist independently, and therefore
does not imply ownership.

- abstract class

A class containing one or more abstract methods. An abstract method is one declared but
with no implementation. Abtract classes can't be instantiated and require all subclasses
to provide implementations for the abstract methods.

- interface/protocol (and different from abstract class)

Definitions of all method signatures without implementation that must be implemented
by all classes that try to implement that interface.

Different from an abstract class, an implementation may contain no state or implementation.

- method overriding

Defining a method with the same signature as one that has already been defined, either earlier in
the class definition, or, most likely in any class present in the ancestor chain.

- method overloading (and difference from overriding)

Overloading is providing the same method with different signatures and the signature
matching the call is invoked.

- polymorphism (without resorting to examples)

- is-a versus has-a relationships (with examples)

Is-a usually refers to inheritance of a base class, and has-a usually refers to including other
objects behaviours inside an object.

- method signatures (what's included in one)

The required signature differs by language:

- return type.
- name (should be uniquely identifiable unless the language support method overloading)
- number and type of parameters and, if allowed, their default values.
- the method visibility (public/private/protected)

- method visibility (e.g. public/private/other)

public: Can be called from any other class
private: Can only be called from within the class it was defined
protected: Can only be called from within that class of subclasses
