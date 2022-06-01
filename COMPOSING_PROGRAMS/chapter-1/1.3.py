# Defining New Functions


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

