# Control


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
