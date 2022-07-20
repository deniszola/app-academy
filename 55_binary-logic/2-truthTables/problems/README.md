# Truth Tables

Open `calculateTruths.js` side by side with this file and use
`calculateTruthTable(A, cb, B)` to calculate individual values. You will still
need to consider the `!` operator and the order of operations as you solve each
of these tables.

Compute the following truth tables:

```console
A    B     !A || (A && B)
--------------------
0    0       ?
0    1       ?
1    0       ?
1    1       ?
```

```console
A    B     B || !A
--------------------
0    0       ?
0    1       ?
1    0       ?
1    1       ?
```

```console
A    B     !(A && !B)
--------------------
0    0       ?
0    1       ?
1    0       ?
1    1       ?
```

```console
A    B     !(A || !B)
--------------------
0    0       ?
0    1       ?
1    0       ?
1    1       ?
```

```console
A    B     A || !A
--------------------
0    0       ?
0    1       ?
1    0       ?
1    1       ?
```

```console
A    B     B && !B
--------------------
0    0       ?
0    1       ?
1    0       ?
1    1       ?
```

```console
A    B    C     A && B || !C
--------------------
0    0    0       ?
0    0    1       ?
0    1    0       ?
0    1    1       ?
1    0    0       ?
1    0    1       ?
1    1    0       ?
1    1    1       ?
```

```console
A    B    C     !A || (B && C)
--------------------
0    0    0       ?
0    0    1       ?
0    1    0       ?
0    1    1       ?
1    0    0       ?
1    0    1       ?
1    1    0       ?
1    1    1       ?
```
