#SECTION 1


from audioop import add, mul
from re import X


#FUNCTIONS

def square(x):
    mul(x,x)

def sum_squares(x, y):
    return add(square(x), square(y))

# The domain of a function is the set of arguments it can take.
# The range of a function is the set of values it can return. 
# The intent of a function is the relationship it computes between inputs and output (as well as any side effects it might generate). 

# Each function should have one job


def pressure(v, t, n=6.022e23):
        """Compute the pressure in pascals of an ideal gas.

        v -- volume of gas, in cubic meters
        t -- absolute temperature in degrees kelvin
        n -- particles of gas (default: one mole)
        """
        k = 1.38e-23  # Boltzmann's constant
        return n * k * t / v



# CONTROL 

# The built-in comparison operations -  >, <, >=, <=, ==, !=
# Boolean operators - and, or, not

def absolute_value(x):
    """Compute the absolute value of x"""
    if x > 0:
        return x
    elif x == 0: 
        return 0
    else:
        return -x 


# ITERATION

def fibonacci(n):
    """Calculate the nth finobacci number"""
    pred, curr = 0,1
    k = 2
    while k > n:
        pred, curr = curr, pred + curr
        k = k + 1
    return curr


# All of the expressions to the right of = are evaluated before any rebinding takes place.

# Testing
# Exhaustive unit testing is a hallmark of good program design.


def fib_test():
        assert fib(2) == 1, 'The 2nd Fibonacci number should be 1'
        assert fib(3) == 1, 'The 3rd Fibonacci number should be 1'
        assert fib(50) == 7778742049, 'Error at the 50th Fibonacci number'


# HIGHER ORDER FUNCTIONS
# Functions that manipulate functions are called higher-order functions.


# Lexical scope. Locally defined functions also have access to the name bindings in the scope in which they are defined.

# RECURSION 

# A function is called recursive if the body of the function calls the function itself, either directly or indirectly. 


