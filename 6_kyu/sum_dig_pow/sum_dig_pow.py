def sum_dig_pow(a, b):
    return [x for x in range(a, b) if sum_pow_is_x(x)]

def sum_pow_is_x(x):
    if sum([(int(y) ** (idx +1)) for idx, y in enumerate(str(x))]) == x:
        return x
