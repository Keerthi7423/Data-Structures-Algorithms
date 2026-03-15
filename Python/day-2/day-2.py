#creating variables
x = 5
y = "John"
print(x)
print(y)

#Casting
x = str(3)
y = int(3)
z = float(3)

print(x)
print(y)
print(z)

#Get the type of a variable
x = 5
y = "John"
print(type(x))
print(type(y))

#Single or Double Quotes?
x = "John"
print(x)
#double quotes are the same as single quotes:
x = 'John'
print(x)

#Case-Sensitive
a = 4
A = "Sally"

print(a)
print(A)

#Legal variable names:
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"


print(myvar)
print(my_var)
print(_my_var)
print(myVar)
print(MYVAR)
print(myvar2)

# #Illegal variable names:
# 2myvar = "John"
# my-var = "John"
# my var = "John"

# #This example will produce an error in the result

#Many Values to Multiple Variables
x, y, z = "Orange", "Banana", "Cherry"

print(x)
print(y)
print(z)

#One Value to Multiple Variables
x = y = z = "Orange"

print(x)
print(y)
print(z)

#Unpack a Collection
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits

print(x)
print(y)
print(z)

#Output Variables
x = "Python is awesome"
print(x)
#In the print() function, you output multiple variables, separated by a comma:
x = "Python"
y = "is"
z = "awesome"
print(x, y, z)

#You can also use the + operator to output multiple variables:
x = "Python "
y = "is "
z = "awesome"
print(x + y + z)

#For numbers, the + character works as a mathematical operator:
x=5
y=10
print(x+y)

#In the print() function, when you try to combine a string and a number with the + operator, Python will give you an error:
# x = 5
# y = "John"
# print(x + y)

#The best way to output multiple variables in the print() function is to separate them with commas, which even support different data types:
x = 5
y = "John"
print(x, y)

#Create a variable outside of a function, and use it inside the function
x = "awesome"

def myfunc():
  print("Python is " + x)

myfunc()

#Create a variable inside a function, with the same name as the global variable
x = "awesome"

def myfunc():
  x = "fantastic"
  print("Python is " + x)

myfunc()

print("Python is " + x)

#To create a global variable inside a function, you can use the global keyword.
def myfunc():
      global name
name = "fantastic"

myfunc()

print("Python is " + name)

#Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.
x = 1
y = 35656222554887711
z = -3255522

print(type(x))
print(type(y))
print(type(z))

#Float, or "floating point number" is a number, positive or negative, containing one or more decimals.
x = 1.10
y = 1.0
z = -35.59

print(type(x))
print(type(y))
print(type(z))
#Float can also be scientific numbers with an "e" to indicate the power of 10.
x = 35e3
y = 12E4
z = -87.7e100

print(type(x))
print(type(y))
print(type(z))

#Complex numbers are written with a "j" as the imaginary part:
x = 3+5j
y = 5j
z = -5j

print(type(x))
print(type(y))
print(type(z))

#type conversion
#convert from int to float:
x = float(1)

#convert from float to int:
y = int(2.8)

#convert from int to complex:
z = complex(1)

print(x)
print(y)
print(z)

print(type(x))
print(type(y))
print(type(z))

#Random Number
import random

print(random.randrange(1, 10))

#Casting
x = int(1)
y = int(2.8)
z = int("3")
print(x)
print(y)
print(z)

x = float(1)
y = float(2.8)
z = float("3")
w = float("4.2")
print(x)
print(y)
print(z)
print(w)

x = str("s1")
y = str(2)
z = str(3.0)
print(x)
print(y)
print(z)
